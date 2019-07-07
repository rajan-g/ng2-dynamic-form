var form = {
  "name": "name of the form", //only for internal use
  "fileds": [], //array of fields. it is a optional for layout based forms, while we go by layout approach we can usee this fileds as ref
  "config": { // form level configuration. it can be override in filed level
    "type": "horizontal", //type of form allowed types are horizontal, vertical, inline, row 
    "label": {
      "position": "left", // label can be left, immediate left, center,
      "calsses": "", //custom class can be add 
      "helpTextIcon": "", //icon for help text
      "helpTextPossition": "right", //can be left or right
      "requiredIcon": "*", // it can be a html or plain text
      "requiredIconPossition": "left" //can be left or right
    },
    "validation": {
      "possition": "right", //can be right, top, buttom
      "classes": "right", //custom class can be add 
      "validHighLight": true, // if true it will be hightlight border with green
      "invalidHighLight": true, // if true it will be hightlight border with red
      "validHighLightColor": "green", // any color or color code
      "invalidHighLightColor": true, // any color or color code
      "validatioEvent": "blur", // it can be focus, blur, keyup, key down,
      "messageEnableBeforDirty": false // error message show before dirty 
    }
  },
    "layout": {
      "type": "default",  // it can be column, pannel, tab, accordion, steps
      "fileds": [], //you can use reference name of global form or you can derrive new,
      "layoutConfig": {
        "Title": "tile of layout"
      }
    }
  
}


var columnLayOut = {
  "type": "column",  // it can be column, pannel, tab, accordion, steps
  // "fileds": [], //you can use reference name of global form or you can derrive new,
  "items": [ //list of columns it is a layout object. Max allowed column 12
    {
      "type": "default",  // it can be column, pannel, tab, accordion, steps
      "fileds": [], //you can use reference name of global form or you can derrive new,
      "layoutConfig": {
        "Title": "tile of layout"
      }
    },
    {
      "type": "default",  // it can be column, pannel, tab, accordion, steps
      "fileds": [], //you can use reference name of global form or you can derrive new,
      "layoutConfig": {
        "Title": "tile of layout"
      }
    }
  ],
  "layoutConfig": {
    "Title": "tile of layout"
    //form configuration can be override. here we are drrive from top form config

  }
}

var pannelLayOut = {
  "type": "pannel",  // it can be column, pannel, tab, accordion, steps
  "fileds": [], //you can use reference name of global form or you can derrive new,
  "layoutConfig": {
    "title": "tile of Pannel", //required
    "pannelHederClasses": "", // can be add any custom classes here
    "pannelBodyClasses": "" // can be add any custom classes here
    //form configuration can be override. here we are drrive from top form config
  }
}

var tabLayOut = {
  "type": "tab",  // it can be column, pannel, tab, accordion, steps
  "fileds": [], //you can use reference name of global form or you can derrive new,
  "items": [
    {
      "type": "default",  // it can be column, pannel, tab, accordion, steps
      "fileds": [], //you can use reference name of global form or you can derrive new,
      "layoutConfig": {
        "Title": "tile of layout",
        "enableNext": "default", //default, current Tab ValidOnly, custom,  default- any tab can be go by click
        "hasNextButton": true,
        "hasBackButton": true,
        "hasNextButtonPossition": "left", //left, right, center
        "hasBaceButtonPossition": "left", //left, right, center
        //form configuration can be override. here we are drrive from top form config
      }
    },
  ],
  "layoutConfig": {
    "title": "tile of Pannel", //required
    "tabHederClasses": "", // can be add any custom classes here
    "tabBodyClasses": "" // can be add any custom classes here
    //form configuration can be override. here we are drrive from top form config
  }
}

var accordionLayOut = {
  "type": "accordion",  // it can be column, pannel, tab, accordion, steps
  "fileds": [], //you can use reference name of global form or you can derrive new,
  "items": [
    {
      "type": "default",  // it can be column, pannel, tab, accordion, steps
      "fileds": [], //you can use reference name of global form or you can derrive new,
      "layoutConfig": {
        "Title": "tile of accordion",
        "enableNext": "default", //default, current Tab ValidOnly, custom,  default- any tab can be go by click
        "hasNextButton": true,
        "hasBackButton": true,
        "hasNextButtonPossition": "left", //left, right, center
        "hasBaceButtonPossition": "left", //left, right, center
        //form configuration can be override. here we are drrive from top form config
      }
    },
  ],
  "layoutConfig": {
    "title": "tile of accordion", //required
    "tabHederClasses": "", // can be add any custom classes here
    "tabBodyClasses": "" // can be add any custom classes here
    //form configuration can be override. here we are drrive from top form config
  }
}

var stepLayOut = {
  "type": "steps",  // it can be column, pannel, tab, accordion, steps
  "fileds": [], //you can use reference name of global form or you can derrive new,
  "items": [
    {
      "type": "default",  // it can be column, pannel, tab, accordion, steps
      "fileds": [], //you can use reference name of global form or you can derrive new,
      "layoutConfig": {
        "Title": "tile of accordion",
        "enableNext": "default", //default, current Tab ValidOnly, custom,  default- any tab can be go by click
        "hasNextButton": true,
        "hasBackButton": true,
        "hasNextButtonPossition": "left", //left, right, center
        "hasBaceButtonPossition": "left", //left, right, center
        //form configuration can be override. here we are drrive from top form config
      }
    },
  ],
  "layoutConfig": {
    "title": "tile of accordion", //required
    "stepHederClasses": "", // can be add any custom classes here
    "stepBodyClasses": "" // can be add any custom classes here
    //form configuration can be override. here we are drrive from top form config
  }
}

var filed = {
  label: "string", // name of the control label
  name: "string", // name is a unique property used for referrence purpose
  placeHolder: "string", // placeHolder of the control 
  autocomplete: "string", // placeHolder of the control 
  dataObject: "any", //name of the input or object property
  valueProperty: "string", //property name of the dataObject
  controlType: "ControlTypes", // name of the control should be from enum
  customvalidators: [], //Array<CustomValidation> // user based validation user can send any function it should retu
  asynchValidators: [], //Array<CustomAsychValidation> // user based validation user can send any function it should
  isRequired: true, //boolean, // isRequired validation to be apply default true
  requiredMessage: "string",
  minLength: -1,
  minLengthMessage: "string",
  maxLength: 10, //number,
  maxLengthMessage: "string",
  min: number = -1,
  minMessage: "string",
  max: 10, //number,
  maxMessage: "string",
  pattern: string,
  patternMessage: "string",
  controlClasses: "any",
  lableClasses: "any",
  controlClassesOnError: "any",
  lableClassesOnError: "any",
  enable: false,
  isSubmited: false,
  helpText: "",
  helpTextClasses: "",
  readOnly: false,
  enableBy: ["return keyname === 18", (formControls) => { return true; }],
  readOnlyBy: ["return keyname!= 'rajan", (formControls) => { return true; }]

}