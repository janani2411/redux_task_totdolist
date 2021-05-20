import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className=" header bg-info text-center">
      <nav className="navbar navbar-expand-sm bg-info">
        <ul className="navbar nav">
          <li className="nav-item">
            <Link
              className="navbar-brand text-white mx-4 font-weight-bold"
              to="/"
            >
              TODO LIST
            </Link>
          </li>
        </ul>
        <ul className="navbar nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link active text-dark" to="/addTask">
              Add Task
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/alltasks">
              All Task
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
