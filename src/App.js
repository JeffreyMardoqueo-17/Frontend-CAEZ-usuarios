import logo from './logo.svg';
import './App.css';
import Menu from './components/MENU/Menu';
import TablaPage from './pages/TablasPage/TablaPage';
import Result from './pages/RESULT/Result';
function App() {
  return (
    <div className="App">
      <Menu />
      {/* <TablaPage /> */}
      <Result />
    </div>
  );
}

export default App;
