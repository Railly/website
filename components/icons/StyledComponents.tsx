const StyledComponents = ({
  size = 24,
}: {
  size?: number;
}) => (
  <svg viewBox="0 0 318 318" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <title>Styled Components</title>
    <text fill="#000" font-family="AppleColorEmoji, Apple Color Emoji" font-size="100"
      letter-spacing=".5" transform="translate(38 44)">
      <tspan x="70" y="100">💅</tspan>
    </text>
  </svg>
);

export default StyledComponents;

