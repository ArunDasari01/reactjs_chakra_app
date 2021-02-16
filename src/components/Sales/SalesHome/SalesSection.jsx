import { Box, Heading } from "@chakra-ui/react";
import { TansyContainer } from "../../Common";

export default function SalesSection({ title, children }) {
  return (
    <Box as="section" marginY="10" padding="6" background="white">
      <TansyContainer>
        <Heading as="h2" fontSize="20px" color="primary.500" marginBottom="8">
          {title}
        </Heading>
        {children}
      </TansyContainer>
    </Box>
  );
}
