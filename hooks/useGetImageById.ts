import { useState } from 'react';
import { useLazyGetImageByIdQuery } from '@/redux/shared/sharedApi';
import { saveSnackbarError } from '@/redux/app/appSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { customErrorHandler } from '@/helpers';

export const useGetImageById = () => {
  const dispatch = useAppDispatch();
  const [getImage, { isFetching: isImageLoading }] = useLazyGetImageByIdQuery();
  const [imageDataBase64, setImageDataBase64] = useState<string | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);

  const handleGetImageById = async (imageId: number) => {
    try {
      const image = await getImage(imageId).unwrap();
      setImageDataBase64(image.imageBase64);
    } catch (error) {
      setImageError(customErrorHandler(error));
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return { handleGetImageById, imageDataBase64, isImageLoading, imageError };
};
