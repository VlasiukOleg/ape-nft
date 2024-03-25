import { StyledDescription } from './Decription.styled';

import { useState, useEffect } from 'react';

export const Description = () => {
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
        <StyledDescription>
          <span>WHO GOT</span>
          <span>FED UP WITH BORING</span>
          <span>AND HYPOCRITIC</span>
          <span>COMMONPLACE THIS IS</span>
          <span>HOW THE IDEA OF</span>
          <span>ESCAPING AND DYNAMIC</span>
          <span>JOURNEY ON THE YACHT</span>
        </StyledDescription>
      ) : (
        <StyledDescription>
          <span>WHO GOT FED UP WITH BORING</span>
          <span>AND HYPOCRITIC COMMONPLACE</span>
          <span> THIS IS HOW THE IDEA OF</span>
          <span>ESCAPING AND DYNAMIC</span>
          <span>JOURNEY ON THE</span>
          <span>YACHT</span>
        </StyledDescription>
      )}
    </>
  );
};
