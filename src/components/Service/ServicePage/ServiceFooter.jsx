import {
  Box,
  Grid,
  GridItem,
  HStack,
  Icon,
  Image,
  Link,
  VStack,
} from "@chakra-ui/react";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { TansyContainer } from "../../Common";

export default function ServiceFooter({ info = {} }) {
  return (
    <Box
      flex="0 1 auto"
      as="footer"
      background="primary.500"
      color="white"
      paddingX={{ base: 6, md: 8, lg: 10 }}
      paddingY={{ base: 6 }}
      marginTop="16"
    >
      <TansyContainer>
        {info ? (
          <Image
            src={info.footerLogo}
            alt={`${info.organization_name} logo`}
            height="40px"
            width="auto"
            marginBottom="4"
          />
        ) : null}
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(5, 1fr)" }}
          templateRows={{ base: "repeat(4, 1fr)", lg: "repeat(1, 1fr)" }}
          gap={4}
        >
          <GridItem colSpan={{ base: 1, lg: 2 }}>
            {info ? (
              <>
                <Box fontSize="large" fontWeight="600">
                  {info.organization_name}
                </Box>
                <Box>{info.address1}</Box>
                <Box>{info.address2}</Box>
                <Box>
                  {info.city_name}, {info.postal_code}
                </Box>
                <HStack spacing="2">
                  <Icon as={FiPhoneCall} />
                  <span>{info.contact_number}</span>
                </HStack>
                <HStack spacing="2">
                  <Icon as={FiMail} />
                  <span>{info.email}</span>
                </HStack>
              </>
            ) : (
              <Box height="140px" />
            )}
          </GridItem>
          <GridItem>
            <VStack align="flex-start" spacing="1">
              <Link>Home</Link>
              <Link>Contact</Link>
              <Link>Terms of use</Link>
              <Link>Privacy Policy</Link>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack align="flex-start" spacing="1">
              <Link>Gallery</Link>
              <Link>Feedback</Link>
              <Link>Testimonials</Link>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack align="flex-start" spacing="1">
              <Link>Services</Link>
              <Link>Most Opted Service</Link>
              <Link>Deals &amp; Offers</Link>
              <Link>Gift Cards</Link>
            </VStack>
          </GridItem>
        </Grid>
      </TansyContainer>
    </Box>
  );
}
