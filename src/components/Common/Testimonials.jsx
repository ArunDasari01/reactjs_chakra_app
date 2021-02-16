import {
  Box,
  Heading,
  HStack,
  Image,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import Carousel from "./Carousel";

export default function Testimonials({ testimonials = [] }) {
  const visibleSlides = useBreakpointValue({ base: 1, lg: 2 });
  return (
    <Box marginY="16">
      <Carousel
        items={testimonials}
        renderItem={(item) => (
          <HStack marginX={{ base: 2, md: 4, lg: 6 }} spacing="6">
            <Image
              width="140px"
              height="140px"
              src={item.s3_link_response}
              alt={item.consumer_name}
              objectFit="cover"
              borderRadius="80% 15% 55% 50% / 55% 15% 80% 50%;"
            />
            <VStack align="flex-start" spacing="2">
              <Heading as="h2" color="black" fontSize="xl">
                {item.testimonial_title}
              </Heading>
              <Box color="blackAlpha.700">{item.testimonial_text}</Box>
              <Box width="100%" textAlign="right" color="primary.500">
                {item.consumer_name}
              </Box>
            </VStack>
          </HStack>
        )}
        visibleSlides={visibleSlides}
      />
    </Box>
  );
}
