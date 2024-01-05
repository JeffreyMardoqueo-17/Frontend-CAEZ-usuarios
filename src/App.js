import logo from './logo.svg';
import './App.css';
import Menu from './components/MENU/Menu';
import Tabla from './components/MENU/Tabla/Tabla';
import TablaMes from './components/MENU/TablaMes/TablaMes';
function App() {
  return (
    <div className="App">
      <Menu />
      <Tabla />
      <TablaMes />
    </div>
  );
}

export default App;
