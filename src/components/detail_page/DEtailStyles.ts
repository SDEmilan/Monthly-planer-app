export const styled = {
  bgcon: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    // backgroundImage:"linear-gradient(#F2DFCE, #F3BA9F)",
    minHeight: "100vh",
    bgcolor: "#F2DFCE",
    pb: "5%",
  },
  plannerCon: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: { xs: "90%", sm: "80%" },
    // border: "1px solid",
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
    // mt: "10%",
    display: "flex",
    flexDirection: "column",
    alignItems: { xs: "center", sm: "space-between" },
    width: "94%",
    border: "1px solid",
    bgcolor: "#F4F4F4",
    p: "3%",
    minHeight: "70vh",
  },

  imageContainer: {
    width: "100%",
  },
  image:{
    width:"100%",
    height: "40vh",

  },
  monthsContainer: {
    width: "100%",
  },
  monthHead: {
    width: "100%",
    fontSize:"14px",
    p:"0.2%",
    bgcolor: "#F4EEEE",
  },
  checkCon: {
    display: "flex",
    gap: "5px",
    m: "1%",
  },
  labelTxt: {
    color: "#cccccc",
  },
};
