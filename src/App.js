import "./App.css";
import { TodoForm } from "./components/TodoForm";

function App() {
  return (
    <div className="container">
      <h1>My Notes</h1>
      <div className="app">
        <TodoForm />
      </div>
    </div>
  );
}

export default App;
