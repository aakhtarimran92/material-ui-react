import React from "react";
import {
  CssBaseline,
  AppBar,
  Typography,
  Box,
  Container,
  Stack,
  Button,
} from "@mui/material";
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
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 10,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={4}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button varaint="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
      </main>
    </>
  );
};

export default App;
