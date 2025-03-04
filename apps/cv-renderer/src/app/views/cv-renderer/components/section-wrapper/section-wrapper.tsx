import { ReactNode } from "react";

interface SectionWrapperProps {
  title: string,
  classNames: string,
  children: ReactNode,
}

export function SectionWrapper(props: SectionWrapperProps) {
  const classNames = () => {
    return `pb-3 drop-shadow-xs text-[1.8rem] ${props.classNames || ''}`;
  }

  return (
    <div className="relative overflow-hidden flex-1 bg-stone-200 rounded-md p-4 m-4 shadow-sm shadow-stone-700/55">
      <h2 className={classNames()}>{props.title}</h2>
      {props.children}
    </div>
  );
}

export default SectionWrapper;
