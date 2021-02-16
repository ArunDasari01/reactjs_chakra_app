import { Box } from "@chakra-ui/react";
import { CarouselProvider, Slider, Slide, Image } from "pure-react-carousel";

export default function RestaurantSlider({ slides = [] }) {
  return (
    <Box
      marginBottom="8"
      maxWidth={window.screen.width}
      marginX="auto"
      position="relative"
    >
      <CarouselProvider
        naturalSlideWidth={window.innerWidth}
        naturalSlideHeight={window.innerWidth / 2.5}
        totalSlides={slides.length}
        isPlaying={true}
        playDirection="forward"
        interval={5000}
      >
        <Slider>
          {slides.map((e, idx) => (
            <Slide key={idx} index={idx}>
              <Image
                src={e.s3_path}
                alt={e.caption}
                style={{ objectFit: "cover" }}
              />
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </Box>
  );
}
