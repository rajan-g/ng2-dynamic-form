import { FormConfig } from "../configs/configs";
import { FormGroup } from "@angular/forms";

export abstract class TrilDownBase {
   _enableBy: Array<any>;
   _formConfig:FormConfig;
   _formGroup:FormGroup;
   _readOnlyBy: Array<any>;
   
  public processEnable() {
   let final = true;
   if(this._enableBy && this.enableBy.length) {
     for(let i=0; i<this.enableBy.length; i++) {
       let item = this.enableBy[i];
       if(item && item.call && this.formGroup && this.formGroup.controls) {
        let result = item(this.formGroup.controls);
        if(!result) {
          final = false;
        }
       }
     }
   }
   return final;
 }
 public  processReadOnly() {
   let final = false;
   if(this._readOnlyBy && this._readOnlyBy.length) {
     for(let i=0; i<this.readOnlyBy.length; i++) {
       let item = this.readOnlyBy[i];
       if(item && item.call && this.formGroup && this.formGroup.controls) {
        let result = item(this.formGroup.controls);
        if(result) {
          final = true;
        }
       }
     }
   }
   return final;
 }

    /**
     * Getter enableBy
     * @return {Array<any>}
     */
	public get enableBy(): Array<any> {
		return this._enableBy;
	}

    /**
     * Getter readOnlyBy
     * @return {Array<any>}
     */
	public get readOnlyBy(): Array<any> {
		return this._readOnlyBy;
	}

    /**
     * Getter formConfig
     * @return {FormConfig}
     */
	public get formConfig(): FormConfig {
		return this._formConfig;
	}

    /**
     * Getter formGroup
     * @return {FormGroup}
     */
	public get formGroup(): FormGroup {
		return this._formGroup;
	}

    /**
     * Setter enableBy
     * @param {Array<any>} value
     */
	public set enableBy(value: Array<any>) {
		this._enableBy = value;
	}

    /**
     * Setter readOnlyBy
     * @param {Array<any>} value
     */
	public set readOnlyBy(value: Array<any>) {
		this._readOnlyBy = value;
	}

    /**
     * Setter formConfig
     * @param {FormConfig} value
     */
	public set formConfig(value: FormConfig) {
		this._formConfig = value;
	}

    /**
     * Setter formGroup
     * @param {FormGroup} value
     */
	public set formGroup(value: FormGroup) {
		this._formGroup = value;
	}

 
}