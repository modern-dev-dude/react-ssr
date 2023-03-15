export type LinkImageProps = {
  id: number;
  href: string;
  imgSrc: string;
  className: string;
  altTxt: string;
};

export const LinkImage = ({ href, imgSrc, className, altTxt }: LinkImageProps) => (
  <a href={href} target="_blank">
    <img src={imgSrc} className={className} alt="Vite logo" />
  </a>
);
