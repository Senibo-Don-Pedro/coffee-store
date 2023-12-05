import Home from "./components/Home"
import Menu from "./components/Menu"
import NavBar from "./components/NavBar"

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
      </main>
    </div>
  )
}

export default App
