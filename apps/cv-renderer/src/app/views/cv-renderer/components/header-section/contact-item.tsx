export function ContactItem(props: {value: string, iconSrc: string, hrefPrefix: string}) {
  return (
      <li className="flex space-x-2 justify-end mt-2">
        <span>{props.value}</span>
        <a className=" grayscale-[100%] " href={`${props.hrefPrefix}:${props.value}`}>
          <img className="w-5" src={props.iconSrc} alt="" />
        </a>
      </li>
  );
}

export default ContactItem;
