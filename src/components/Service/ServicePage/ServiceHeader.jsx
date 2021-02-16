import { Box, Flex, HStack, Icon, Image, Link, Spacer } from "@chakra-ui/react";
import { FiUser } from "react-icons/fi";
import { HeaderIcon, HeaderWrap, TansyContainer } from "../../Common";

function HeaderLink({ children }) {
  return <Link padding="2">{children}</Link>;
}

export default function ServiceHeader({ info = {} }) {
  return (
    <HeaderWrap padding="1">
      <TansyContainer>
        <Flex flexWrap="wrap">
          <Image
            src={info.headerLogo}
            alt={`${info.organization_name} Logo`}
            height="48px"
            width="auto"
          />
          <Spacer />
          <HStack as="nav" color="black" spacing="8">
            <HeaderLink>Home</HeaderLink>
            <HeaderLink>Services</HeaderLink>
            <HeaderLink>Testimonials</HeaderLink>
            <HeaderLink>Contact Us</HeaderLink>
          </HStack>
          <Spacer />
          <HStack color="blackAlpha.700" spacing="4">
            <Box>Call our shop {info?.contact_number}</Box>
            <HeaderIcon>
              <Icon as={FiUser} />
            </HeaderIcon>
          </HStack>
        </Flex>
      </TansyContainer>
    </HeaderWrap>
  );
}
