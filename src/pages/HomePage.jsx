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
  const screenWidth = window.innerWidth;
  console.log(screenWidth);
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
      </main>
      <Footer />
    </MainContainer>
  );
};

export default HomePage;
