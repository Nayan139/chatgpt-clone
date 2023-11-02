export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  type: string;
  disabled?: boolean;
}
