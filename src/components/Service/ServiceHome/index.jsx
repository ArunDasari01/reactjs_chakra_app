import { Testimonials, TansyContainer, Section } from "../../Common";
import ServiceTopFeatures from "./ServiceTopFeatures";
import ServiceFeaturedProducts from "./ServiceFeaturedProducts";
import ServiceSlider from "./ServiceSlider";
import useServiceHome from "../useServiceHome";
import ServicePage from "../ServicePage";

export default function ServiceHome() {
  const { data, isLoading } = useServiceHome();
  const { slides, featuredProducts, topFeatures, testimonials } = data || {};

  return (
    <ServicePage isLoading={isLoading}>
      <ServiceSlider slides={slides} />
      <TansyContainer>
        <Section title="Top Features">
          <ServiceTopFeatures topFeatures={topFeatures} />
        </Section>
        <Section title="Testimonials">
          <Testimonials testimonials={testimonials} />
        </Section>
        <Section title="Our Featured Services">
          <ServiceFeaturedProducts featuredProducts={featuredProducts} />
        </Section>
      </TansyContainer>
    </ServicePage>
  );
}
