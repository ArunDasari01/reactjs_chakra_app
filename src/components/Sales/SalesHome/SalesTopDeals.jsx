import { Box, Heading, Image, useBreakpointValue } from "@chakra-ui/react";
import SalesCarousel from "../SalesCarousel";

export default function SalesTopDeals({ deals = [] }) {
  const visibleSlides = useBreakpointValue({ base: 2, md: 3, lg: 4 });

  return (
    <SalesCarousel
      items={deals}
      renderItem={(deal) => (
        <Box>
          <Image
            height="140px"
            width="140px"
            objectFit="cover"
            src={deal.s3_path}
          />
          <Heading as="h3" marginTop="1" fontSize="1.25em">
            {deal.product_type}
          </Heading>
          <Box color="blackAlpha.700">{deal.discount_percent}</Box>
        </Box>
      )}
      visibleSlides={visibleSlides}
    />
  );
}
