import { HStack, SimpleGrid } from "@chakra-ui/react";
import { HeaderLink, TansyContainer } from "../../Common";
import SalesSection from "./SalesSection";
import SalesPage from "../SalesPage";
import useSalesHome from "../useSalesHome";
import SalesSlider from "./SalesSlider";
import SalesDepartment from "./SalesDepartment";
import SalesTopDeals from "./SalesTopDeals";
import SalesSearchedProducts from "./SalesSearchedProducts";
import SalesFeaturedCategories from "./SalesFeaturedCategories";

export default function SalesHome() {
  const { data, isFetching } = useSalesHome();
  const { slides, departments, topDeals, featuredCategories, productSearches } =
    data ?? {};

  return (
    <SalesPage
      isLoading={isFetching}
      wrapProps={{ background: "blackAlpha.100" }}
    >
      <HStack
        flexWrap="wrap"
        background="white"
        justify="center"
        spacing={{ base: 0, md: 12 }}
        padding="4"
      >
        {departments?.map((e) => (
          <HeaderLink key={e.id}>{e.name}</HeaderLink>
        ))}
      </HStack>
      <SalesSlider slides={slides} />
      <SalesSection title="Top Deals">
        <SalesTopDeals deals={topDeals} />
      </SalesSection>
      <SalesSection title="Featured Categories">
        <SalesFeaturedCategories categories={featuredCategories} />
      </SalesSection>
      {productSearches?.length > 0 ? (
        <SalesSection title="Based on your previous searches">
          <SalesSearchedProducts products={productSearches} />
        </SalesSection>
      ) : null}
      <TansyContainer>
        <SimpleGrid spacing="6" columns={{ base: 1, md: 2, lg: 3 }}>
          {departments?.map((e) => (
            <SalesDepartment key={e.id} {...e} />
          ))}
        </SimpleGrid>
      </TansyContainer>
    </SalesPage>
  );
}
