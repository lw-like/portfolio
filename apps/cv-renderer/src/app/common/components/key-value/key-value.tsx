import { KeyValue } from "../../model/cv-common.model";

export function KeyValueCmp(props: {data: KeyValue}) {
  return (
    <div>
      <div className="text-stone-500">{props.data.key}</div>
      <div>{props.data.value}</div>
    </div>
  );
}

export default KeyValueCmp;
