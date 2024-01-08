import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

export const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component={"img"}
          height={"180"}
          src="https://source.unsplash.com/random"
          alt="unsplash img"
        />
        <CardContent>
          <Typography variant="h5" gutterBottom component={"div"}>
            React
          </Typography>
          <Typography variant="body2" color={"text.secondary"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem non ipsum delectus.
          </Typography>
        </CardContent>
        <CardContent>
          <Button size="small">Share</Button>
          <Button size="small">Read more</Button>
        </CardContent>
      </Card>
    </Box>
  );
};
