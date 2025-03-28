import iconSprite from '../../assets/icons/icons-sprite.svg';

type IconProps = {
  id: string;
  width?: string;
  height?: string;
};

export const Icon = ({ id, width, height }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 124 124"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconSprite}#${id}`} />
      {/* <use xlinkHref={`#${id}`} /> */}
    </svg>
  );
};
