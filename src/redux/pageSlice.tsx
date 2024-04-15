import { createSlice } from "@reduxjs/toolkit";
import { Istate } from "../utils/interface";
import { listdata, weekList, yearData } from "../utils/data";

export interface Iuser {
  userList: {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
  }[];
}

const initialState: Istate = {
  monthsList: [],
  yearList: yearData,
  lastYear: 0,
  activeMonth: "",
  activeYear: 0,

  detailList: [
    {
      id: 0,
      year: 0,
      month: "",
      week: [
        {
          textName: "",
          checkList: [
            {
              id: 0,
              isChecked: false,
            },
          ],
        },
      ],
    },
  ],
};

export const pageSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    addYear: (state, action) => {
      let obj = action.payload.year + 1;
      state.lastYear = obj;
      state.yearList.push({ ...action.payload, year: state.lastYear });
    },
    handleMonthsData: (state, action) => {
      state.activeMonth = action.payload;
      listdata.map((item) => {
        console.log(item, "l2222l");
        if (item.month === state.activeMonth) {
          state.detailList = [{ ...item }];
        }
      });
    },
    handleYearClicked: (state, action) => {
      const listA = state.yearList.map((item) => {
        if (item.id === action.payload) {
          state.activeYear = item.year;
          return { ...item, isClicked: true };
        } else {
          return { ...item, isClicked: false };
        }
      });
      state.yearList = listA;
    },

    // checkedData:(state)=>{
    //   const l = weekList.map((item) => {
    //     if (item.textName === itemId) {
    //       setPresentYear(item.year);
    //       return { ...item, isClicked: true };
    //     } else {
    //       return { ...item, isClicked: false };
    //     }
    //   });
    // }
  },
});

export const { addYear, handleMonthsData, handleYearClicked } =
  pageSlice.actions;

export default pageSlice.reducer;
