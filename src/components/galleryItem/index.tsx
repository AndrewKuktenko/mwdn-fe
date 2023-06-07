import React, { useState, FC } from 'react';
import { IImage } from 'ts/interfaces/images/image';
import { Container, Image, Text } from './styles';
import PlaceholderSVG from 'assets/placeholder.png'

const GalleryItem: FC<{ image: IImage }> = ({ image }) => {
  const [isError, setIsError] = useState(false);
  return (
    <Container>
      <Image src={isError ? PlaceholderSVG : image.path} onError={() => setIsError(true)} />
      <Text>{image.title}</Text>
    </Container>
  )
};

export default GalleryItem;
