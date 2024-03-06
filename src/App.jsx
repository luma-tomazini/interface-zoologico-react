import Navegacao from './components/Navegacao/Navegacao'
import Atracao from './components/Atracao/Atracao'
import './App.css'

function App() {
  let componentes = []
  for (let i = 0; i <= 2; i++) {
    componentes.push(<Atracao key={i} />)
  }

  return (
    <>
      <Navegacao></Navegacao>
      <div className="ctn-atracoes">
        {componentes}
      </div>
    </>
  )
}

export default App
