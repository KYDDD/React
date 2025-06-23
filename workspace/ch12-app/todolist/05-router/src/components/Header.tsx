import { NavLink } from "react-router";

function Header() {
  return (
    <header>
      <h1>Todo List</h1>
      <nav>
        <div>
          <ul>
            <li>
              {/* navlink - 현재 링크가 활성화 되어 있을때 isActive속성을 이용하여 현재 링크의 경로가 활성화 되어 있는지 여부를 알려줌 */}
              <NavLink className={({ isActive }) => (isActive ? "menu-dark" : "menu")} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "menu-dark" : "menu")} to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "menu-dark" : "menu")} to="/list">
                TodoList
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
