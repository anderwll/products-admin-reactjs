import React, { useState, useEffect } from "react";
import {
  Grid,
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  Button,
} from "@mui/material";
import { ShoppingCart, Logout, AssignmentInd, Menu } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface LayoutDefaultProps {
  component: JSX.Element;
}

const listItem = [
  {
    text: "Products",
    path: "/products",
    icon: <ShoppingCart />,
  },
  {
    text: "Company profile",
    path: "/company-profile",
    icon: <AssignmentInd />,
  },
  {
    text: "Logout",
    path: "/",
    icon: <Logout />,
  },
];

const LayoutDefault = ({ component }: LayoutDefaultProps) => {
  const navigate = useNavigate();
  const [drawerWidth, setDrawerWidth] = useState(220);
  const mobile = useMediaQuery("(min-width:650px)");

  useEffect(() => {
    if (mobile) {
      setDrawerWidth(220);
    } else {
      setDrawerWidth(0);
    }
  }, [mobile]);

  const showMenu = () => {
    if (drawerWidth === 0) {
      setDrawerWidth(220);
    } else {
      setDrawerWidth(0);
    }
  };

  return (
    <Grid container sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="text"
            color="inherit"
            onClick={showMenu}
            sx={{ position: "absolute", left: 0 }}
          >
            <Menu />
          </Button>
          <Typography variant="h5">MY PRODUCTS ADMIN</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          transition: "all .5s",
        }}
      >
        <Toolbar />
        <Grid item sx={{ overflow: "auto" }}>
          <List>
            {listItem.map((item, index) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={() => navigate(item.path)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Grid>
      </Drawer>
      <Grid item component="main" sx={{ flexGrow: 1, p: "5rem 1rem" }}>
        {component}
      </Grid>
    </Grid>
  );
};

export default LayoutDefault;
