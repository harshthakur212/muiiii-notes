import { Stack, Rating } from "@mui/material";
import React, { useState } from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
export const MuiRating = () => {
  const [value, setValue] = useState<number | null>();
  console.log({ value });
  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        icon={<Favorite fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorder fontSize="inherit" />}
        highlightSelectedOnly
      />
    </Stack>
  );
};
