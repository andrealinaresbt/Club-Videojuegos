import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { UserContextProvider } from "../../contexts/UserContext";

export default function Layout() {
  return (
    <main>
      <UserContextProvider>
        
        <Navbar/>
        <section className="body">
            <Outlet />
            body
        </section>
        <footer>
          <Footer />
        </footer>
        
      </UserContextProvider>

    </main>
  )
}
