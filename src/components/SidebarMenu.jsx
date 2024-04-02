import React from "react"; // Asegúrate de importar el CSS

const SidebarMenu = ({ isVisible }) => {
  return (
    <aside className={`sidebarMenu ${isVisible ? "expanded" : "collapsed"}`}>
      <nav className="nav__menu">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#pavlova">
              <i
                className="bi bi-cake-fill"
                style={{ fontSize: "12px", padding: "3px 5px" }}
              ></i>
              La Pavlova
            </a>
          </li>
          <li className="nav__item">
            <a href="#concept">
              <i
                class="bi bi-journal-text"
                style={{ fontSize: "12px", padding: "3px 5px" }}
              ></i>
              Our concept
            </a>
          </li>
          <li className="nav__item">
            <a href="#products">
              <i
                class="bi bi-basket"
                style={{ fontSize: "12px", padding: "3px 5px" }}
              ></i>
              Products
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact">
              <i
                class="bi bi-person-lines-fill"
                style={{ fontSize: "12px", padding: "3px 5px" }}
              ></i>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarMenu;
