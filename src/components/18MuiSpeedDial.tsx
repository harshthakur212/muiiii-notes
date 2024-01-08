import {
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Tooltip,
} from "@mui/material";
import { Print } from "@mui/icons-material";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import { Share } from "@mui/icons-material";
import { Edit } from "@mui/icons-material";

export const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<Edit />} />}
    >
      <SpeedDialAction
        icon={<CopyIcon />}
        tooltipTitle="Copy"
        tooltipOpen={true}
      />
      <SpeedDialAction
        icon={<Print />}
        tooltipTitle="Print"
        tooltipOpen={true}
      />
      <SpeedDialAction
        icon={<Share />}
        tooltipTitle="Share"
        tooltipOpen={true}
      />
    </SpeedDial>
  );
};
