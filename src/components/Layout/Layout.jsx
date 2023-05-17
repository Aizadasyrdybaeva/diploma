import CartLink from "../CartLink/CartLink";
import CategoryList from "../CategoryList/CategoryList";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./Layout.css";
import Auth from "..//Auth/Auth";
import Footer from "../Footer/Footer";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Logo />
        <Nav />
        <div className="header-bot">
          <CartLink />
          <Auth />
        </div>
      </header>
    
      <aside>
        <CategoryList />
      </aside>
      <main>{props.children}</main>
    
   
      
       <Footer />
    </div>
  );
}
