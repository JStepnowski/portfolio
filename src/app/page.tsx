import {AboutSection} from '@/sections/About';
import {ContactSection} from '@/sections/Contact';
import {Footer} from '@/sections/Footer';
import {Header} from '@/sections/Header';
import {HeroSection} from '@/sections/Hero';
import {ProjectsSection} from '@/sections/Projects';
import {TapeSection} from '@/sections/Tape';

export default function Home() {
  return (
    <div>
      <Header />

      <section id='home'>
        <HeroSection />
      </section>
      <section id='projekty'>
        <ProjectsSection />
      </section>
      <section id='tape'>
        <TapeSection />
      </section>
      <section id='o-mnie'>
        <AboutSection />
      </section>
      <section id='kontakt'>
        <ContactSection />
      </section>

      <Footer />
    </div>
  );
}
