import "./styles.css";
import React from "react";
import * as ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

import GalleryList from "./GalleryList";
import GalleryDetail from "./component/gallery/GalleryDetail";
import CreateGallery from "./CreateGallery";
import CreateEvent from "./CreateEvent";
import ModelList from "./ModelList";
import ModelDetail from "./component/model/ModelDetail";

import SignUp from "./SignUp";
import Login from "./Login";

import Container from "@mui/material/Container";

import AppBar from "@mui/material/AppBar";
import BoxMui from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";

import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";

import SideMenu from "../component/SideMenu";

import { ThemeProvider } from "@mui/material";
import { appTheme } from "./themes/theme";
//import * as MuiIcons from "@material-ui/icons";

//import Aside from "./component/Aside";
//import "react-pro-sidebar/dist/css/styles.css";

const drawerWidth = 300;

//https://javascript.works-hub.com/learn/how-to-create-a-responsive-navbar-using-material-ui-and-react-router-f9a01

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}
export default function App(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const clickLink = () => {
    console.log("click link on menu");
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {[
          { text: "GalleryList", icon: "List" },
          { text: "Login", icon: "" },
          { text: "SignUp", icon: "" },
          { text: "CreateGallery", icon: "" },
          { text: "CreateEvent", icon: "" },
          { text: "ModelList", icon: "Dashboard" },
          { text: "Logout", icon: "Logout" }
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.text} onClick={clickLink}>
              <ListItemIcon>
                {(() => {
                  switch (item.icon) {
                    case "InboxIcon":
                      return <InboxIcon />;
                    case "List":
                      return <FormatListBulletedIcon />;
                    case "Dashboard":
                      return <DashboardIcon />;
                    case "Logout":
                      return <LogoutIcon color="error" />;
                    default:
                      return <FiberNewIcon />;
                  }
                })()}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [value, setValue] = React.useState(0);

  return (
    <ThemeProvider theme={appTheme}>
      <BrowserRouter>
        <BoxMui sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` }
            }}
          >
            <Toolbar>
              <IconButton
                className="appbar-menu-btn"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div"></Typography>
            </Toolbar>
          </AppBar>
          <BoxMui
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth
                }
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth
                }
              }}
              open
            >
              {drawer}
            </Drawer>
          </BoxMui>
          <BoxMui
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` }
            }}
            className="card"
          >
            <Toolbar />

            <Routes>
              <Route path="/SignUp" element={<SignUp />}></Route>
              <Route path="/Login" element={<Login />}></Route>
              <Route path="/GalleryList" element={<GalleryList />}></Route>
              <Route path="/GalleryDetail" element={<GalleryDetail />}></Route>
              <Route path="/CreateGallery" element={<CreateGallery />}></Route>
              <Route path="/CreateEvent" element={<CreateEvent />}></Route>
              <Route path="/ModelList" element={<ModelList />}></Route>
              <Route path="/ModelDetail/:id" element={<ModelDetail />}></Route>
            </Routes>
            {/* <Paper
              sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0
              }}
              elevation={1}
            >
              <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              >
                <BottomNavigationAction
                  label="Recents"
                  icon={<RestoreIcon />}
                />
                <BottomNavigationAction
                  label="Favorites"
                  icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                  label="Archive"
                  icon={<ArchiveIcon />}
                />
              </BottomNavigation>
              </Paper> */}
          </BoxMui>
        </BoxMui>
      </BrowserRouter>
    </ThemeProvider>
  );
}

