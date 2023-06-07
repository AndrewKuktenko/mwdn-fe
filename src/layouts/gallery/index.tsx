import React, { FC, PropsWithChildren } from 'react';
import { Container } from './styles';

const GalleryLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Container>
          {children}
        </Container>
    )
}

export default GalleryLayout;