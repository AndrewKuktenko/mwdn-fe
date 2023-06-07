import { createSelector } from 'reselect';

const baseImageSelector = (state: any) => state?.image;

export const imagesSelector = createSelector(
  baseImageSelector,
  (image) => image?.data || []
);
