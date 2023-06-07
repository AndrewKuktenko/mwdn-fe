import React, { useState, useEffect, FC, PropsWithChildren, Children } from "react";
import {
  Container,
  Wrapper,
  ContentWrapper,
  Content,
  ControlButton,
  IconLeft,
  IconRight,
  IconCircle,
  CirclesWrapper,
} from './styles';

const Carousel: FC<PropsWithChildren> = ({ children }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [length, setLength] = useState(Children.count(children));

  useEffect(() => {
    setLength(Children.count(children));
  }, [children]);

  const next = () => {
    if (currIndex < (length - 1)) {
        setCurrIndex(prevState => prevState + 1)
    }
}

  const prev = () => {
      if (currIndex > 0) {
        setCurrIndex(prevState => prevState - 1)
      }
  }

  return (
    <Container>
      <Wrapper>
        <ControlButton disabled={!(currIndex > 0)} position="left" onClick={prev}>
          <IconLeft />
        </ControlButton>
        <ContentWrapper>
          <Content
            style={{ transform: `translateX(-${currIndex * 100}%)` }}
          >
            {children}
          </Content>
        </ContentWrapper>
        <ControlButton disabled={!(currIndex < (length - 1))} position="right" onClick={next}>
          <IconRight />
        </ControlButton>
        <CirclesWrapper>
          {[...Array(length)].map((x, index) => <IconCircle onClick={() => setCurrIndex(index)} key={`circle_${index}`} active={index === currIndex} />)}
        </CirclesWrapper>
      </Wrapper>
    </Container>
  );
};

export default Carousel;
