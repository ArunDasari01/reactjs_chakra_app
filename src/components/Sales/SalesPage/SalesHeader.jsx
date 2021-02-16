import { Box, Flex, HStack, Icon, Image, Input } from "@chakra-ui/react";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HeaderIcon, HeaderWrap, TansyContainer } from "../../Common";

export default function SalesHeader({ info = {} }) {
  return (
    <HeaderWrap padding="2">
      <TansyContainer>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          flexWrap={{ base: "wrap", md: "nowrap" }}
        >
          <Image
            order={{ base: 0, md: 0 }}
            src={info.headerLogo}
            alt={`${info.organization_name} Logo`}
            height="48px"
            width="auto"
          />
          <HStack
            order={{ base: 1, md: 1 }}
            color="gray.500"
            spacing="2"
            marginX="4"
            alignItems="flex-end"
          >
            <Box marginBottom="0.5">
              <Icon as={FaMapMarkerAlt} />
            </Box>
            <Box>
              <Box>Kishore</Box>
              <Box color="black">Vishakaptnam</Box>
            </Box>
          </HStack>
          <Input
            order={{ base: 2, md: 1 }}
            focusBorderColor="primary.500"
            borderRadius="xl"
            placeholder="Search"
            marginX={{ base: "0", md: "4" }}
            marginY={{ base: "4", md: "0" }}
          />
          <HStack order={{ base: 1, md: 2 }} spacing="4">
            <HeaderIcon>
              <Icon as={FiShoppingCart} />
            </HeaderIcon>
            <HeaderIcon>
              <Icon as={FiHeart} />
            </HeaderIcon>
            <HeaderIcon>
              <Icon as={FiUser} />
            </HeaderIcon>
          </HStack>
        </Flex>
      </TansyContainer>
    </HeaderWrap>
  );
}
