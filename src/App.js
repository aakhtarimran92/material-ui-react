import React from "react";
import { CssBaseline, AppBar, Typography } from "@mui/material";
import ToolBar from "@mui/material/Toolbar";
import AdjustIcon from "@mui/icons-material/Adjust";

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar postion="relative">
        <ToolBar>
          <AdjustIcon sx={{ mr: 1 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Photo Album
          </Typography>
        </ToolBar>
      </AppBar>
    </>
  );
};

export default App;
