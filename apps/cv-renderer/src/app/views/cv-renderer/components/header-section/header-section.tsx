export function HeaderSection() {
  const roleStyles = {
    transform: 'translateY(6rem)',
  }

  return (
    <header className="p-8 pl-16 pr-16 flex w-full bg-stone-950 text-stone-50 shadow-xl">
      <div>
        <h1 className="w-1/5 text-6xl/tight whitespace-break-spaces">
          Test test
        </h1>
      </div>
      <div className="flex flex-1 flex-col justify-items-end text-sm text-right"> 
        <p><span>tel: </span>+00 000 000 000</p>
        <p><span>email: </span>aaaaa@aaaaa.aa</p>
        
        <span className="flex-1"></span>

        <div className="flex-1 jersey-10-regular text-right" style={roleStyles}>
          <p><span className="block">FRONTEND</span> <span className="text-stone-950 jersey-10-regular">DEVELOPER</span></p>
        </div>
      </div>
    </header>
  );
}

export default HeaderSection;
