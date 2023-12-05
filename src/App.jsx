import About from "./components/About"
import Home from "./components/Home"
import Menu from "./components/Menu"
import NavBar from "./components/NavBar"
import Products from "./components/Products"

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

        <div>
          <Products />
        </div>
      </main>
    </div>
  )
}

export default App
