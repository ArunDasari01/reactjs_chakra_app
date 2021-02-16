import { Section, TansyContainer, Testimonials } from "../../Common";
import RestaurantGallery from "./RestaurantGallery";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantPage from "../RestaurantPage";
import RestaurantSlider from "./RestaurantSlider";
import useRestaurantHome from "../useRestaurantHome";

export default function RestaurantHome() {
  const { data, isFetching } = useRestaurantHome();
  const { slides, menu, testimonials, gallery } = data ?? {};
  return (
    <RestaurantPage isLoading={isFetching}>
      <RestaurantSlider slides={slides} />
      <TansyContainer>
        <Section title="Menu">
          <RestaurantMenu menu={menu} />
        </Section>
        <Section title="Our Happy Customers">
          <Testimonials testimonials={testimonials} />
        </Section>
        <Section title="Gallery">
          <RestaurantGallery gallery={gallery} />
        </Section>
      </TansyContainer>
    </RestaurantPage>
  );
}
