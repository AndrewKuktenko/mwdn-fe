import { FC, useEffect } from 'react';
import { useAppDispatch } from 'data/hooks';
import { Route, Routes, Navigate } from 'react-router';
import MainLayout from 'layouts/main';
import { getAllImages } from 'data/actions/image';
import GalleryPage from 'pages/gallery';
import CarouselPage from 'pages/carousel';

const Main: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllImages());
  }, [dispatch]);
  
  return (
    <MainLayout>
      <Routes>
        <Route path="/carousel" element={<CarouselPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="*" element={<Navigate to="/carousel" replace />} />
      </Routes>
    </MainLayout>
  )
};

export default Main;