import styled from 'styled-components';
import { COLOR } from 'enums/styles';

export const Container = styled.div`
  overflow: hidden;
  display: flex;
  height: auto;
  max-height: 250px;
  width: 300px;
  justify-content: flex-end;
  flex-direction: column;
  border: 1px solid ${COLOR.GALLERY_ITEM_BORDER};
  border-radius: 4px;
`;

export const Image = styled.img`
  width: auto;
  max-height: inherit;
  background-size: cover;
  overflow: hidden;
`;

export const Text = styled.span`
  height: auto;
  padding: 10px 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: auto;
`;
