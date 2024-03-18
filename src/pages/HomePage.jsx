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
  return (
    <MainContainer>
      <Header />
      <main>
        <Hero />
        <About />
        <MindMap />
        <Faq />
        <Arts />
        <Contact />
        <Footer />
      </main>
    </MainContainer>
  );
};

export default HomePage;
