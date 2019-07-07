import { BaseControl } from "../control-meta/base";
import { FormConfig } from "../configs/configs";
import { BaseLayout } from "../layouts/base";

export class BaseForm {
private _name: string;
private _fileds: Array<BaseControl> = [];
private _formConfig: FormConfig = new FormConfig();
private _layout: BaseLayout;
private _dataObject: any;
private _callBack: Function;
private _controls:any;

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter fileds
     * @return {Array<BaseControl> }
     */
	public get fileds(): Array<BaseControl>  {
		return this._fileds;
	}

    /**
     * Getter formConfig
     * @return {FormConfig}
     */
	public get formConfig(): FormConfig {
		return this._formConfig;
	}

    /**
     * Getter layout
     * @return {BaseLayout}
     */
	public get layout(): BaseLayout {
		return this._layout;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter fileds
     * @param {Array<BaseControl> } value
     */
	public set fileds(value: Array<BaseControl> ) {
		this._fileds = value;
	}

    /**
     * Setter formConfig
     * @param {FormConfig} value
     */
	public set formConfig(value: FormConfig) {
		this._formConfig = value;
	}

    /**
     * Setter layout
     * @param {BaseLayout} value
     */
	public set layout(value: BaseLayout) {
		this._layout = value;
	}


    /**
     * Getter dataObject
     * @return {any}
     */
	public get dataObject(): any {
		return this._dataObject;
	}

    /**
     * Setter dataObject
     * @param {any} value
     */
	public set dataObject(value: any) {
		this._dataObject = value;
	}
	

    /**
     * Getter callBack
     * @return {Function}
     */
	public get callBack(): Function {
		return this._callBack;
	}

    /**
     * Setter callBack
     * @param {Function} value
     */
	public set callBack(value: Function) {
		this._callBack = value;
	}

    /**
     * Getter controls
     * @return {any}
     */
	public get controls(): any {
		return this._controls;
	}

    /**
     * Setter controls
     * @param {any} value
     */
	public set controls(value: any) {
		this._controls = value;
	}
  

}