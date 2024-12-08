import { type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type HeroOrbitProps = {
  size: number;
  rotation: number;
  shouldorbit?: boolean;
  shouldspin?: boolean;
  orbitduration?: string;
  spinduration?: string;
  children: ReactNode;
};

export const Heroorbit = ({
  children,
  size,
  rotation,
  shouldorbit = false,
  shouldspin = false,
  orbitduration,
  spinduration,
}: HeroOrbitProps) => {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div
        className={twMerge(shouldorbit === true && 'animate-spin')}
        style={{
          animationDuration: orbitduration,
        }}
      >
        <div
          className='flex items-start justify-start'
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div
            className={twMerge(shouldspin === true && 'animate-spin')}
            style={{ animationDuration: spinduration }}
          >
            <div
              className='inline-flex'
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
