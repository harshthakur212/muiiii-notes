import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

export const MuiSelect = () => {
  // const [country, setcountry] = useState("");
  // console.log({ country });
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setcountry(event.target.value as string);
  // };
  const [countries, setCountries] = useState<String[]>([]);
  console.log({ countries });
  const handleBhange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value == "string" ? value.split(",") : value);
  };
  return (
    <Box width={"250px"}>
      <TextField
        label="Select Your Country"
        select
        value={countries}
        onChange={handleBhange}
        fullWidth
        SelectProps={{ multiple: true }}
        size="small"
        helperText="please select your country"
        color="secondary"
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};
