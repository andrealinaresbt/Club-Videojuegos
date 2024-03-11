import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import {UserContextProvider} from "../../contexts/UserContext";
import { FavoritesContext } from "../../contexts/FavoritesContext";

export default function Layout() {
  return (
    <main>
     

      <UserContextProvider>
        
        <Navbar/>
        <section className="body">
            <Outlet />
            
        </section>
        <footer>
          <Footer />
        </footer>
        
      </UserContextProvider>

    </main>
  );
}
