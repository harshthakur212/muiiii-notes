import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";
export const MuiRadio = () => {
  const [value, setvalue] = useState("");
  console.log({ value });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setvalue(event.target.value);
  };
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-year-experience-group-label">
          Years of Experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-label="jov-expereince-group-label"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            control={<Radio size="small" color="secondary" />}
            label="0-2"
            value={"0-2"}
          />
          <FormControlLabel control={<Radio />} label="3-5" value={"3-5"} />
          <FormControlLabel control={<Radio />} label="6-10" value={"6-10"} />
        </RadioGroup>
        <FormHelperText error>Invalid Selection</FormHelperText>
      </FormControl>
    </Box>
  );
};
