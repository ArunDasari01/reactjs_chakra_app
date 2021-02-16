import { Box } from "@chakra-ui/react";
import ServiceHeader from "./ServiceHeader";
import ServiceFooter from "./ServiceFooter";
import useCompanyInfo from "../../Hooks/useCompanyInfo";
import { TansyPageSpinner } from "../../Common";

export default function ServicePage({ isLoading = false, children }) {
  const { info, isFetching } = useCompanyInfo();

  if (isLoading || isFetching) return <TansyPageSpinner />;

  return (
    <>
      <ServiceHeader info={info} />
      <Box flex="1 1 auto" as="main">
        {children}
      </Box>
      <ServiceFooter info={info} />
    </>
  );
}
