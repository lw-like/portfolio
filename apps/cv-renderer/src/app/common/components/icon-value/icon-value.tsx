import TechIcon from "../tech-icon/tech-icon";

export function IconValue(props: {value: string, smaller?: boolean}) {
  return (
    <div className={`flex flex-col items-center p-3`}>
      <TechIcon techName={props.value} smaller={props.smaller} />
      {!props.smaller && (<span className="text-stone-700">{props.value.split(' ').map((word, index) => <div key={index} className="text-[.8rem]">{word}</div>)}</span>)}
    </div>
  );
}

export default IconValue;
