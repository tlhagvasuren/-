const Style = {
    backgroundColor: 'grey',
    width: '100%',
}

const headerStyle = {
    display: 'flex',

}

const headerStyle2 = {
    display: 'flex',
}

const icon = {
    color: '#000',
}

const imgStyle = {
    width: '300px',
    height: '300px',
}

function Header() {
  return (
    <header style={Style}>
        <div style={headerStyle}>
            <p>E</p>
            <img src="logo.png" alt="logo" />
            <p>|</p>
            <input type="text" placeholder="Хайлт хийх" />
            <p>Дараагийн нийтлэл: #RANDOM</p>
            <button>Маргааш орно</button>
            <a href="#">
                <i style={icon} className="fab fa-facebook"></i>
            </a>
            <a href="#">
                <i style={icon} className="fab fa-instagram"></i>
            </a>
            <a href="#">
                <i style={icon} className="fab fa-twitter"></i>
            </a>
        </div>
        <div style={headerStyle2}>
            <img style={imgStyle} src="zurag.jpg" alt="zurg" />
            <h1>medee medeelliin delgerengui eh survalj: survalj</h1>
        </div>
    </header>
  );
}

export default Header;