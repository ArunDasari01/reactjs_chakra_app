import { Box, Heading, Image, useBreakpointValue } from "@chakra-ui/react";
import { Carousel } from "../../Common";

export default function RestaurantMenu({ menu = [] }) {
  const visibleSlides = useBreakpointValue({ base: 2, md: 3, lg: 5, xl: 7 });

  return (
    <Carousel
      items={menu}
      renderItem={(item) => (
        <Box padding="4" color="blackAlpha.700">
          <Image
            width="100%"
            height="auto"
            objectFit="cover"
            borderRadius="md"
            src={item.s3_path}
            alt={item.product_type}
          />
          <Heading marginTop="2" as="h2" fontSize="1.25em" fontWeight="bold">
            {item.product_type}
          </Heading>
        </Box>
      )}
      visibleSlides={visibleSlides}
    />
  );
}
