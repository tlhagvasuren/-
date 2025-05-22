import "../App.css";
import { useState } from "react";
import Sidebar from "./Sidebar";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="hartai">
      <div className="topbar">
        <div>
          <button onClick={() => setMenuOpen(true)}>≡</button>
        </div>
        <div>UNREAD</div>
        <div><input type="text" placeholder="search" /></div>
        <div><input type="button" value="BUTTON" /></div>
      </div>

      <div className="new-medee">
        <div className="zuragtai">
          <img src="zurag.jpg" alt="main-news" />
        </div>
        <div className="contenttoi">
          <h1>Би хэрхэн ажилдаг вэ? Эрксис инк компанийн аялал жуулчлалын салбарын баг</h1>
        </div>
      </div>

      {menuOpen && <Sidebar onClose={() => setMenuOpen(false)} />}
    </div>
  );
}

useEffect(() => {
  document.body.style.overflow = menuOpen ? "hidden" : "auto";
}, [menuOpen]);


export default Header;
