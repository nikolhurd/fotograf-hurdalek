import Hero from "../components/Hero";
import HomepageGalleryPreview from "../components/HomepageGalleryPreview";
import ServiceCardsSection from "../components/ServiceCardsSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HomepageGalleryPreview />
      <ServiceCardsSection></ServiceCardsSection>
    </main>
  );
}
