import { Center, Spinner } from "@chakra-ui/react";

export default function TansyPageSpinner() {
  return (
    <Center height="100vh">
      <Spinner speed="0.65s" size="xl" emptyColor="gray.200" thickness="4px" />
    </Center>
  );
}
