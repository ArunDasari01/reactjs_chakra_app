import { Box } from "@chakra-ui/react";
import { TansyPageSpinner } from "../../Common";
import SalesHeader from "./SalesHeader";
import SalesFooter from "./SalesFooter";
import useCompanyInfo from "../../Hooks/useCompanyInfo";

export default function SalesPage({ isLoading = false, children, wrapProps }) {
  const { info, isFetching } = useCompanyInfo();

  if (isLoading || isFetching) return <TansyPageSpinner />;

  return (
    <>
      <SalesHeader info={info} />
      <Box flex="1 1 auto" as="main" paddingBottom="16" {...wrapProps}>
        {children}
      </Box>
      <SalesFooter info={info} />
    </>
  );
}
