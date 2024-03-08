import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";

export function Layout() {
  return (
    <main>
        
        <Navbar/>
        <section className="body">
            <Outlet />
        </section>
        <footer>
          <Footer />
        </footer>
        

    </main>
  )
}
