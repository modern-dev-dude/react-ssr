import { LinkImageProps } from './LinkImage';
import reactLogo from '../assets/react.svg';

export const linkImgs: LinkImageProps[] = [
  {
    id: 1,
    altTxt: 'Vite logo',
    className: 'logo',
    href: 'https://vitejs.dev',
    imgSrc: '/vite.svg',
  },
  {
    id: 2,
    altTxt: 'React logo',
    className: 'logo react',
    href: 'https://reactjs.org',
    imgSrc: reactLogo,
  },
];
