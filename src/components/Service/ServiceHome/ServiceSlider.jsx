import { Box, Button, Heading } from "@chakra-ui/react";
import { CarouselProvider, Slider, Slide, Image } from "pure-react-carousel";

export default function ServiceSlider({ slides = [] }) {
  return (
    <Box
      maxWidth={window.screen.width}
      margin="0 auto"
      position="relative"
      marginBottom="8"
    >
      <CarouselProvider
        naturalSlideWidth={window.innerWidth}
        naturalSlideHeight={window.innerWidth / 2.5}
        totalSlides={slides.length}
        isPlaying={true}
        playDirection="forward"
        interval={5000}
        infinite={true}
      >
        <Slider>
          {slides.map((e, idx) => (
            <Slide key={idx} index={idx}>
              <Image
                src={e.s3_path}
                alt={e.caption}
                style={{ objectFit: "cover" }}
              />
              <Box
                backgroundColor="whiteAlpha.700"
                color="black"
                marginX={{ base: "2", lg: "8" }}
                maxWidth={{ base: "100%", lg: "645px" }}
                padding={{ base: "4", lg: "8" }}
                position="absolute"
                top="50%"
                transform="translateY(-50%)"
              >
                <Heading
                  as="h1"
                  fontWeight="600"
                  fontSize={{ base: "medium", md: "x-large", lg: "xx-large" }}
                  marginBottom="2"
                >
                  {e.caption}
                </Heading>
                <Button
                  colorScheme="primary"
                  borderRadius="0"
                  fontSize={{ base: "small", md: "large", lg: "large" }}
                  padding={{ base: 2, md: 4, lg: 6 }}
                >
                  BOOK APPOINTMENT
                </Button>
              </Box>
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </Box>
  );
}
