import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ScreenshotCarousel({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box>
      <Slider {...settings}>
        {images.map((src, i) => (
          <Box key={i}>
            <Image src={src} w={"100%"} borderRadius={"md"} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
