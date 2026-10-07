import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Scaffolds } from "@/components/Scaffolds";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <Scaffolds />
        <Work />
        <Process />
        <About />
      </main>
    </>
  );
}
