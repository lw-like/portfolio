import { CVHeader } from "apps/cv-renderer/src/app/common/model/cv-header.model";
import { pagePaddings } from "../../../../common/consts/page-paddings";

export function HeaderSection(props: {data: CVHeader}) {
  const roleStyles = {
    transform: 'translateY(6rem)',
  }

  return (
    <header className={`${pagePaddings} flex w-full bg-stone-950 text-stone-50 shadow-xl shadow-stone-700/55`}>
      <div>
        <h1 className="w-1/5 text-6xl/tight whitespace-break-spaces">
          {props.data.name}
        </h1>
      </div>
      <div className="flex flex-1 flex-col justify-items-end text-sm text-right"> 
        <p><span>tel: </span>{props.data.phone}</p>
        <p><span>email: </span>{props.data.email}</p>
        
        <span className="flex-1"></span>

        <div className="flex-1 jersey-10-regular text-right" style={roleStyles}>
          <p><span className="block">FRONTEND</span> <span className="text-stone-950 jersey-10-regular">DEVELOPER</span></p>
        </div>
      </div>
    </header>
  );
}

export default HeaderSection;
