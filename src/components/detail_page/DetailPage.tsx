import { styled } from "./DEtailStyles";

import { Box, Grid, Stack, Typography } from "@mui/material";
import { listdata, monthlyData, weekList } from "../../utils/data";
import { image } from "../../assets/imageList";
import { ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const DetailPage = () => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target);
  };

  const { yearList, lastYear, detailList } = useSelector(
    (state: RootState) => state.product
  );

  const handleCheck = (checked: boolean) => {
    // dispatch()
  };
  // console.log(listdata, "list");
  return (
    <Box sx={styled.bgcon}>
      <Stack sx={styled.plannerCon}>
        <Typography sx={styled.head1}>MONTHLY PLANNER</Typography>
        <Typography sx={styled.head2}>NOTION TEMPLATE</Typography>
        <Typography sx={styled.head3}>FROM THE INSIDE</Typography>
        <Box sx={styled.cardContainer}>
          <Stack sx={styled.cardContentCon}>
            <Grid container spacing={3}>
              <Grid item sm={3}>
                <Box sx={styled.imageContainer}>
                  <Box component="img" src={image} sx={styled.image} />
                </Box>
              </Grid>
              <Grid item sm={9}>
                <Box sx={styled.monthsContainer}>
                  <Typography sx={styled.monthHead}>Monthly Goals</Typography>
                  {monthlyData.map((item, index) => {
                    return (
                      <Box sx={styled.checkCon} key={index}>
                        <Box component="input" type="checkbox" id="checkBox" />
                        <Box
                          component="label"
                          htmlFor="checkBox"
                          sx={styled.labelTxt}
                        >
                          To-do
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              </Grid>
          
              {weekList.map((item, index) => {
                return (
                  <Grid item xs={11} sm={6} key={index}>
                    <Box sx={styled.checkCon}>
                      <Box sx={styled.monthsContainer}>
                        <Typography sx={styled.monthHead}>
                          {item.textName}
                        </Typography>
                        {item.checkList.map((each) => {
                          return (
                            <Box sx={styled.checkCon} key={each.id}>
                              <Box
                                component="input"
                                type="checkbox"
                                id="checkBox"
                                // checked={each.isChecked}
                                // onChange={handleChange}
                                onClick={() => handleCheck(each.isChecked)}
                              />
                              <Box
                                component="label"
                                htmlFor="checkBox"
                                sx={styled.labelTxt}
                              >
                                To-do
                              </Box>
                            </Box>
                          );
                        })}
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default DetailPage;
