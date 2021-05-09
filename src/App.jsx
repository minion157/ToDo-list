import NavBar from "./components/navbar";
import TodoList from "./components/TodoList";
import { EasybaseProvider } from "easybase-react";
import ebconfig from "./ebconfig";

const App = () => {
  return (
    <div>
      <EasybaseProvider ebconfig={ebconfig}>
        <NavBar />
        <TodoList />
      </EasybaseProvider>
    </div>
  );
};

export default App;
