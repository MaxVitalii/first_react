import Header from "./components/Header/Header.jsx";
import { CORE_CONCEPTS } from "./data.js";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    console.log(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <li>
              <button onSelect={() => handleSelect("components")}>
                Components
              </button>
              <button onSelect={() => handleSelect("jsx")}>JSX</button>
              <button onSelect={() => handleSelect("props")}>Props</button>
              <button onSelect={() => handleSelect("state")}>State</button>
            </li>
          </menu>
          Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
