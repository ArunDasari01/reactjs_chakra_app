import { useTheme } from "@chakra-ui/react";
import RestaurantHome from "../components/Restaurant/RestaurantHome";
import SalesHome from "../components/Sales/SalesHome";
import ServiceHome from "../components/Service/ServiceHome";

const HomePageMap = {
  service: ServiceHome,
  sales: SalesHome,
  restaurant: RestaurantHome,
};

export default function HomePage() {
  const { template } = useTheme();
  const Component = HomePageMap[template.toLowerCase()];
  return <Component />;
}
