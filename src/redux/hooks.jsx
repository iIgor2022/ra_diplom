import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
export function useCardSize(element) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateResize(el) {
      let cardWidth = 0;

      if (el) {
        cardWidth = el.clientWidth;
        setWidth(cardWidth);
      } else setWidth(1);
    }
    window.addEventListener('resize', (ev) => {
      updateResize(ev.target.document.body.querySelector('.card'));
    });
    updateResize(element);
    return () => window.removeEventListener('resize', updateResize);
  }, [element]);
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
