import { Link } from 'react-router';

function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/words">Words</Link>
        </li>
        <li>
          <Link to="/study">Study</Link>
        </li>
        <li>
          <Link to="/add">Add</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
