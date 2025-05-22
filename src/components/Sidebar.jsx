import '../App.css';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>×</button>
      <div className="sidebar-content">
        <div className="column">
          <h3 className="title">БУЛАНГУУД</h3>
          <ul className="menu">
            <li>Онцлох бизнес <span>Даваа</span></li>
            <li>Techworm <span>Мягмар</span></li>
            <li>Би хэрхэн ажилладаг вэ? <span>Лхагва</span></li>
            <li>Мэдүүштэй <span>Пүрэв</span></li>
            <li>Чөлөөт <span>Баасан</span></li>
            <li>Номын тухай <span>Бямба</span></li>
            <li>7 хоногийн тойм <span>Ням</span></li>
          </ul>
          <div className="link">КОНТЕНТ НИЙТЛҮҮЛЭХ</div>
        </div>
        <div className="column">
          <h3 className="title">ШИНЭ</h3>
          <ul className="menu">
            <li>Өртөөлөгчид</li>
            <li>Тогтвортой хөгжил</li>
            <li>Тайлбарлах нь</li>
            <li>10 ертөнц, 10 өнгө</li>
            <li>Таатай оффис</li>
            <li>Зочинтой булан</li>
            <li>8 минутын улс төр</li>
            <li>Сонин</li>
          </ul>
          <div className="link">ЭВЕНТ ДЭЭР ХАМТРАН АЖИЛЛАХ</div>
        </div>
      </div>
      <div className="footer">
        <p>Редакцын бодлого • Блог • Ажлын байр • Холбогдох</p>
        <p>© 2015-2025 Анрид Медиа ХХК</p>
      </div>
    </div>
  );
};

export default Sidebar;