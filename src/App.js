import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://loquacious-queijadas-5abb13.netlify.app/index.html"
            target="_blank"
            rel="noreferrer"
          >
            Olha Slipushchenko
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/olhaSlipushchenko/react-example-weather.git"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
