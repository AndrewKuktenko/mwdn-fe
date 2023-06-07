import React, { FC } from "react";
import { IImage } from "ts/interfaces/images/image";
import Carousel from 'components/carousel';
import { imagesSelector } from 'data/selectors/image';
import { useAppSelector } from "data/hooks";
import CarouselLayout from 'layouts/carousel';

const CarouselPage: FC = () => {
  const images: IImage[] = useAppSelector(imagesSelector);

  return (
    <CarouselLayout>
      <Carousel>
        {images.map((image, index) => <img key={`img_${index}`} src={image.path} alt={`image_${index}`} />)}
      </Carousel>
    </CarouselLayout>
  );
};

export default CarouselPage;
