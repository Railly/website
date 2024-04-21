const Zoom = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 256 256"
    version="1.1"
    preserveAspectRatio="xMidYMid"
  >
    <title>Zoom</title>
    <defs>
      <linearGradient
        x1="23.666%"
        y1="95.6118%"
        x2="76.334%"
        y2="4.3882%"
        id="zoomLinearGradient-1"
      >
        <stop stopColor="#0845BF" offset="5.791949e-05%"></stop>
        <stop stopColor="#0950DE" offset="19.11%"></stop>
        <stop stopColor="#0B59F6" offset="38.23%"></stop>
        <stop stopColor="#0B5CFF" offset="50%"></stop>
        <stop stopColor="#0E5EFE" offset="67.32%"></stop>
        <stop stopColor="#1665FC" offset="77.74%"></stop>
        <stop stopColor="#246FF9" offset="86.33%"></stop>
        <stop stopColor="#387FF4" offset="93.88%"></stop>
        <stop stopColor="#4F90EE" offset="100%"></stop>
      </linearGradient>
    </defs>
    <g>
      <path
        d="M256,128 C256,141.568 254.976,155.136 252.672,168.192 C245.76,211.456 211.456,245.76 168.192,252.672 C155.136,254.976 141.568,256 128,256 C114.432,256 100.864,254.976 87.808,252.672 C44.544,245.76 10.24,211.456 3.328,168.192 C1.024,155.136 0,141.568 0,128 C0,114.432 1.024,100.864 3.328,87.808 C10.24,44.544 44.544,10.24 87.808,3.328 C100.864,1.024 114.432,0 128,0 C141.568,0 155.136,1.024 168.192,3.328 C211.456,10.24 245.76,44.544 252.672,87.808 C254.976,100.864 256,114.432 256,128 Z"
        fill="url(#zoomLinearGradient-1)"
      ></path>
      <path
        d="M204.032,207.872 L75.008,207.872 C66.56,207.872 58.368,203.264 54.528,195.84 C49.92,187.136 51.712,176.64 58.624,169.728 L148.48,79.872 L83.968,79.872 C66.304,79.872 51.968,65.536 51.968,47.872 L170.752,47.872 C179.2,47.872 187.392,52.48 191.232,59.904 C195.84,68.608 194.048,79.104 187.136,86.016 L97.536,176.128 L172.032,176.128 C189.696,176.128 204.032,190.208 204.032,207.872 Z"
        fill="#FFFFFF"
      ></path>
    </g>
  </svg>
);

export default Zoom;
