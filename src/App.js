import logo from './logo.svg';
import './App.css';
import Menu from './components/MENU/Menu';
import TablaPage from './pages/TablasPage/TablaPage';
import Result from './pages/RESULT/Result';
import Tabla from './components/TablaAlumno/Tabla';
function App() {
  return (
    <div className="App">
      <Menu />
      {/* <TablaPage /> */}
      {/* <Result /> */}
      <Tabla />
    </div>
  );
}

export default App;
