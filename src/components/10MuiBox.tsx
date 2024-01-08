import React from "react";
import { Box, Stack, Divider, Grid, Paper } from "@mui/material";

//display flex and flex direction column are by default in stack
export const MuiBox = () => {
  return (
    <Paper sx={{ padding: "32px" }} elevation={14}>
      <Stack
        sx={{ border: "1px solid" }}
        direction={"row"}
        spacing={2}
        padding={2}
        //   alignContent={"center"}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            bgcolor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": { bgcolor: "primary.light" },
            transition: "ease-in 0.2s",
          }}
        >
          hello
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        ></Box>
      </Stack>
      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={12} sm={6} md={3} lg={14} xl={16}>
          <Box bgcolor={"primary.light"} p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={14} xl={16}>
          <Box bgcolor={"primary.light"} p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={14} xl={16}>
          <Box bgcolor={"primary.light"} p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={14} xl={16}>
          <Box bgcolor={"primary.light"} p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
