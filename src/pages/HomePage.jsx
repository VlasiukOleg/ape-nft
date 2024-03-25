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

  const screenWidth = window.innerWidth;
  console.log(screenWidth);
  return (
    <MainContainer>
      <Header />
      <main>
        <Hero ref={contactRef} />
        <About />
        <MindMap />
        <Faq />
        <Arts />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </MainContainer>
  );
};

export default HomePage;
