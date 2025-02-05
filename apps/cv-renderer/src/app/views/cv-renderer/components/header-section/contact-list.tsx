import { CVHeader, CVHeaderFields } from "../../../../common/model/cv-header.model";
import ContactItem from "./contact-item";

export function ContactList(props: {data: CVHeader}) {
  return (
    <ul className="pr-6">
      <ContactItem 
        value={props.data[CVHeaderFields.Phone]} 
        iconSrc="/img/phone-blue.png"
        hrefPrefix="tel"/>
      <ContactItem 
        value={props.data[CVHeaderFields.Email]} 
        iconSrc="/img/mail-blue.png"
        hrefPrefix="mailto"/>

      <li>
        <ul className="flex flex-row space-x-4 justify-end p-4 pr-0">
          {
            props.data[CVHeaderFields.Links].map((link) => {
              return (
                <li>
                  <a href={link.value} title={link.key} target="_blank" rel="noreferrer">
                    <img className="w-6" src={link.icon} alt={`${link.value} icon`} />
                  </a>
                </li>
              );
            })
          }
        </ul>
      </li>
    </ul>
  );
}

export default ContactList;
