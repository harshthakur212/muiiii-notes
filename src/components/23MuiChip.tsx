import { Stack, Chip, Avatar } from "@mui/material";
import { Face } from "@mui/icons-material";
import { useState } from "react";

export const MuiChip = () => {
  const [chips, setChips] = useState(["Chip 1", "Chip2", "Chip 3"]);
  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };
  return (
    <Stack direction={"row"} spacing={1}>
      <Chip label="chip" color="primary" size="small" icon={<Face />} />
      <Chip
        label="chip Outlined"
        color="secondary"
        size="small"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />
      <Chip label="Click" color="success" onClick={() => alert("Clicked")} />
      <Chip
        label="Delete"
        color="success"
        onClick={() => alert("Clicked")}
        onDelete={() => alert("Delete handler Called")}
      />
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};
