import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Stats />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
        </>
    );
}
