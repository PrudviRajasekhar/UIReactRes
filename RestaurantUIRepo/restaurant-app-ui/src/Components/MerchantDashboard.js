import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import CategoryIcon from "@material-ui/icons/Category";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import PaymentIcon from "@material-ui/icons/Payment";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FormatListBulletedTwoToneIcon from "@material-ui/icons/FormatListBulletedTwoTone";
import AddCircleOutlineTwoToneIcon from "@material-ui/icons/AddCircleOutlineTwoTone";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import AdjustIcon from "@material-ui/icons/Adjust";
import {
  ExpandLess,
  ExpandMore,
  FastfoodTwoTone,
  StarBorder,
} from "@material-ui/icons";
import { Collapse } from "@material-ui/core";
import MultiSelectTreeView from "./MultiSelectTreeView";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  nestedCategory: {
    paddingLeft: theme.spacing(6),
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function MerchantDashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);
  const [openCategory, setOpenCategory] = React.useState(false);
  const [openFoodCategory, setOpenFodCategory] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleCategory = () => {
    setOpenCategory(!openCategory);
  };

  const handleFoodCategory = () => {
    setOpenFodCategory(!openFoodCategory);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Merchant Barbequenation
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <MultiSelectTreeView />

        {/* <List>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <RestaurantMenuIcon />
            </ListItemIcon>
            <ListItemText primary="Food" />
            {openMenu ? <ExpandMore /> : <ExpandLess />}
          </ListItem>
          <Collapse in={openMenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={handleCategory}
              >
                <ListItemIcon>
                  <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary="Manage Category" />
                {openCategory ? <ExpandMore /> : <ExpandLess />}
              </ListItem>
              <Collapse in={openCategory} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nestedCategory}>
                    <ListItemIcon>
                      <AddCircleOutlineTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add Category" />
                  </ListItem>
                  <ListItem button className={classes.nestedCategory}>
                    <ListItemIcon>
                      <FormatListBulletedTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Category List" />
                  </ListItem>
                </List>
              </Collapse>

              <ListItem
                button
                className={classes.nested}
                onClick={handleFoodCategory}
              >
                <ListItemIcon>
                  <FastfoodTwoTone />
                </ListItemIcon>
                <ListItemText primary="Manage Food" />
                {openFoodCategory ? <ExpandMore /> : <ExpandLess />}
              </ListItem>
              <Collapse in={openFoodCategory} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nestedCategory}>
                    <ListItemIcon>
                      <AddCircleOutlineTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add Food" />
                  </ListItem>
                  <ListItem button className={classes.nestedCategory}>
                    <ListItemIcon>
                      <FormatListBulletedTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Food List" />
                  </ListItem>
                  <ListItem button className={classes.nestedCategory}>
                    <ListItemIcon>
                      <AdjustIcon />
                    </ListItemIcon>
                    <ListItemText primary="Food Varient" />
                  </ListItem>
                  <ListItem button className={classes.nestedCategory}>
                    <ListItemIcon>
                      <EventAvailableIcon />
                    </ListItemIcon>
                    <ListItemText primary="Food Availability" />
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </Collapse>

          <ListItem button key="Reservations">
            <ListItemIcon>
              <EventSeatIcon />
            </ListItemIcon>
            <ListItemText primary="Reservations" />
          </ListItem>
        </List> */}
        {/* <CustomizedTreeView /> */}
        <Divider />
        <List>
          {/* {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
          <ListItem button key="Payments">
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText primary="Payments" />
          </ListItem>
          <ListItem button key="Invoice">
            <ListItemIcon>
              <ReceiptIcon />
            </ListItemIcon>
            <ListItemText primary="Invoice" />
          </ListItem>
          <ListItem button key="Logout">
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}
