import { Box, Heading } from "@chakra-ui/react";

export function SectionHeading({ children }) {
  return (
    <Heading
      as="h2"
      color="primary.500"
      fontSize="x-large"
      textAlign="center"
      marginTop="16"
      marginBottom="6"
    >
      {children}
    </Heading>
  );
}

export default function Section({ title, children }) {
  return (
    <Box as="section" mx={[0, 2, 4, 0, 0]}>
      <SectionHeading>{title}</SectionHeading>
      {children}
    </Box>
  );
}
