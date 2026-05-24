
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import {
  normalTest1,
  normalTest2,
  normalTest3,
  edgeTest1,
  edgeTest2,
  edgeTest3,
} from "./testCases";
function App() {
  const { theme, styles } = useContext(ThemeContext);
  const renderTest = (test) => {
    return (
      <p className={test.pass ? "pass" : "fail"}>
        {test.pass ? "✔ PASS" : "❌ FAIL"} - {test.name}
      </p>
    );
  };

  return (
    <div
      className={theme === "dark" ? "dark-mode" : "light-mode"}
      style={styles}
    >
      <div className="container">
        <h1>Global Theme Switcher</h1>

        <p>
          This application demonstrates React Context API using a global
          light and dark theme switcher.
        </p>

        <ThemeSwitcher />
        <div className="test-section">
  <h2>Test Cases</h2>

  <h3>Normal Test Cases</h3>
  {renderTest(normalTest1())}
  {renderTest(normalTest2())}
  {renderTest(normalTest3())}

  <h3>Edge Test Cases</h3>
  {renderTest(edgeTest1())}
  {renderTest(edgeTest2())}
  {renderTest(edgeTest3())}
</div>
  
      </div>
    </div>
  );
}

export default App;
