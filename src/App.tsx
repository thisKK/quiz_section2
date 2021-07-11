import React from "react";
import "./App.css";

function App() {
  const [value, setValue] = React.useState(0);

  function handleChange(e: any) {
    let value = e.target.value;
    return value < 0 ? setValue(1) : setValue(Math.round(e.target.value));
  }

  function isPerfectSquare(x: number) {
    let s = parseInt(Math.sqrt(x).toString());
    return s * s === x;
  }

  function isFibonacci(n: number) {
    // n is Fibinacci if one of 5*n*n + 4 or 5*n*n - 4 or both
    // is a perferct square
    return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th className="first-col">
              <div>
                <input
                  id="InputNumber"
                  type="number"
                  onChange={handleChange}
                  placeholder="Enter number"
                ></input>
                {value}
              </div>
            </th>
            <th className="middle-col ">
              <div>
                <select name="selecter" id="selecter">
                  <option selected value="isPrime">
                    isPrime
                  </option>
                  <option value="isFibanacci">isFibanacci</option>
                </select>
              </div>
            </th>
            <th className="last-col">{}</th>
          </tr>
          {console.log(isFibonacci(value))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
