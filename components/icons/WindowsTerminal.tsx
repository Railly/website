const WindowsTerminal = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect
      x="4"
      y="7"
      width="24"
      height="18.8095"
      rx="2"
      fill="url(#paint0_linear)"
    />
    <path
      d="M4 9C4 7.89543 4.89543 7 6 7H26C27.1046 7 28 7.89543 28 9V9C28 10.1046 27.1046 11 26 11H4V9Z"
      fill="#CCCCCC"
    />
    <path d="M20 7H26C27.1046 7 28 7.89543 28 9V11H20V7Z" fill="#666666" />
    <rect x="12" y="7" width="8" height="4" fill="#9B9B9B" />
    <rect
      x="15.2"
      y="21.0476"
      width="8"
      height="2.38095"
      rx="1.19048"
      fill="url(#paint1_linear)"
    />
    <rect
      width="7.60753"
      height="2.59785"
      rx="1.29893"
      transform="matrix(-0.690454 0.723376 0.694604 0.719392 11.9955 16.0476)"
      fill="#ADADAD"
    />
    <rect
      width="7.60753"
      height="2.59785"
      rx="1.29893"
      transform="matrix(0.690454 0.723376 -0.694604 0.719392 8.51703 12.4695)"
      fill="url(#paint2_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="19.3143"
        y1="34.0238"
        x2="4.4502"
        y2="6.3035"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#313131" />
        <stop offset="1" stopColor="#4C4C4C" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="13.7143"
        y1="22.2381"
        x2="24.9143"
        y2="22.2381"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E3E3E3" />
        <stop offset="1" stopColor="#D1D1D1" />
      </linearGradient>
      <linearGradient
        id="paint2_linear"
        x1="9.78532"
        y1="1.25735"
        x2="-2.84084"
        y2="1.21116"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.034183" stopColor="#CCCCCC" />
        <stop offset="1" stopColor="#F0F0F0" />
      </linearGradient>
      <linearGradient
        id="paint3_linear"
        x1="0"
        y1="0"
        x2="0"
        y2="32"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BBBBBB" stopOpacity="0.1" />
        <stop offset="1" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);

export default WindowsTerminal;
