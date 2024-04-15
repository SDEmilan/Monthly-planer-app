import { styled } from "./MonthlyPlannerStyles";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BoltIcon from "@mui/icons-material/Bolt";
import EastIcon from "@mui/icons-material/East";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridViewIcon from "@mui/icons-material/GridView";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { monthlyData } from "../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addYear, handleMonthsData, handleYearClicked } from "../redux/pageSlice";
import { useState } from "react";
import { RootState } from "../redux/store";

const MonthlyPlannerPage = () => {
  const dispatch = useDispatch();
  const [isVisibe, setIsVisible] = useState(false);

  const { yearList, lastYear } = useSelector(
    (state: RootState) => state.product
  );

  const [listA, setListA] = useState(yearList);
  const [presentYear, setPresentYear] = useState<number>();

  const nav = useNavigate();

  const handleClickDetail = (month: string) => {
    dispatch(handleMonthsData(month));

    nav("/detail");
  };
  const handleClicked = (itemId: number) => {

    dispatch(handleYearClicked(itemId))
  
    // setListA(l);
  };

  const handleAdd = () => {
    const length = yearList.length;
    console.log(length);
    setIsVisible(false);
    let data = yearList[length - 1];

    dispatch(addYear(data));
  };
  return (
    <Box sx={styled.bgcon}>
      <Stack sx={styled.plannerCon}>
        <Typography sx={styled.head1}>MONTHLY PLANNER</Typography>
        <Typography sx={styled.head2}>NOTION TEMPLATE</Typography>
        <Typography sx={styled.head3}>MONTHLY PLANNING MADE EASY!</Typography>
        <Box sx={styled.cardContainer}>
          <Stack sx={styled.cardContentCon}>
            <Box sx={styled.calenderHeadCon}>
              <CalendarTodayIcon sx={styled.icon} />
              <Typography sx={styled.calenderHead}>Monthly planner</Typography>
            </Box>
            <Box sx={styled.topContainer}>
              <Box sx={styled.topLeftContainer}>
                {yearList.map((item:any) => {
                  return (
                    <Box
                      key={item.id}
                      sx={item.isClicked ? styled.yearCon1 : styled.yearCon}
                      onClick={() => handleClicked(item.id)}
                    >
                      <GridViewIcon sx={styled.gridIcon} />
                      <Typography sx={styled.yearTxt}>{item.year}</Typography>
                    </Box>
                  );
                })}

                {isVisibe && <Box component="input" type="number" />}

                <AddIcon sx={styled.addIcon} onClick={handleAdd} />
              </Box>

              <Box sx={styled.topRightContainer}>
                <Typography sx={styled.listItem1}>Filter</Typography>
                <Typography sx={styled.listItem}>Sort</Typography>
                <BoltIcon sx={styled.listIcon} />
                <SearchIcon sx={styled.listIcon} />
                <MoreHorizIcon sx={styled.listIcon} />
                <Button
                  sx={styled.addBtn}
                  endIcon={<KeyboardArrowDownIcon sx={styled.downIcon} />}
                >
                  New
                </Button>
              </Box>
            </Box>
            <Divider sx={styled.hrLine} />
            <Box sx={styled.monthCon}>
              <Grid container spacing={2}>
                {monthlyData.map((each) => {
                  return (
                    <Grid item xs={12} sm={4} md={3} key={each.id}>
                      <Box sx={styled.cardMonthCon}>
                        <Stack
                          sx={styled.contentCon}
                          onClick={() => handleClickDetail(each.monthName)}
                        >
                          <Typography sx={styled.monthName}>
                            {each.monthName}
                          </Typography>
                        </Stack>
                        <Box sx={styled.calenderTxtCon}>
                          <CalendarTodayIcon sx={styled.calenderIcon} />
                          <Typography sx={styled.monthTxt}>
                            {each.monthName}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Stack>
        </Box>
      </Stack>
      <Box sx={styled.eastIconCon}>
        <EastIcon sx={styled.eastIcon} />
      </Box>
    </Box>
  );
};

export default MonthlyPlannerPage;
