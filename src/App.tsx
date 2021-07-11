import "./App.css";

function App() {
  return (
    <div>
      <table>
        <tr>
          <th className="first-col">
            <input></input>
          </th>
          <th className="middle-col">
            <select name="selecter" id="selecter">
              <option value="isPrime">isPrime</option>
              <option value="isFibanacci">isFibanacci</option>
            </select>
          </th>
          <th className="last-col">True</th>
        </tr>
      </table>
    </div>
  );
}

export default App;
