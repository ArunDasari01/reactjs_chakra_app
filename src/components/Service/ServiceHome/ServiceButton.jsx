import { Button } from "@chakra-ui/react";

export default function ServiceButton({ children }) {
  return (
    <Button
      borderRadius="none"
      colorScheme="primary"
      fontSize="inherit"
      fontWeight="600"
      paddingX="8"
      paddingY="6"
      textTransform="uppercase"
    >
      {children}
    </Button>
  );
}
