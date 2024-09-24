export type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={
        "cursor-pointer text-base p-2 rounded-md text-white border-none transition-all duration-300 bg-blue-500 hover:bg-blue-700"
      }
    >
      {children}
    </button>
  );
}
