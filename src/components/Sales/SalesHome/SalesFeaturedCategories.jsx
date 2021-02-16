import { Box, Heading, Image, useBreakpointValue } from "@chakra-ui/react";
import SalesCarousel from "../SalesCarousel";

export default function SalesFeaturedCategories({ categories }) {
  const visibleSlides = useBreakpointValue({ base: 2, md: 3, lg: 4 });

  return (
    <SalesCarousel
      items={categories}
      renderItem={(category) => (
        <Box>
          <Image maxHeight="160px" objectFit="cover" src={category.s3_path} />
          <Heading as="h3" marginTop="1" fontSize="1.25em">
            {category.product_category}
          </Heading>
          <Box color="blackAlpha.700">{category.description}</Box>
        </Box>
      )}
      visibleSlides={visibleSlides}
    />
  );
}
