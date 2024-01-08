import {
  Stack,
  ImageList,
  ImageListItem,
  Typography,
  Box,
  ImageListItemBar,
} from "@mui/material";

export const MuiImageList = () => {
  const images = [
    {
      title: "Mountain Sunset",
      img: "https://source.unsplash.com/featured/?mountains,sunset",
    },
    {
      title: "Beach View",
      img: "https://source.unsplash.com/featured/?beach,sea",
    },
    {
      title: "City Skyline",
      img: "https://source.unsplash.com/featured/?city,skyline",
    },
    {
      title: "Forest Landscape",
      img: "https://source.unsplash.com/featured/?forest,nature",
    },
    {
      title: "Aurora Borealis",
      img: "https://source.unsplash.com/featured/?aurora",
    },
    {
      title: "Desert Dunes",
      img: "https://source.unsplash.com/featured/?desert,sand",
    },
    {
      title: "Waterfall Scenery",
      img: "https://source.unsplash.com/featured/?waterfall",
    },
    {
      title: "Flower Garden",
      img: "https://source.unsplash.com/featured/?flowers,garden",
    },
    {
      title: "Urban Architecture",
      img: "https://source.unsplash.com/featured/?architecture,urban",
    },
    {
      title: "Countryside Farm",
      img: "https://source.unsplash.com/featured/?countryside,farm",
    },
    {
      title: "Space Galaxy",
      img: "https://source.unsplash.com/featured/?space,galaxy",
    },
    {
      title: "Wildlife Safari",
      img: "https://source.unsplash.com/featured/?wildlife,safari",
    },
    // Add more images as needed
  ];
  return (
    <Stack spacing={4}>
      <Typography variant="h5">Image Gallery</Typography>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {images.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
      <ImageList
        variant="woven"
        sx={{ width: 500, height: 450 }}
        cols={3}
        gap={8}
      >
        {images.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
      <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {images.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar title={item.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Stack>
  );
};
