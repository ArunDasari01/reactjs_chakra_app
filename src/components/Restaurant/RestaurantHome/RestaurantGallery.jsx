import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Spacer,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { Carousel } from "../../Common";

export default function RestaurantGallery({ gallery = [] }) {
  const visibleSlides = useBreakpointValue({ base: 1, lg: 2 });

  return (
    <Box marginY="16">
      <Carousel
        items={gallery}
        renderItem={(item) => (
          <HStack marginX={{ base: 2, md: 4, lg: 6 }} spacing="6">
            <Image
              width="160px"
              height="160px"
              src={item.s3_link_response}
              alt={item.album_name}
              objectFit="cover"
            />
            <VStack align="flex-start" spacing="2">
              <Heading as="h3" color="blackAlpha.700" fontSize="medium">
                {item.album_name}
              </Heading>
              <Box color="blackAlpha.700">{item.description}</Box>
              <Flex width="full">
                <Box color="blackAlpha.700">12 Sep 2020</Box>
                <Spacer />
                <Box>
                  <Link color="primary.500">see more</Link>
                </Box>
              </Flex>
            </VStack>
          </HStack>
        )}
        visibleSlides={visibleSlides}
      />
    </Box>
  );
}
