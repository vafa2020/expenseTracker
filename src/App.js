import "./App.css";
import ExpenseApp from "./component/ExpenseApp";

function App() {
  return (
    <div className="App">
      <header>
        <h2 className="title">ExpenseTrackerApp</h2>
      </header>
      <main>
        <ExpenseApp />
      </main>
    </div>
  );
}

export default App;
