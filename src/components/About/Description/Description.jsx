import { Description } from './Decription.styled';

import { useState, useEffect } from 'react';

export const DesktopDescription = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {screenWidth < 768 ? (
        <Description>
          <span>WHO GOT</span>
          <span>FED UP WITH BORING</span>
          <span>AND HYPOCRITIC</span>
          <span>COMMONPLACE THIS IS</span>
          <span>HOW THE IDEA OF</span>
          <span>ESCAPING AND DYNAMIC</span>
          <span>JOURNEY ON THE YACHT</span>
        </Description>
      ) : (
        <Description>
          <span>WHO GOT FED UP WITH BORING</span>
          <span>AND HYPOCRITIC COMMONPLACE</span>
          <span> THIS IS HOW THE IDEA OF</span>
          <span>ESCAPING AND DYNAMIC</span>
          <span>JOURNEY ON THE</span>
          <span>YACHT</span>
        </Description>
      )}
    </>
  );
};
