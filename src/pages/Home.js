import React from "react";

import { Box, Toolbar, Container, Button, Divider } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const pages = ["Premium", "Support", "Download"];

function Home() {
  return (
    <Box style={{ backgroundColor: "black" }}>
      <Toolbar disableGutters>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            paddingLeft: 5,
          }}
        >
          <KeyboardArrowLeftIcon sx={{ color: "white" }} />
          <KeyboardArrowRightIcon sx={{ color: "white" }} />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "right",
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => {}}
              sx={{
                color: "#a2a2a2",
                display: "block",
                marginInline: 1,
              }}
            >
              {page}
            </Button>
          ))}
          <Divider
            orientation="vertical"
            flexItem
            style={{ backgroundColor: "white", marginInline: 10 }}
          />
          <Button style={{ color: "#a2a2a2", marginInline: 5 }}>Sign Up</Button>
          <Button
            style={{
              color: "black",
              backgroundColor: "white",
              marginInline: 5,
              padding: 10,
              paddingInline: 25,
              borderRadius: 30,
            }}
          >
            Log in
          </Button>
        </Box>
      </Toolbar>
    </Box>
  );
}
export default Home;
