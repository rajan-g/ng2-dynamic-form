import { BaseControl } from "../control-meta/base";
import { LabelConfig, ValidationConfig, FormConfig } from "../configs/configs";
import { TextControl } from "../controls/text-control";
import { FormBuilder } from "@angular/forms";
import { NextandPrevious } from "./nextandprevious";



export class BaseLayout extends NextandPrevious  {
  _type: LAYOUTS = LAYOUTS.default;
  _fileds: Array<BaseControl> = []
  _items: Array<BaseLayout> = [];
  _layoutConfig: LayoutConfig;
  _labelConfig: LabelConfig;
  _validationConfig: ValidationConfig;
  _id: String;
  _enable:boolean = true;
  _readOnly:boolean = false;
    constructor(obj:any) {
        super();
        for(let key in obj) {
            this[key] = obj[key];
          }
    }
	// constructor(form:FormBuilder, data:any, ) {
    //     super();
    // let fileds = this.fileds;
    // for(let i=0; i< fileds.length; i++) {
    //    let item = fileds[i];
    //    switch(item.controlType) {
    //      case 'text': 
    //      fileds[i] = new TextControl(item, form, data);
    //    }
    // }
	// }
  

    /**
     * Getter type
     * @return {LAYOUTS }
     */
	public get type(): LAYOUTS  {
		return this._type;
	}

    /**
     * Getter fileds
     * @return {Array<BaseControl> }
     */
	public get fileds(): Array<BaseControl>  {
		return this._fileds;
	}

    /**
     * Getter items
     * @return {Array<BaseLayout> }
     */
	public get items(): Array<BaseLayout>  {
		return this._items;
	}

    /**
     * Getter layoutConfig
     * @return {LayoutConfig}
     */
	public get layoutConfig(): LayoutConfig {
		return this._layoutConfig;
	}

    /**
     * Getter labelConfig
     * @return {LabelConfig}
     */
	public get labelConfig(): LabelConfig {
		return this._labelConfig;
	}

    /**
     * Getter validationConfig
     * @return {validationConfig}
     */
	public get validationConfig(): ValidationConfig {
		return this._validationConfig ;
	}

    /**
     * Setter type
     * @param {LAYOUTS } value
     */
	public set type(value: LAYOUTS ) {
		this._type = value;
	}

    /**
     * Setter fileds
     * @param {Array<BaseControl> } value
     */
	public set fileds(value: Array<BaseControl> ) {
		this._fileds = value;
	}

    /**
     * Setter items
     * @param {Array<BaseLayout> } value
     */
	public set items(value: Array<BaseLayout> ) {
		this._items = value;
	}

    /**
     * Setter layoutConfig
     * @param {LayoutConfig} value
     */
	public set layoutConfig(value: LayoutConfig) {
		this._layoutConfig = value;
	}

    /**
     * Setter labelConfig
     * @param {LabelConfig} value
     */
	public set labelConfig(value: LabelConfig) {
		this._labelConfig = value;
	}

    /**
     * Setter validationConfig
     * @param {validationConfig} value
     */
	public set validationConfig(value: ValidationConfig) {
		this._validationConfig = value;
    }
    

    /**
     * Getter id
     * @return {String}
     */
	public get id(): String {
        if(!this._id) {
            this.id = (Math.floor((Math.random() * 10) + 1)+'').split('.')[1];
        }
		return this._id;
	}

    /**
     * Setter id
     * @param {String} value
     */
	public set id(value: String) {
		this._id = value;
    }
    

    /**
     * Getter enable
     * @return {boolean}
     */
	public get enable(): boolean {
        if(this.enableBy && this.enableBy.length) {
            return this.processEnable();
        }
		return this._enable;
	}

    /**
     * Getter readOnly
     * @return {boolean}
     */
	public get readOnly(): boolean {
        let result = this._readOnly;
        if(this.readOnlyBy && this.readOnlyBy.length) {
             result = this.processReadOnly();
        }
        this.fileds.forEach((filed) => {
            filed.readOnly = result;
        });
		return result;
	}

    /**
     * Setter enable
     * @param {boolean} value
     */
	public set enable(value: boolean) {
		this._enable = value;
	}

    /**
     * Setter readOnly
     * @param {boolean} value
     */
	public set readOnly(value: boolean) {
        this.fileds.forEach((filed) => {
            filed.readOnly = value;
        });
		this._readOnly = value;
	}




}

export class LayoutConfig {
  private _title: String;
  private _enableNext: boolean = false;
  private _hasNextButton: boolean = true;
  private _hasBackButton: boolean = true;
  private _hasNextButtonPossition: DirectionButton = DirectionButton.butttom;
  private _hasBackButtonPossition: DirectionButton = DirectionButton.top;
  private _stepHederClasses: String;
  private _stepBodyClasses: String;

    /**
     * Getter title
     * @return {String}
     */
	public get title(): String {
		return this._title;
	}

    /**
     * Getter enableNext
     * @return {boolean }
     */
	public get enableNext(): boolean  {
		return this._enableNext;
	}

    /**
     * Getter hasNextButton
     * @return {boolean }
     */
	public get hasNextButton(): boolean  {
		return this._hasNextButton;
	}

    /**
     * Getter hasBackButton
     * @return {boolean }
     */
	public get hasBackButton(): boolean  {
		return this._hasBackButton;
	}

    /**
     * Getter hasNextButtonPossition
     * @return {DirectionButton }
     */
	public get hasNextButtonPossition(): DirectionButton  {
		return this._hasNextButtonPossition;
	}

    /**
     * Getter hasBackButtonPossition
     * @return {DirectionButton }
     */
	public get hasBackButtonPossition(): DirectionButton  {
		return this._hasBackButtonPossition;
	}

    /**
     * Getter stepHederClasses
     * @return {String}
     */
	public get stepHederClasses(): String {
		return this._stepHederClasses;
	}

    /**
     * Getter stepBodyClasses
     * @return {String}
     */
	public get stepBodyClasses(): String {
		return this._stepBodyClasses;
	}

    /**
     * Setter title
     * @param {String} value
     */
	public set title(value: String) {
		this._title = value;
	}

    /**
     * Setter enableNext
     * @param {boolean } value
     */
	public set enableNext(value: boolean ) {
		this._enableNext = value;
	}

    /**
     * Setter hasNextButton
     * @param {boolean } value
     */
	public set hasNextButton(value: boolean ) {
		this._hasNextButton = value;
	}

    /**
     * Setter hasBackButton
     * @param {boolean } value
     */
	public set hasBackButton(value: boolean ) {
		this._hasBackButton = value;
	}

    /**
     * Setter hasNextButtonPossition
     * @param {DirectionButton } value
     */
	public set hasNextButtonPossition(value: DirectionButton ) {
		this._hasNextButtonPossition = value;
	}

    /**
     * Setter hasBackButtonPossition
     * @param {DirectionButton } value
     */
	public set hasBackButtonPossition(value: DirectionButton ) {
		this._hasBackButtonPossition = value;
	}

    /**
     * Setter stepHederClasses
     * @param {String} value
     */
	public set stepHederClasses(value: String) {
		this._stepHederClasses = value;
	}

    /**
     * Setter stepBodyClasses
     * @param {String} value
     */
	public set stepBodyClasses(value: String) {
		this._stepBodyClasses = value;
	}

  
 }


enum LAYOUTS {
  default = "default",
  column = "column",
  pannel = "pannel",
  accordion = "accordion",
  tab = "tab",
  steps = "steps",
}

enum DirectionButton {
  top = "top",
  butttom = "butttom",
  left = "left",
  right = "right",
}