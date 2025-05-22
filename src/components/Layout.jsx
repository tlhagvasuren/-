import Cards from "./Cards";
import Header from "./Header";
import News from "./News";

function Layout() {
    return(
        <>
            <Header />
            <Cards />
            <News />            
        </>
    )
}

export default Layout;

function menuOpen(){
    document.getElementById('neesenmenu').style.display = 'block'; }
function menuClose(){
    document.getElementById('neesenmenu').style.display = 'none'; }