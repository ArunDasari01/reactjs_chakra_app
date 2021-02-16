import { Box, Circle, Icon } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";

export default function SalesCarousel({
  items = [],
  renderItem,
  visibleSlides = 2,
}) {
  const showButtons = visibleSlides < items.length;
  const buttonProps = {
    alignItems: "center",
    background: "blackAlpha.500",
    color: "white",
    display: { base: "none", md: showButtons ? "flex" : "none" },
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1,
    size: { base: 10, md: 13, lg: 16 },
    marginX: "4",
  };
  return (
    <Box position="relative">
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
        <ButtonBack>
          <Circle {...buttonProps} left="0">
            <Icon as={FaArrowLeft} />
          </Circle>
        </ButtonBack>
        <ButtonNext>
          <Circle {...buttonProps} right="0">
            <Icon as={FaArrowRight} />
          </Circle>
        </ButtonNext>
      </CarouselProvider>
    </Box>
  );
}
