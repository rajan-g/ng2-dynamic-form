import { BaseForm } from "./base";
import { Component, Input } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { PropertyHandler } from "../control-meta/PropertyHandler";
import { ControlTypes } from "../control-meta/control-types";
import { TextControl } from "../controls/text-control";
import { ValidationConfig, LabelConfig, FormConfig } from "../configs/configs";
import { BaseLayout, LayoutConfig } from "../layouts/base";

@Component({
  selector: 'df-bootstrap-form',
  templateUrl: './src/forms/dynamic-form.component.html'
})
export class DynamicForm extends BaseForm {
  @Input('formData') formData:BaseForm;
  enableForm:boolean = false;
  // utilInfos: any = { formStyle: FormStyles.BOOTSTRAP_VERTICAL, theme: FormStyles.THEME_BOOTSTRAP};
  dynaForm: FormGroup;
  originalInputData:any;
  controls = {};
  util:any= {
      addControl : (name:string, formControl:FormControl, isSubmitedCb:any) => {
          this.dynaForm.addControl(name, formControl);
          this.controls[name] =  {
              enableError: isSubmitedCb            }
      }
  }
  constructor(private fb: FormBuilder, private propertyHandler:PropertyHandler) {
      super();
      this.dynaForm = this.fb.group({});

  }

  ngOnInit() {
       if (!this.formData) {
           throw Error("formData missing");
       }
       if (!this.formData.name) {
           throw Error("formName missing");
       }
       if (!this.formData.fileds) {
           throw Error("controls missing");
       }
       if (!this.formData.dataObject) {
           throw Error("dataObject missing");
       }

       //build form controls
       let controls = this.formData.fileds;
       this.formData.formConfig = this.formData.formConfig || new FormConfig();
       this.formConfig.controls = this.controls;
       if(controls && controls.length) {
            this.addControls(controls);
        }
        if(this.formData && this.formData.layout) {
            this.iterateLayout(this.formData.layout);
        }

      //  this.formData.formStyle =this.formData.formStyle || FormStyles.BOOTSTRAP_VERTICAL;
      //  this.formData.theme = this.formData.theme || FormStyles.THEME_BOOTSTRAP;
      //  this.utilInfos.formStyle = this.formData.formStyle;
       this.setCustomizedDataObject()
       this.enableForm = true;
   }
   generateId() {
       return Math.random().toString().split('.')[1];
   }
   iterateLayout(layout: BaseLayout) {
    if(!layout.id) {
        layout.id = this.generateId();
    }
    if(layout.fileds && layout.fileds.length) {
        this.addControls(layout.fileds);
    }
    layout.formGroup = this.dynaForm;
    if(layout.items && layout.items.length) {
        for(var i=0;i<layout.items.length; i++){
            let item = layout.items[i];
            item.formGroup = this.dynaForm;
            item = new BaseLayout(item);
            if(!item.id) {
                item.id = this.generateId();
            }
            if(!layout.formConfig) {
                item.formConfig = this.formData.formConfig;
            }
            if(!item.layoutConfig) {
                item.layoutConfig = new LayoutConfig();
            }
            this.iterateLayout(item);
        }
    }
   }
   addControls(controls:Array<any>) {
    for(let i=0; i<controls.length; i++) {
        let item = controls[i];
        item.formConfig = this.formConfig;
        item.formGroup = this.dynaForm;
        switch(item.controlType) {
          case 'textbox':
          case 'email':
          case 'number':
            controls[i] = new TextControl(controls[i],this.util, this.formData.dataObject );
            if(!controls[i].validationConfig) {
             controls[i].validationConfig = this.formData.formConfig.validationConfig || new ValidationConfig();
            }
            
            if(!controls[i].labelConfig) {
             controls[i].labelConfig = this.formData.formConfig.labelConfig || new LabelConfig();
            }
            break;
        }
      }
   }
  sendResult() {
      if (!this.dynaForm.valid || !this.isRadiosValid()) {
          for(let key in this.controls) {
              this.controls[key]['enableError']();
          }
          return;
      }
      this.setCheckBoxValue();    
      // this.setSelectBoxValues();  //TODO
      this.composeResultData();
      this.formData.callBack(this.originalInputData);
  }
  
  isRadiosValid() {
      for (let i = 0; i < this.formData.fileds.length; i++) {  
          //checkbox unchecked value setup
          let ctl = this.formData.fileds[i];
          if (ctl.controlType === ControlTypes.RADIO) {
              if (!this.dynaForm.controls[ctl.valueProperty].value) {
                  return false;                   
              }
          }
      }
      return true;
  }
  
  setCheckBoxValue() {     
      for (let i = 0; i < this.formData.fileds.length; i++) {
          //checkbox unchecked value setup
          let ctl = this.formData.fileds[i];
          if (ctl.controlType === ControlTypes.CHECKBOX) {
              if (this.dynaForm.controls[ctl.valueProperty].value) {
                  this.formData.dataObject[ctl.valueProperty] = ctl.checkedValue || true;                    
              }else {
                  this.formData.dataObject[ctl.valueProperty] = ctl.unCheckedValue || false;
              }
          }
      }
  };
  
  /* TODO
  
  *setSelectBoxValues() {
      for (let i = 0; i < this.selectCtls.length; i++) {
          let ctl = this.selectCtls['_results'][i];
          if (ctl.multiselect) {
              this.formData.dataObject[ctl.valueProperty] = ctl.selectedList ;
          }else {
              this.formData.dataObject[ctl.valueProperty] =  JSON.parse(ctl.dataObject[ctl.valueProperty]) ;
          }
      }
  }*/
  
  setCustomizedDataObject() {
      let originalInputData = this.formData.dataObject;
      let controls = this.formData.fileds
      let customDataObject = {};
      for(let i=0; i<controls.length; i++) {
          let prop = controls[i]['valueProperty'];
          let value = this.propertyHandler.getValueByProperty(originalInputData, prop);
          customDataObject[prop] = value;
          originalInputData = this.propertyHandler.buildPropertyWithValue(originalInputData, prop, value);
      }
      this.originalInputData = originalInputData;
      this.formData.dataObject = customDataObject;
  }
  
  composeResultData() {
      let originalInputData = this.originalInputData;
      let controls = this.formData.fileds
      let customDataObject = this.formData.dataObject;;
      for(let i=0; i<controls.length; i++) {
          let prop = controls[i]['valueProperty'];
          let value = customDataObject[prop];
          customDataObject[prop] = value;
          originalInputData = this.propertyHandler.buildPropertyWithValue(originalInputData, prop, value);
      }
      this.originalInputData = originalInputData;
  }
}