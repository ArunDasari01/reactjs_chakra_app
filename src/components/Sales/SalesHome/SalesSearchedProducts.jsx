import {
  Box,
  Heading,
  HStack,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import SalesCarousel from "../SalesCarousel";

export default function SalesSearchedProducts({ products = [] }) {
  const visibleSlides = useBreakpointValue({ base: 2, md: 3, lg: 4 });

  return (
    <SalesCarousel
      items={products}
      renderItem={(product) => (
        <Box>
          <Image maxHeight="160px" objectFit="cover" src={product.s3_path} />
          <Heading as="h3" marginTop="1" fontSize="1.25em">
            {product.product_name}
          </Heading>
          <HStack spacing="1">
            <Box color="black">Rs. {product.discount_price}</Box>
            <Box color="blackAlpha.700">
              (Rs. {product.actual_price}) Discount {product.discount}
            </Box>
          </HStack>
        </Box>
      )}
      visibleSlides={visibleSlides}
    />
  );
}
