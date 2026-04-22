import type { SimpleIcon } from "simple-icons";

type SimpleIconMarkProps = {
  icon: SimpleIcon;
  className?: string;
  size?: number;
};

export function SimpleIconMark({ icon, className = "", size = 24 }: SimpleIconMarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      width={size}
      height={size}
      className={className}
      fill={`#${icon.hex}`}
    >
      <path d={icon.path} />
    </svg>
  );
}
