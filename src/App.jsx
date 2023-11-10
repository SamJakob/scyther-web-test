import Scyther from "./scyther";

function App() {
  window.Scyther = Scyther;
  Scyther.initialize(['--help']);

  return (
    <>
      <p>Open the JavaScript console (F12)</p>
      <p>You can run a Scyther instance (e.g., to display help) as follows:</p>
      <pre>
        await Scyther.initialize(["--help"]);
      </pre>
    </>
  )
}

export default App
