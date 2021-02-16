import { Box, IconButton, Link } from "@chakra-ui/react";

export function HeaderWrap(props) {
  return (
    <Box as="header" background="whiteAlpha.700" flex="0 1 auto" {...props} />
  );
}

export function HeaderLink({ children, ...props }) {
  return (
    <Link
      _hover={{ color: "primary.500" }}
      paddingX="2"
      paddingY="1"
      {...props}
      userSelect="none"
    >
      {children}
    </Link>
  );
}

export function HeaderIcon({ children, href }) {
  return (
    <IconButton
      as="button"
      bg="transparent"
      borderRadius="full"
      _hover={{ bg: "blackAlpha.50" }}
      _active={{ bg: "blackAlpha.200" }}
      paddingX="2"
      paddingY="1"
      cursor="pointer"
      fontSize="xl"
    >
      {children}
    </IconButton>
  );
}
