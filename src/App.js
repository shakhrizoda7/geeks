import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Comments from "./components/Comments/Comments";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import Header from "./components/Header/Header";
import Instructor from "./components/Instruktor/Instruktor";
import Landing from "./components/LandingPage/Landing";
import Learn from "./components/Learn/Learn";
import Question from './components/Questions/Questions';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <div className="App">
      <GlobalStyles />

      {/* header section */}
      <header>
        <Header />
      </header>
    
      <main>
        {/* landing section */}
        <section data-aos="fade-up">
          <Landing />
        </section>

        {/* learn section */}
        <section data-aos="fade-up">
          <Learn />
        </section>

        {/* instructor section */}
        <section data-aos="fade-up">
          <Instructor />
        </section>

        {/* comments section */}
        <section data-aos="fade-up">
          <Comments />
        </section>

        {/* questions section */}
        <section data-aos="fade-up">
          <Question />
        </section>

        {/* join section */}
        <section data-aos="fade-up">
          <Join />
        </section>
      </main>

      <footer>
        {/* Footer section */}
        <section data-aos="fade-up">
          <Footer />
        </section>
      </footer>
    </div>
  );
}
export default App;