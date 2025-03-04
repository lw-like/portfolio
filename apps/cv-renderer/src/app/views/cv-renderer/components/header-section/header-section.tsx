import { CVHeader, CVHeaderFields } from "../../../../common/model/cv-header.model";
import { pagePaddings } from "../../../../common/consts/page-paddings";
import ProfileImage from "./profile-image";
import ContactList from "./contact-list";

export function HeaderSection(props: {data: CVHeader}) {
  const roleStyles = {
    transform: 'translateY(5.5rem)',
  }

  return (
    <header className={`${pagePaddings} flex w-full bg-stone-950 text-stone-50 shadow-xl shadow-stone-700/55`}>
      <div>
        <h1 className="w-1/5 text-6xl/tight whitespace-break-spaces">
          {props.data[CVHeaderFields.Name]}
        </h1>
      </div>
      <div className="relative flex flex-1 flex-col justify-items-end text-sm text-right"> 
        <div className="flex flex-row justify-end items-center pb-16">
          <ContactList data={props.data} /> 
          <ProfileImage />
        </div>

        <div className="absolute bottom-0 right-0 flex-1 jersey-10-regular text-right" style={roleStyles}>
          <p><span className="block">FULLSTACK</span> <span className="text-stone-950 jersey-10-regular">DEVELOPER</span></p>
        </div>
      </div>
    </header>
  );
}

export default HeaderSection;
