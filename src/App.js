import logo from './logo.svg';
import './App.css';
import Menu from './components/MENU/Menu';
import TablaPage from './pages/TablasPage/TablaPage';
import Result from './pages/RESULT/Result';
import Tabla from './components/TablaAlumno/Tabla';
import Input from './components/Input/Input';
import BuscadorPage from './pages/BuscadorPage/BuscadorPage';
function App() {
  return (
    <div className="App">
      {/* <Menu /> */}
      {/* <TablaPage /> */}
      {/* <Result /> */}
      {/* <Tabla /> */}
      {/* <Input /> */}
      <BuscadorPage />
    </div>
  );
}

export default App;
