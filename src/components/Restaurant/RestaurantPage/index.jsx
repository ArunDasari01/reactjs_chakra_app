import { Box } from "@chakra-ui/react";
import { TansyPageSpinner } from "../../Common";
import RestaurantHeader from "./RestaurantHeader";
import RestaurantFooter from "./RestaurantFooter";
import useCompanyInfo from "../../Hooks/useCompanyInfo";

export default function RestaurantPage({ isLoading = false, children }) {
  const { info, isFetching } = useCompanyInfo();

  if (isLoading || isFetching) return <TansyPageSpinner />;

  return (
    <>
      <RestaurantHeader info={info} />
      <Box flex="1 1 auto" as="main">
        {children}
      </Box>
      <RestaurantFooter info={info} />
    </>
  );
}
