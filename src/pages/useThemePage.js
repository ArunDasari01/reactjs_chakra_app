import { useTheme } from "@chakra-ui/react";
import RestaurantPage from "../components/Restaurant/RestaurantPage";
import SalesPage from "../components/Sales/SalesPage";
import ServicePage from "../components/Service/ServicePage";

const ThemePageMap = {
  service: ServicePage,
  sales: SalesPage,
  restaurant: RestaurantPage,
};

const NotFound = () => <div>Page does not exist for the template</div>;

export default function useThemePage() {
  const { template } = useTheme();
  const Component = ThemePageMap[template.toLowerCase()];

  if (!Component) return NotFound;

  return Component;
}
