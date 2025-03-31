type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
};

export default function Button({ children, variant = 'primary', onClick }: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition';
  const primaryStyles = 'bg-green-600 hover:bg-green-700 text-white shadow-md';
  const secondaryStyles = 'border border-gray-300 hover:border-gray-400 text-gray-700';

  const styles = variant === 'primary' ? primaryStyles : secondaryStyles;

  return (
    <button className={`${baseStyles} ${styles}`} onClick={onClick}>
      {children}
    </button>
  );
}