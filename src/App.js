import AppBaner from "./components/appBaner/AppBaner";
import AppHeader from "./components/appHeader/AppHeader";
import CharInfo from "./components/charInfo/CharInfo";
import CharList from "./components/charList/CharList";

function App() {
  return (
    <div className="App">
      <AppBaner/>
      <AppHeader/>
      <CharInfo/>
      <CharList/>
    </div>
  );
}

export default App;
