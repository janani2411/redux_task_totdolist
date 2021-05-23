import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import "../index.css";

const StyledLink = styled(Link)`
  border-radius: 20px;
  &:hover {
    background-color: white;
    border-radius: 20px;
    box-shadow: 3px 3px 20px white;
  }
`;

const Header = () => {
  const history = useHistory();
  return (
    <div className=" header bg-info text-center">
      <nav className="navbar navbar-expand-sm bg-info">
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
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
          <ul className="navbar nav mr-auto px-3">
            <li className="nav-item">
              <StyledLink className="nav-link active text-dark" to="/addTask">
                Add Task
              </StyledLink>
            </li>
            <li className="nav-item mr-5 px-3">
              <StyledLink className="nav-link text-dark" to="/alltasks">
                All Task
              </StyledLink>
            </li>
          </ul>
          <form
            className="form-inline"
            style={{ position: "absolute", right: 25 }}
          >
            <div className="form-group">
              <button
                className="btn btn-danger"
                type="submit"
                onClick={() => {
                  localStorage.clear();
                  history.push(`/signin`);
                }}
              >
                Log out
              </button>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
