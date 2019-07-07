
export class FormConfig {
  private _type: String = "vertical";
  private _labelConfig: LabelConfig;
  private _validationConfig: ValidationConfig;
  private _controls: any;

  /**
   * Getter type
   * @return {String}
   */
  public get type(): String {
    return this._type;
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
    return this._validationConfig;
  }

  /**
   * Setter type
   * @param {String} value
   */
  public set type(value: String) {
    this._type = value;
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
export class LabelConfig {
  private _position: String = "left"; // label can be left, immediate left, center,
  private _classes: String; //custom class can be add 
  private _helpTextIcon: String; //icon for help text
  private _helpTextPossition: String = "right";//can be left or right
  private _requiredIcon: String = "*";// it can be a html or plain text
  private _requiredIconPossition: String = "left"; //ca

  /**
   * Getter position
   * @return {String }
   */
  public get position(): String {
    return this._position;
  }

  /**
   * Getter classes
   * @return {String}
   */
  public get classes(): String {
    return this._classes;
  }

  /**
   * Getter helpTextIcon
   * @return {String}
   */
  public get helpTextIcon(): String {
    return this._helpTextIcon;
  }

  /**
   * Getter helpTextPossition
   * @return {String }
   */
  public get helpTextPossition(): String {
    return this._helpTextPossition;
  }

  /**
   * Getter requiredIcon
   * @return {String }
   */
  public get requiredIcon(): String {
    return this._requiredIcon;
  }

  /**
   * Getter requiredIconPossition
   * @return {String }
   */
  public get requiredIconPossition(): String {
    return this._requiredIconPossition;
  }

  /**
   * Setter position
   * @param {String } value
   */
  public set position(value: String) {
    this._position = value;
  }

  /**
   * Setter classes
   * @param {String} value
   */
  public set classes(value: String) {
    this._classes = value;
  }

  /**
   * Setter helpTextIcon
   * @param {String} value
   */
  public set helpTextIcon(value: String) {
    this._helpTextIcon = value;
  }

  /**
   * Setter helpTextPossition
   * @param {String } value
   */
  public set helpTextPossition(value: String) {
    this._helpTextPossition = value;
  }

  /**
   * Setter requiredIcon
   * @param {String } value
   */
  public set requiredIcon(value: String) {
    this._requiredIcon = value;
  }

  /**
   * Setter requiredIconPossition
   * @param {String } value
   */
  public set requiredIconPossition(value: String) {
    this._requiredIconPossition = value;
  }

}
export class ValidationConfig {
  private _possition: ValidationPosition = ValidationPosition.right;
  private _classes: String;
  private _validHighLight: boolean = false;
  private _invalidHighLight: boolean = false;
  private _validHighLightColor: String;
  private _invalidHighLightColor: String;
  private _validationEvent: ValidationEvent = ValidationEvent.blur;
  private _messageEnableBeforDirty: boolean = false;


  /**
   * Getter possition
   * @return {ValidationPosition }
   */
  public get possition(): ValidationPosition {
    return this._possition;
  }

  /**
   * Setter possition
   * @param {ValidationPosition } value
   */
  public set possition(value: ValidationPosition) {
    this._possition = value;
  }

  /**
   * Getter classes
   * @return {String}
   */
  public get classes(): String {
    return this._classes;
  }

  /**
   * Setter classes
   * @param {String} value
   */
  public set classes(value: String) {
    this._classes = value;
  }

  /**
   * Getter validHighLight
   * @return {boolean }
   */
  public get validHighLight(): boolean {
    return this._validHighLight;
  }

  /**
   * Setter validHighLight
   * @param {boolean } value
   */
  public set validHighLight(value: boolean) {
    this._validHighLight = value;
  }

  /**
   * Getter invalidHighLight
   * @return {boolean }
   */
  public get invalidHighLight(): boolean {
    return this._invalidHighLight;
  }

  /**
   * Setter invalidHighLight
   * @param {boolean } value
   */
  public set invalidHighLight(value: boolean) {
    this._invalidHighLight = value;
  }

  /**
   * Getter validHighLightColor
   * @return {String}
   */
  public get validHighLightColor(): String {
    return this._validHighLightColor;
  }

  /**
   * Setter validHighLightColor
   * @param {String} value
   */
  public set validHighLightColor(value: String) {
    this._validHighLightColor = value;
  }

  /**
   * Getter invalidHighLightColor
   * @return {String}
   */
  public get invalidHighLightColor(): String {
    return this._invalidHighLightColor;
  }

  /**
   * Setter invalidHighLightColor
   * @param {String} value
   */
  public set invalidHighLightColor(value: String) {
    this._invalidHighLightColor = value;
  }

  /**
   * Getter validationEvent
   * @return {ValidationEvent }
   */
  public get validationEvent(): ValidationEvent {
    return this._validationEvent;
  }

  /**
   * Setter validationEvent
   * @param {ValidationEvent } value
   */
  public set validationEvent(value: ValidationEvent) {
    this._validationEvent = value;
  }

  /**
   * Getter messageEnableBeforDirty
   * @return {boolean }
   */
  public get messageEnableBeforDirty(): boolean {
    return this._messageEnableBeforDirty;
  }

  /**
   * Setter messageEnableBeforDirty
   * @param {boolean } value
   */
  public set messageEnableBeforDirty(value: boolean) {
    this._messageEnableBeforDirty = value;
  }


}



export enum ValidationPosition {
  top = 'top',
  bottom = 'bottom',
  right = 'right',
}
export enum ValidationEvent {
  keyup = 'keyup',
  keydown = 'keydown',
  focus = 'focus',
  blur = 'blur',
}