import { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
export function useCardSize() {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateResize() {
      const cardWidth = document.querySelector('.card').clientWidth;

      setWidth(cardWidth);
    }
    window.addEventListener('resize', updateResize);
    updateResize();
    return () => window.removeEventListener('resize', updateResize);
  }, []);
  return width;
}
