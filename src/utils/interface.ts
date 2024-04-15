export interface Months {
  id: number;
  monthName: string;
}

export interface Years {
  id: number;
  year: number;
  isClicked: boolean;
}

export interface weekList {}
export interface IList {
  id: number;
  year: number;
  month: string;
  week: {
    textName: string;
    checkList: {
      id: number;
      isChecked: boolean;
    }[];
  }[];
}

export interface Istate {
  yearList: Years[];
  monthsList: Months[];
  lastYear: number;
  activeMonth:string,
  activeYear:number
  detailList:IList[]
}
