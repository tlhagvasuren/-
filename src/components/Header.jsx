import "../App.css";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);

  return (
    <div className="hartai">
      <div className="topbar">
        <div>
          <button className="menu-btn" onClick={() => setIsSidebarOpen(true)}>☰ Цэс</button>
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
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
    </div>
  );
}

export default Header;
