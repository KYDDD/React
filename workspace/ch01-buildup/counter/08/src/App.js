import Counter from "./components/Counter.js";
import Header from "./components/Header.js";
import Reaction from "./reaction.js";
 // App 컴포넌트(어플리케이션의 시작점)
function App() {
  return Reaction.createElement("div", { id: "app" }, Header, Counter);
}

export default App;