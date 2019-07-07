import { BaseLayout } from "./base";

export class TabProcessBase  extends BaseLayout {
  private _currentActiveTab:number = 0;
  constructor(obj:BaseLayout) {
    super(obj);
  }
  onTabSelect(index:number) {
    this.currentActiveTab =  index;
  }


    /**
     * Getter currentActiveTab
     * @return {number }
     */
	public get currentActiveTab(): number  {
		return this._currentActiveTab;
  }
   /**
     * Setter currentActiveTab
     * @param {number } value
     */
	public set currentActiveTab(value: number ) {
		this._currentActiveTab = value;
	}


}