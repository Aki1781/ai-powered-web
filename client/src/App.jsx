import Canvas from "./canvas"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"

function App() {
  return (
    <main className="app transition-all">
      <h1 className='head-text'>ThreeJS</h1>
      <Canvas />
      <Customizer />
      <Home />
    </main>
  )
}

export default App
  