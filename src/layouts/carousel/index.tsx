import React, { FC, PropsWithChildren } from 'react';
import { Container } from './styles';

const CarouselLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Container>
          {children}
        </Container>
    )
}

export default CarouselLayout;