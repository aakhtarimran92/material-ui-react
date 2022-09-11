import React from "react";
import {
  CssBaseline,
  AppBar,
  Typography,
  Box,
  Container,
  Stack,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import ToolBar from "@mui/material/Toolbar";
import AdjustIcon from "@mui/icons-material/Adjust";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image="https://images.pexels.com/photos/12004322/pexels-photo-12004322.jpeg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="smalll">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default App;
