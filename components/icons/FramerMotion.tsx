const FramerMotion = ({
  size = 24,
}: {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 256 384" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
    <title>Framer</title>
    <g>
      <path d="M0,0 L256,0 L256,128 L128,128 L0,0 Z M0,128 L128,128 L256,256 L128,256 L128,384 L0,256 L0,128 Z" fill="#000000"></path>
    </g>
  </svg>
);

export default FramerMotion;
