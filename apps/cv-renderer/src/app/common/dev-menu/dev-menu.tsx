import { Link } from "react-router-dom";

export function DevMenu() {
  return (
      <nav className="fixed block left-0 right-0 bottom-0 justify-center bg-stone-600 opacity-50" role="navigation">
        <ul className="flex space-x-4">
          <li className="p-2">
            [DEV MENU]
          </li>
          <li>
            <Link to="/" className="block p-2">Form</Link>
          </li>
          <li>
            <Link to="/renderer" className="block p-2">Renderer</Link>
          </li>
        </ul>
      </nav>
  );
}

export default DevMenu;
