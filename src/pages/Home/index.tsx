import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const access = () => {
    navigate("/products");
  };

  return (
    <Grid
      container
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      flexDirection="column"
      spacing={2}
    >
      <Grid item>
        <Typography variant="h4" color="initial">
          Welcome!
        </Typography>
        <Typography variant="h4" color="initial">
          For my product management system.
        </Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={access}>
          Access
        </Button>
      </Grid>
    </Grid>
  );
};

export default Home;
