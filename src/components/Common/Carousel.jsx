import { Box, Icon } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";

export default function Carousel({
  items = [],
  renderItem,
  visibleSlides = 2,
}) {
  const showButtons = visibleSlides < items.length;
  return (
    <Box position="relative" padding="4">
      <CarouselProvider
        totalSlides={items.length}
        isPlaying={true}
        playDirection="forward"
        interval={5000}
        visibleSlides={visibleSlides}
        isIntrinsicHeight={true}
      >
        <Slider>
          {items.map((e, idx) => (
            <Slide key={idx} index={idx}>
              {renderItem(e)}
            </Slide>
          ))}
        </Slider>
        <Box
          display={{ base: "none", md: showButtons ? "block" : "none" }}
          color="blackAlpha.500"
          position="absolute"
          top="50%"
          transform="translateY(-50%)"
          left={0}
          zIndex={1}
        >
          <ButtonBack>
            <Icon as={FaArrowLeft} />
          </ButtonBack>
        </Box>
        <Box
          display={{ base: "none", md: showButtons ? "block" : "none" }}
          color="blackAlpha.500"
          position="absolute"
          top="50%"
          transform="translateY(-50%)"
          right={0}
          zIndex={1}
        >
          <ButtonNext>
            <Icon as={FaArrowRight} />
          </ButtonNext>
        </Box>
      </CarouselProvider>
    </Box>
  );
}
