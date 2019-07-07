import { BaseControl } from "../control-meta/base";
import { FormGroup } from "@angular/forms";


export class TextControl extends BaseControl {

  constructor(control:any, util:any, dataObject:any) {
    super();
    this.init(control, util, dataObject);
    // this.isSubmited = true;
  }
	
}