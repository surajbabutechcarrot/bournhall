import { JsonLd } from "@/components/seo/JsonLd";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { NavigationProgress } from "@/components/ui/NavigationProgress";
import { organizationJsonLd } from "@/lib/jsonld";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <NavigationProgress />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <JsonLd data={organizationJsonLd} />
    </SmoothScroll>
  );
}
