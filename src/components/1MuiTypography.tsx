import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <>
      <div>
        <Typography variant="h1">heading h1</Typography>
        <Typography variant="h2">heading h2</Typography>
        <Typography variant="h3">heading h3</Typography>
        <Typography variant="h4" component="h1" gutterBottom>
          heading h4
        </Typography>
        <Typography variant="h5">heading h5</Typography>
        <Typography variant="h6">heading h6</Typography>

        <Typography variant="subtitle1">sub title 1</Typography>
        <Typography variant="subtitle2">sub title 2</Typography>

        <Typography variant="body1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit
          rem nihil! Fuga explicabo sit expedita, minima voluptate enim officiis
          sed modi illo velit.
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sequi,
          incidunt obcaecati assumenda dolore soluta enim. Assumenda, laudantium
          sed molestias eos ullam voluptatum ex.
        </Typography>
      </div>
    </>
  );
};
