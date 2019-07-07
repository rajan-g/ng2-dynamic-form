import { FormGroup } from "@angular/forms";
import { BaseLayout } from "./base";
import { TrilDownBase } from "./trildown";

export class NextandPrevious extends TrilDownBase {
  private _hasNextButton: boolean = true;
  private _hasPreviousButton: boolean = true;
  private _nextButtonText: String = 'Next';
  private _previousButtonText: String = 'Back';

  next(dynaForm: FormGroup, item: BaseLayout, index: number) {
    if (this.isValid(dynaForm, item)) {
      this.buttonClick(index);
      if (this.hasOwnProperty('_currentActiveTab')) {
        let current = -1;
        let items = this['layout']['items'];
        for (let i = index+1; i < items.length; i++) {
          if (items[i].enable) {
            current = i;
            break;
          }
        }
        if (current != -1) {
          this['currentActiveTab'] = current;
        }
      }
    }
  }

  activatePrevious(index: number) {
    if (this.hasOwnProperty('_currentActiveTab')) {
      let current = -1;
      let items = this['layout']['items'];
      for (let i = index-1; i >= 0; i--) {
        if (items.enable) {
          current = i;
          break;
        }
      }
      if (current != -1) {
        this['currentActiveTab'] = current;
      }
    }
  }

  buttonClick(index:number) {
    if(this['layout']['items'][index].onSubmit) {
      this['layout']['items'][index].onSubmit(this['layout'].formGroup);
    }
    if(this['layout'].onSubmit) {
      this['layout'].onSubmit(this['layout'].formGroup);
    }
  }
  isValid(dynaForm: FormGroup, item: BaseLayout): boolean {
    let isValid = true;
    item.fileds.forEach(field => {
      if (!dynaForm.controls[field.valueProperty].valid) {
        this['formConfig'].controls[field.valueProperty].enableError();
        isValid = false;
      }
    });
    return isValid;
  }

  /**
   * Getter hasNextButton
   * @return {boolean }
   */
  public get hasNextButton(): boolean {
    return this._hasNextButton;
  }

  /**
   * Getter hasPreviousButton
   * @return {boolean }
   */
  public get hasPreviousButton(): boolean {
    return this._hasPreviousButton;
  }

  /**
   * Getter nextButtonText
   * @return {String }
   */
  public get nextButtonText(): String {
    return this._nextButtonText;
  }

  /**
   * Getter previousButtonText
   * @return {String }
   */
  public get previousButtonText(): String {
    return this._previousButtonText;
  }

  /**
   * Setter hasNextButton
   * @param {boolean } value
   */
  public set hasNextButton(value: boolean) {
    this._hasNextButton = value;
  }

  /**
   * Setter hasPreviousButton
   * @param {boolean } value
   */
  public set hasPreviousButton(value: boolean) {
    this._hasPreviousButton = value;
  }

  /**
   * Setter nextButtonText
   * @param {String } value
   */
  public set nextButtonText(value: String) {
    this._nextButtonText = value;
  }

  /**
   * Setter previousButtonText
   * @param {String } value
   */
  public set previousButtonText(value: String) {
    this._previousButtonText = value;
  }

}