import { Box, Image } from "@chakra-ui/react";
import SalesCarousel from "../SalesCarousel";

export default function SalesSlider({ slides = [] }) {
  return (
    <Box
      maxWidth={window.screen.width}
      margin="0 auto"
      position="relative"
      marginBottom="8"
    >
      <SalesCarousel
        items={slides}
        visibleSlides={1}
        renderItem={(slide) => (
          <Image
            src={slide.s3_path}
            alt={slide.caption}
            width="full"
            height="auto"
          />
        )}
      />
    </Box>
  );
}
