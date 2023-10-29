import { useEffect, useLayoutEffect, useState } from 'react';
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
export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value]);

  return debouncedValue;
}
