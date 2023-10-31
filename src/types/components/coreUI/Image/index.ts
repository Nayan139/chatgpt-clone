export interface ImageProps {
  src: string | undefined;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
  onClick?: () => void;
}
