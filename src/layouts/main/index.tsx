import React, { useEffect, useState, FC, PropsWithChildren } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Container, ContentContainer, SwitchButton } from './styles';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const [pageName, setPageName] = useState('Loading...');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const currName = location.pathname.split('/')[1];
    const name = currName === 'carousel' ? 'gallery' : 'carousel';
    setPageName(name);
  }, [location]);

  return (
    <Container>
      <SwitchButton onClick={() => navigate(`/${pageName}`)}>{`SHOW ${pageName.toUpperCase()}`}</SwitchButton>
        <ContentContainer>
            {children}
        </ContentContainer>
    </Container>
  );
}

export default MainLayout;