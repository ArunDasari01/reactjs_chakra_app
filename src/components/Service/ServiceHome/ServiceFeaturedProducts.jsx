import {
  AspectRatio,
  Box,
  Heading,
  HStack,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import ServiceButton from "./ServiceButton";

function FeaturedProduct({
  title,
  description,
  image,
  price,
  discountedPrice,
}) {
  return (
    <Box fontWeight="600" padding={{ base: "4", lg: "6" }}>
      <AspectRatio ratio={1.25 / 1}>
        <Image objectFit="cover" src={image} alt={title} />
      </AspectRatio>
      <Heading
        color="blackAlpha.900"
        as="h2"
        fontSize={{ base: "large", md: "larger", lg: "x-large" }}
        marginTop="3"
        marginBottom="1"
      >
        {title}
      </Heading>
      <Box
        color="blackAlpha.700"
        fontSize={{ base: "smaller", md: "small", lg: "initial" }}
      >
        {description}
      </Box>
      <HStack justifyContent="flex-end" spacing="2">
        {discountedPrice < price ? (
          <Box color="blackAlpha.700" textDecoration="line-through">
            Rs. {price}
          </Box>
        ) : null}
        <Box>Rs. {discountedPrice}</Box>
      </HStack>
      <ServiceButton>Book Appointment</ServiceButton>
    </Box>
  );
}

export default function ServiceFeaturedProducts({ featuredProducts = [] }) {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={[3, 6, 9]}>
      {featuredProducts.map((product) => (
        <FeaturedProduct key={product.id} {...product} />
      ))}
    </SimpleGrid>
  );
}
