type IconProps = {
  id: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const Icon = ({ id, width, height, viewBox }: IconProps) => {
  return (
    <svg
      width={width || '50'}
      height={height || '50'}
      viewBox={viewBox || '0 0 124 124'}
      fill="none"
    >
      <use xlinkHref={`#${id}`} />
    </svg>
  );
};

// import iconSprite from '../../assets/icons/icons-sprite.svg';

// type IconProps = {
//   id: string;
// };

// export const Icon = (props: IconProps) => {
//   return (
//     <svg
//       width="50"
//       height="50"
//       viewBox="0 0 124 124"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <use xlinkHref={`${iconSprite}#${props.id}`} />
//     </svg>
//   );
// };
