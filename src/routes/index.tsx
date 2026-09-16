import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Portfolio />
      </main>
      <SiteFooter />
    </>
  );
}
