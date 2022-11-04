import React from "react";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  Stack,
  Button,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";

import SpotifyImage from "../images/Spotify-symbol.jpg";

const drawerWidth = 240;
const textColor = "#e1dfdd";

function SideNav({ children }) {
  const drawer = (
    <Box style={{ color: textColor, backgroundColor: "black" }}>
      <Box
        component="img"
        sx={{
          height: 60,
          // width: 200,
        }}
        src={SpotifyImage}
        alt="Spotify Logo"
      ></Box>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon sx={{ color: textColor }} />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SearchIcon sx={{ color: textColor }} />
            </ListItemIcon>
            <ListItemText primary={"Search"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LibraryMusicIcon sx={{ color: textColor }} />
            </ListItemIcon>
            <ListItemText primary={"Your Library"} />
          </ListItemButton>
        </ListItem>
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AddIcon sx={{ color: textColor }} />
            </ListItemIcon>
            <ListItemText primary={"Create Playlist"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FavoriteIcon sx={{ color: textColor }} />
            </ListItemIcon>
            <ListItemText primary={"Liked Songs"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box>
      <Box
        component="nav"
        sx={{ width: drawerWidth }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: "block",
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "black",
              color: textColor,
            },
          }}
        >
          {drawer}
          <Stack
            sx={{ position: "absolute", bottom: 15, left: 10 }}
            direction="column"
          >
            <Button variant="text" sx={{ fontSize: 10, color: textColor }}>
              Cookies
            </Button>
            <Button
              variant="text"
              sx={{ fontSize: 10, color: textColor }}
              style={{
                color: textColor,
                "&:hover": {
                  textDecoration: "underline #121212",
                },
              }}
            >
              Privacy
            </Button>
          </Stack>
        </Drawer>
      </Box>
      <Box sx={{ marginLeft: `${drawerWidth}px` }}>
        {/* Other content go here*/}
        {children}
      </Box>
    </Box>
  );
}

export default SideNav;
