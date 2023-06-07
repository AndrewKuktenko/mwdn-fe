import styled from 'styled-components';
import { COLOR, SIZE } from 'enums/styles';

export const Container = styled.section`
  flex-direction: column;
  justify-content: flex-start;
  background: ${COLOR.MAIN_BACKGROUND};
  align-items: center;
  display: flex;
  height: 100vh;
  padding-bottom: 60px;
`;


export const ContentContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  overflow-y: hidden;
`;

export const SwitchButton = styled.button`
  display: inline-block;
  background-color: ${COLOR.BUTTON_PRIMARY};
  color: ${COLOR.WHITE};
  font-size: 18px;
  margin: 20px;
  padding: 2px 20px;
  min-height: ${SIZE.BUTTON_HIGHT}px;
  min-width: ${SIZE.BUTTON_WIDTH}px;
  border: 2px solid ${COLOR.BUTTON_PRIMARY};
  border-radius: 3px;
  display: block;
  cursor: pointer;
  transition: background-color 200ms ease;

  &:hover {
    background-color: ${COLOR.BUTTON_LIGHT};
  }
`;
