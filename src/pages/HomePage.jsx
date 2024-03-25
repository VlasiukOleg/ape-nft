import { useRef } from 'react';

import {
  MainContainer,
  Header,
  Hero,
  About,
  MindMap,
  Faq,
  Arts,
  Contact,
  Footer,
} from 'components';

const HomePage = () => {
  const contactRef = useRef();
  const aboutRef = useRef();
  const mindMapRef = useRef();
  const faqRef = useRef();
  const artsRef = useRef()

  const ref = { contactRef, aboutRef, mindMapRef, faqRef, artsRef };

  const screenWidth = window.innerWidth;
  console.log(screenWidth);
  return (
    <MainContainer>
      <Header ref={ref} />
      <main>
        <Hero ref={contactRef} />
        <About ref={aboutRef} />
        <MindMap ref={mindMapRef} />
        <Faq ref={faqRef} />
        <Arts ref={artsRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </MainContainer>
  );
};

export default HomePage;
