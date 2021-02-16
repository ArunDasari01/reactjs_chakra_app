import { AspectRatio, Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";

function TopFeatureItem({ image, title, description }) {
  return (
    <Box fontWeight="600" padding={{ base: "4", lg: "6" }}>
      <AspectRatio ratio={1.43 / 1}>
        <Image objectFit="cover" src={image} alt={title} />
      </AspectRatio>
      <Heading
        as="h2"
        color="blackAlpha.900"
        fontSize={{ base: "large", md: "larger", lg: "x-large" }}
        marginTop="3"
        marginBottom="1"
        textAlign="center"
      >
        {title}
      </Heading>
      <Box
        color="blackAlpha.700"
        fontSize={{ base: "smaller", md: "small", lg: "initial" }}
        textAlign="center"
      >
        {description}
      </Box>
    </Box>
  );
}

export default function ServiceTopFeatures({ topFeatures = [] }) {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={[3, 6, 9]}>
      {topFeatures.map((feature, idx) => (
        <TopFeatureItem key={idx} {...feature} />
      ))}
    </SimpleGrid>
  );
}
