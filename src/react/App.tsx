const { useState } = React;

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>React App (External)</h2>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('react-app'));
root.render(<App />);
