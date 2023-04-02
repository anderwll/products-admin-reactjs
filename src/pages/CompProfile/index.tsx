import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const CompanyProfile = () => {
  return (
    <Grid item>
      <Typography variant="h4" color="initial">
        Company Profile
      </Typography>
      <Typography variant="body1" color="#707070" mt={2} fontStyle="italic">
        Page is not a review requirement...
      </Typography>
    </Grid>
  );
};

export default CompanyProfile;
