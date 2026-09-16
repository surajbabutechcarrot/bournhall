import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="bg-[linear-gradient(180deg,#fff7fa_0%,#fde8f1_55%,#fff_100%)] pt-[calc(var(--header-h)+2rem)] pb-24">
      <Container className="max-w-xl text-center">
        <p className="text-9xl mt-5 font-thin uppercase  text-brand-600">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink-800">Page not found</h1>
        <p className="mt-3 text-base leading-7 text-ink-500">
          The page you are looking for may have moved. Return home or book a consultation with our team.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/">Back home</Button>
          <Button href="/contact" variant="outline">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
