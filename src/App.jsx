import About from "./components/About"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Menu from "./components/Menu"
import NavBar from "./components/NavBar"
import Review from "./components/Review"

const App = () => {
  return (
    <div className="">
      <NavBar />

      <main>
        <div id="Home">
          <Home />
        </div>

        <div id="Menu">
          <Menu />
        </div>

        <div id="About Us">
          <About />
        </div>

        <div id="Reviews">
          <Review />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
