export const styled = {
  bgcon: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    minHeight: "100vh",
    bgcolor: "#F2DFCE",
    pb: "5%",
  },
  plannerCon: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: { xs: "90%", sm: "80%" },
  },

  head1: {
    textAlign: "center",
    color: "#8D6953",
    fontSize: { xs: "1.5rem", sm: "2.5rem", lg: "5rem" },
    fontWeight: "800",
    letterSpacing: { sm: "5px", lg: "14px" },
  },
  head2: {
    color: "#232323",
    fontSize: { xs: "1rem", sm: "1.8rem", lg: "2.5rem" },

    fontWeight: "400",
    letterSpacing: "5px",
    mb: { md: "1rem" },
  },
  head3: {
    color: "#232323",
    fontSize: { xs: "1rem", lg: "1.5rem" },
    lineHeight: { xs: "1.2rem", sm: "1.5rem", lg: "2.5rem" },
    fontWeight: "400",
    letterSpacing: { sm: "2px", lg: "5px" },
    mb: "1rem",
  },

  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: { xs: "90%", sm: "80%", md: "70%" },
    borderRadius: "15px",
    border: "10px solid",
  },
  cardContentCon: {
    mt: "10%",
    display: "flex",
    flexDirection: "column",
    alignItems: { xs: "center", sm: "space-between" },
    width: "94%",
    bgcolor: "#F4F4F4",
    p: "3%",
  },
  calenderHeadCon: {
    display: "flex",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: "10px",
    mt: "10px",
    mb: "10px",
  },
  calenderHead: {
    fontSize: { xs: "1rem", sm: "1.5rem" },
    fontWeight: "550",
  },
  icon: {
    fontSize: { xs: "20px", sm: "25px" },
    color: "#8D6953",
    fontWeight: "600",
  },

  topContainer: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "space-between",
    width: { xs: "90%", sm: "100%" },
  },

  topLeftContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: { xs: "100%", sm: "50%", lg: "40%" },
    gap: { sm: "5px", md: "10px" },
  },
  yearCon: {
    display: "flex",
    alignItems: "center",
    gap: { sm: "2px", md: "5px" },
    "&:hover": {
      borderBottom: "1px solid #232323",
      height: "40px",
    },
  },
  yearCon1: {
    display: "flex",
    alignItems: "center",
    gap: { sm: "2px", md: "5px" },

    borderBottom: "1px solid #232323",
    height: "40px",
  },

  gridIcon: {
    color: "#cccccc",
    fontSize: { xs: "10px", sm: "15px", g: "20px" },
  },
  yearTxt: {
    color: "#cccccc",
    fontSize: { xs: "12px", sm: "10px", md: "12px", lg: "14px" },
  },
  addIcon: {
    color: "#DDDDDC",
    fontSize: { sm: "20px" },
  },
  hrLine: {
    width: "100%",
    mb: "5px",
    border: "0.25px solid #DDDDDC",
  },
  topRightContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: { sm: "5px", lg: "10px" },
    mt: { xs: "10px", sm: "0px" },
  },
  listItem1:{
    color:"#2483E2",
    fontWeight: "500",
    fontSize: { sm: "10px", md: "12px", lg: "14px" },
  },
  listItem: {
    color: "#878787",
    fontWeight: "500",
    fontSize: { sm: "10px", md: "12px", lg: "14px" },
  },
  listIcon: {
    color: "#cccccc",
    fontSize: { sm: "20px", lg: "24px" },
  },
  addBtn: {
    textTransform: "capitalize",
    minWidth: { sm: "50px", md: "70px", lg: "90px" },
    // minHeight: "30px",
    bgcolor: "#2483E2",
    fontWeight: "600",
    color: "#ffffff",
    fontSize: { xs: "12px", sm: "10px", lg: "14px" },
    // heigth: "35px",
    pl: { sm: "3px", lg: "1%" },
    pr: { sm: "3px", lg: "1%" },
    p: "0%",
    "&:hover": {
      textTransform: "capitalize",
      fontSize: { sm: "10px", lg: "14px" },
      bgcolor: "#2483E2",
      fontWeight: "600",
      color: "#ffffff",
      //   heigth: "35px",
      pl: "1%",
      pr: "1%",
      p: "0%",
    },
  },
  downIcon: {
    borderLeft: "1px solid #878787",
    height: { sm: "20px", lg: "35px" },
  },

  monthCon: {
    display: "flex",
    flexDirection: "column",
    width: { xs: "90%", sm: "100%" },
    alignItems: "center",
  },
  cardMonthCon: {
    width: "100%",
    height: "150px",
    //  border:"1px solid",
  },
  contentCon: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: "120px",
    bgcolor: "#F2DFCE",
  },
  monthName: {
    color: "#8D6953",
    fontSize: { xs: "1rem", lg: "1.5rem" },
    fontWeight: "500",
  },
  calenderTxtCon: {
    display: "flex",
    width: "96%",
    alignItems: "center",
    // justifyContent:"center",
    // height:"20px",
    bgcolor: "#ffffff",
    gap: "10px",
    p: "2%",
  },
  calenderIcon: {
    fontSize: "15px",
    color: "#8D6953",
    fontWeight: "600",
  },
  monthTxt: {
    fontSize: { sm: "12px", lg: "15px" },
    color: "#232323",
  },
  eastIconCon: {
    display:{xs:"none",md:"flex"},
    position: "absolute",
    borderRadius: "50%",
    bgcolor: "#ffffff",
    zIndex: "4",
    p: "5px",
    top: "45%",
    right: "20px",
    border: "1px solid",
  },
  eastIcon: {
    fontSize: "20px",
  },
};
