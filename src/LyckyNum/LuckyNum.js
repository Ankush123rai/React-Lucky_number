import React, { useState } from "react";
import style from "./LuckyNum.module.css";

let randNum = Math.floor(Math.random() * 10) + 1;

const LuckyNum = () => {
  const [userGuess, setUserGuess] = useState();
  const [count, setCount] = useState(0);
  const [userGuessAllVAlue, setUserGuessAllVAlue] = useState([]);
  const [randomNumber, setRandomNumber] = useState(randNum);
  const [disable, setDisable] = useState("");
  const [msg, setMsg] = useState(false);

  const handleValueChange = (e) => {
    setUserGuess(e.target.value);
  };
  const handleSubmit = () => {
    if (Number(randomNumber) === Number(userGuess)) {
      setMsg("congratulation !!");
      setDisable(true);
    } else if (count === 4) {
      setMsg("Game Over");
      setDisable(true);
    } else {
      setMsg("Wrong guess");

      if (randNum < userGuess) {
        alert("select value is Hight");
      }
      if (randNum > userGuess) {
        alert("select value is Low");
      }
    }
    setCount(count + 1);
    setUserGuessAllVAlue([...userGuessAllVAlue, userGuess]);
  };
  function handleReStart() {
    setDisable(false);
    setCount("");
    setMsg("");
    setUserGuessAllVAlue([]);
    setRandomNumber(Math.floor(Math.random() * 10) + 1);
  }

  return (
    <div className={style.container}>
      <h1>Number guessing game</h1>
      {randomNumber}
      <div className={style.input}>
        <input
          disabled={disable}
          type="Number"
          onChange={handleValueChange}
          value={userGuess}
        />
      </div>
      <button disabled={disable} onClick={handleSubmit}>
        Submit
      </button>
      {disable && <button onClick={handleReStart}>Start Again</button>}

      <div className={style.info}>
        <h3>messsage-{msg}</h3>
        <p>Total attempted - {count}</p>
        <p>
          Your guess:
          {userGuessAllVAlue.map((item, index) => {
            return (
              <span key={index}>
                <span>{userGuess} {}</span>
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default LuckyNum;
