import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";

export default function HomePage() {
  return (
    <main>
        
        <Navbar/>
        <section className="body">
            <Outlet />
            body
        </section>
        <footer>
          <Footer />
        </footer>
        

    </main>
  )
}

