import "../App.css";

function Sidebar({ onClose }) {
  return (
    <div className="neesenmenu">
      <div className="haadagaa">
        <button onClick={onClose}>X</button>
      </div>
      <div className="menutei">
        <div className="left">
          <a href="#">Нүүр</a>
          <a href="#">Тойм</a>
          <a href="#">Tech</a>
          <a href="#">Бизнес</a>
          <a href="#">LifeStyle</a>
        </div>
        <div className="right">
          <a href="#">Подкаст</a>
          <a href="#">Видео</a>
          <a href="#">Тусгай дугаар</a>
          <a href="#">Хамтран ажиллах</a>
          <a href="#">Бидний тухай</a>
        </div>
      </div>
      <div className="copyrighttai">
        Unread Today &copy; 2025. All rights reserved.
      </div>
    </div>
  );
}

export default Sidebar;
