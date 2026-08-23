import React from 'react';

interface UpscaleNovaLogoProps {
  className?: string;
  size?: number;
  rounded?: boolean;
}

export const UpscaleNovaLogo: React.FC<UpscaleNovaLogoProps> = ({ 
  className = "w-full h-full", 
  size = 40,
  rounded = true 
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="190 200 660 560" 
      width={size} 
      height={size}
      className={`${className} ${rounded ? 'rounded-lg' : ''} object-contain`}
      aria-label="Upscale Nova Logo"
    >
      <defs>
        {/* Navy/Midnight Gradient for U */}
        <linearGradient id="unLogoDarkGrad" x1="0%" y1="0%" x2="40%" y2="100%">
          <stop offset="0%" stopColor="#070E22" />
          <stop offset="40%" stopColor="#081432" />
          <stop offset="100%" stopColor="#050B1C" />
        </linearGradient>

        {/* 3D Ribbon Fold Dark Gradient */}
        <linearGradient id="unLogoFoldRibbon" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#0B2055" />
          <stop offset="35%" stopColor="#08163B" />
          <stop offset="70%" stopColor="#040B1E" />
          <stop offset="100%" stopColor="#01040D" />
        </linearGradient>

        {/* Vibrant Royal Blue to Violet Gradient for N */}
        <linearGradient id="unLogoNGradient" x1="15%" y1="15%" x2="85%" y2="85%">
          <stop offset="0%" stopColor="#0062FF" />
          <stop offset="30%" stopColor="#1A66FF" />
          <stop offset="58%" stopColor="#3D38F5" />
          <stop offset="82%" stopColor="#700EEB" />
          <stop offset="100%" stopColor="#8B00F7" />
        </linearGradient>
      </defs>

      <g id="un-artwork">
        {/* U Left Pillar & Outer Curve */}
        <path 
          d="M 215 264 L 318 264 L 318 565 C 318 635 365 675 422 675 C 442 675 450 655 450 625 L 450 425 C 435 398 420 382 408 382 C 400 376 385 392 375 408 C 342 458 318 515 318 580 C 318 640 265 730 215 680 Z" 
          fill="url(#unLogoDarkGrad)" 
        />
        <path 
          d="M 215 264 L 318 264 L 318 565 C 318 630 365 670 415 670 C 438 670 450 652 450 625 C 450 685 395 730 330 730 C 265 730 215 680 215 580 Z" 
          fill="url(#unLogoDarkGrad)" 
        />

        {/* U Bottom Fold Ribbon (Curved 3D Loop) */}
        <path 
          d="M 450 625 C 450 680 400 730 335 730 C 270 730 215 680 215 580 C 215 660 270 720 340 720 C 405 720 450 675 450 615 Z" 
          fill="url(#unLogoFoldRibbon)" 
        />
        <path 
          d="M 335 730 C 275 730 215 685 215 585 L 215 264 L 318 264 L 318 565 C 318 625 358 665 410 665 C 435 665 450 650 450 625 C 450 680 395 730 335 730 Z" 
          fill="url(#unLogoDarkGrad)" 
        />
        <path 
          d="M 410 665 C 435 665 450 650 450 625 C 450 685 395 730 335 730 C 385 730 450 680 450 605 Z" 
          fill="url(#unLogoFoldRibbon)" 
        />

        {/* White Contour Separation Wave */}
        <path 
          d="M 410 382 C 440 382 480 402 512 438 C 528 454 540 475 548 494 L 522 520 C 506 488 485 462 460 442 C 440 426 418 422 405 422 Z" 
          fill="#FFFFFF" 
        />

        {/* N-Shape Vibrant Gradient */}
        <path 
          d="M 410 264 L 516 264 C 525 315 548 360 580 400 L 692 535 L 692 344 L 792 344 L 792 712 C 772 712 750 695 732 672 L 515 422 C 488 390 455 382 410 382 Z" 
          fill="url(#unLogoNGradient)" 
        />
        <path 
          d="M 692 535 L 792 658 L 792 712 C 772 712 750 695 732 672 Z" 
          fill="url(#unLogoNGradient)" 
        />

        {/* Digital Pixel Cubes */}
        <rect x="764" y="222" width="30" height="30" rx="3" fill="#1D4ED8" />
        <rect x="718" y="272" width="44" height="44" rx="4" fill="#2563EB" />
        <rect x="795" y="284" width="26" height="26" rx="3" fill="#4F46E5" />
      </g>
    </svg>
  );
};
export default UpscaleNovaLogo;
