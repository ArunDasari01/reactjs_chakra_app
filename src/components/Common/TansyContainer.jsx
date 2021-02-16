import { Container } from "@chakra-ui/react";

export default function TansyContainer({ children, ...props }) {
  return (
    <Container maxWidth="1400px" padding="0" {...props}>
      {children}
    </Container>
  );
}
