import React from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [inputNumber, setInputNumber] = React.useState(0);
  const [option, setOption] = React.useState("isPrime");

  function isPerfectSquare(x: number) {
    let s = parseInt(Math.sqrt(x).toString());
    return s * s === x;
  }

  function isFibonacci(n: number) {
    // n is Fibinacci if one of 5*n*n + 4 or 5*n*n - 4 or both
    // is a perferct square
    return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
  }

  function isPrime(n: number) {
    var sqrtnum = Math.floor(Math.sqrt(n));
    var prime = n !== 1;
    for (var i = 2; i < sqrtnum + 1; i++) {
      // sqrtnum+1
      if (n % i === 0) {
        prime = false;
        break;
      }
    }
    return prime;
  }
  useEffect(() => {}, [inputNumber]);

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
                  onChange={(e) => {
                    let value = e.target.value;
                    setInputNumber(
                      Number(value) < 0 ? 1 : Number(Math.round(Number(value)))
                    );
                  }}
                  placeholder="Enter number"
                ></input>
              </div>
            </th>
            <th className="middle-col ">
              <div>
                <select
                  name="selecter"
                  id="selecter"
                  onChange={(e) => setOption(e.target.value)}
                  value={option}
                >
                  <option value="isPrime">isPrime</option>
                  <option value="isFibanacci">isFibanacci</option>
                </select>
              </div>
            </th>
            <th className="last-col">
              {option === "isPrime" ? (
                <div>{isPrime(inputNumber).toString()}</div>
              ) : (
                <div>{isFibonacci(inputNumber).toString()}</div>
              )}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
