import { Quicksand } from 'next/font/google'
import Technologies from '../components/Technologies';
import Journey from '@/components/Journey';
import Projects from '@/components/Projects';
import Navlink from '@/components/Navlinks';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

const inter = Quicksand({ subsets: ['latin'], display: 'swap' })

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <div className="container mx-auto mt-5">
        <header>
          <Navlink />
        </header>
        <section className="im-section flex flex-wrap justify-between mt-20">
          <Hero />
        </section>

        <section className="im-section mt-20" id="project">
          <Projects />
        </section>

        <section className="im-section mt-20" id="skill">
          <Technologies />
        </section>

        <section className="im-section mt-20" id="journey">
          <Journey />
        </section>

        <section id="contact">
          <Footer />
        </section>
      </div>
    </main>
  )
}
