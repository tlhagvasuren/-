import "../App.css";    

function Header() {
  return (
    <div class="hartai">
        <div class="topbar">
            <div><a href="#" onclick="menuOpen();">E</a></div>
            <div>UNREAD</div>
            <div><input type="text" placeholder="search" /></div>
            <div><input type="button" value="BUTTON" /></div>
        </div>
        <div class="new-medee">
            <div class="zuragtai">
                <img src="zurag.jpg" />
            </div>
            <div class="contenttoi">
               <h1>Би хэрхэн ажилдаг вэ? Эрксис инк компанийн аялал жуулчлалын салбарын баг</h1> 
            </div>
        </div>
    </div>
  );
}

export default Header;