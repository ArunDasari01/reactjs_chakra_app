import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Link,
  Spacer,
} from "@chakra-ui/react";
import { FiUser } from "react-icons/fi";
import { HeaderIcon, HeaderWrap, TansyContainer } from "../../Common";

function HeaderLink({ children }) {
  return (
    <Link fontFamily="heading" padding="2">
      {children}
    </Link>
  );
}

export default function RestaurantHeader({ info = {} }) {
  return (
    <HeaderWrap padding="3">
      <TansyContainer>
        <Flex flexWrap="wrap">
          <Image
            src={info.headerLogo}
            alt={`${info.organization_name} Logo`}
            height="48px"
            width="auto"
          />
          <Spacer />
          <HStack as="nav" spacing={{ md: 4, lg: 8, xl: 10 }}>
            <HeaderLink>Menu</HeaderLink>
            <HeaderLink>Our Story</HeaderLink>
            <HeaderLink>Services</HeaderLink>
            <HeaderLink>Events</HeaderLink>
            <HeaderLink>Order</HeaderLink>
            <Button fontFamily="heading" colorScheme="primary">
              Reserve Now
            </Button>
            <HeaderIcon>
              <Icon as={FiUser} />
            </HeaderIcon>
          </HStack>
        </Flex>
      </TansyContainer>
    </HeaderWrap>
  );
}
