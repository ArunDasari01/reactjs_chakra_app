import {
  Box,
  Heading,
  Image,
  Link,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import SalesSection from "./SalesSection";

export default function SalesDepartment({ id, name, categories }) {
  return (
    <SalesSection title={name}>
      <SimpleGrid spacing="5" columns="2">
        {categories.map((cat, idx) => (
          <VStack key={idx} spacing="1">
            <Image
              width="135px"
              height="135px"
              objectFit="cover"
              src={cat.image}
            />
            <Heading as="h2" fontSize="medium">
              {cat.name}
            </Heading>
          </VStack>
        ))}
      </SimpleGrid>
      <Box marginTop="8" width="full" textAlign="right">
        <Link color="primary.500">See more</Link>
      </Box>
    </SalesSection>
  );
}
