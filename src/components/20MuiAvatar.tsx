import { Stack, Avatar, AvatarGroup } from "@mui/material";

export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light" }}>HT</Avatar>
        <Avatar sx={{ bgcolor: "primary.light" }}>VM</Avatar>
      </Stack>
      <Stack direction={"row"} spacing={1}>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="yea yea"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/.jpg"
            alt="yea yea"
          />
        </AvatarGroup>
      </Stack>
    </Stack>
  );
};
