import React, { FC } from "react";
import GalleryLayout from 'layouts/gallery';
import GalleryItem from 'components/galleryItem';
import { IImage } from "ts/interfaces/images/image";
import { imagesSelector } from 'data/selectors/image';
import { useAppSelector } from "data/hooks";

const GalleryPage: FC = () => {
  const images: IImage[] = useAppSelector(imagesSelector);

  return (
    <GalleryLayout>
      {images.map((image, index) => <GalleryItem key={`img_${index}`} image={image} />)}
    </GalleryLayout>
  );
};

export default GalleryPage;
