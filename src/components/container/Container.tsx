import type { PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  children: ReactNode;
}

function Container(props: Props) {
  const { children } = props;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-start justify-center min-h-[140px] w-full max-w-xs gap-4 ">
      {children}
    </div>
  );
}

export default Container;
