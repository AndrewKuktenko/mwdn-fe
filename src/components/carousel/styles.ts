import styled from "styled-components";
import { COLOR } from "enums/styles";
import { FaAngleLeft, FaAngleRight, FaCircle } from "react-icons/fa";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

export const ContentWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  transition: all 250ms linear;
  -ms-overflow-style: none;
  scrollbar-width: none;
  width: 700px;
  max-height: 650px;

  &:-webkit-scrollbar {
    display: none;
  }

  > * {
    width: 100%;
    flex-shrink: 0;
    flex-grow: 1;
  }
`;

export const IconLeft = styled(FaAngleLeft)`
  height: auto;
  width: 40px;
`;

export const IconRight = styled(FaAngleRight)`
  height: auto;
  width: 40px;
`;

export const IconCircle = styled(FaCircle) <{ active: boolean }>`
  height: auto;
  width: 20px;
  color: ${(props) => props.active ? COLOR.CAROUSEL_ACTIVE_DOT  : COLOR.WHITE};
  cursor: pointer;
`;

export const CirclesWrapper = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 35px;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const ControlButton = styled.button <{ position: 'left' | 'right' }>`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: white;
  ${(props) => props.position === 'left' ? 'left: 24px' : 'right: 24px'};
  background: none;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  color: ${COLOR.CAROUSEL_ACTIVE};
  transition: color 300ms ease;

  &:hover {
    color: ${COLOR.WHITE};
  }

  &:disabled {
    color: ${COLOR.CAROUSEL_DISABLED};
  }
`;
