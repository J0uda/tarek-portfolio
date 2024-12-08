import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Tape } from './sections/Tape';

function App() {
  return (
    <main className='bg-gray-900 text-white antialiased font-sans'>
      <Header />
      <Hero />
      <Projects />
      <Tape />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
