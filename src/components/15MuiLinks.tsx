import { Stack, Link, Typography } from "@mui/material";

export const MuiLinks = () => {
  return (
    <Stack spacing={2} direction={"row"} m={4}>
      <Link href="#" variant="body2" color={"secondary"} underline="hover">
        Link
      </Link>
      <Typography variant="h6">
        <Link href="#" color={"error"} underline="none">
          Secondary
        </Link>
      </Typography>
    </Stack>
  );
};
