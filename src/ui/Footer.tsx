import { NavLink, type NavLinkRenderProps } from 'react-router';
import { AcademicCapIcon, FolderPlusIcon, PencilSquareIcon } from '@heroicons/react/24/solid';

const linkStyle = ({ isActive }: NavLinkRenderProps) =>
  `flex w-full items-center justify-center space-x-2 rounded-2xl px-2 py-2 ${isActive ? 'bg-amber-500' : ''}`;

function Footer() {
  return (
    <footer className="flex justify-center px-3 py-10">
      <ul className="flex w-full max-w-md rounded-2xl bg-amber-950 px-1 py-1">
        <li className="flex-1">
          <NavLink to="/words" className={linkStyle}>
            <PencilSquareIcon className="size-6 text-blue-500" /> <span>Words</span>
          </NavLink>
        </li>
        <li className="flex-1">
          <NavLink to="/study" className={linkStyle}>
            <AcademicCapIcon className="size-6 text-blue-500" />
            <span>Study</span>
          </NavLink>
        </li>
        <li className="flex-1">
          <NavLink to="/add" className={linkStyle}>
            <FolderPlusIcon className="size-6 text-blue-500" />
            <span>Add</span>
          </NavLink>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
