import AppBaner from "./components/appBaner/AppBaner";
import AppHeader from "./components/appHeader/AppHeader";
import CharInfo from "./components/charInfo/CharInfo";
import CharList from "./components/charList/CharList";
import ComicsList from "./components/comicsList/ComicsList";

function App() {
  return (
    <div className="App">
      <AppBaner/>
      <AppHeader/>
      <CharInfo/>
      <CharList/>
      <ComicsList/>
    </div>
  );
}

export default App;
