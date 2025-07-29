import type { PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  children: ReactNode;
  className?: string;
}

function Container(props: Props) {
  const { children, className } = props;

  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-md flex flex-col items-start justify-center min-h-[140px] w-full gap-4 ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
