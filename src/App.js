import React from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
function App() {
  function generateNewDie() {
    return {
      value: Math.floor(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  const [dice, setDice] = React.useState(allNewDice());

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld ? die : generateNewDie();
      })
    );
  }

  const diceM = dice.map((item) => {
    return (
      <Die
        value={item.value}
        isHeld={item.isHeld}
        key={item.id}
        holdDice={() => holdDice(item.id)}
      />
    ); //nomerni olish uchun ishlatamiza!!
  });

  const [tenzies, setTenzies] = React.useState(false);

  // React.useEffect(() => {
  //   const allHeld = dice.every((die) => die.isHeld);
  //   const firstValue = dice[0].value;
  //   const allSameValue = dice.every((die) => die.value === firstValue);

  //   if (allHeld && allSameValue) {
  //     setTenzies(true);
  //     console.log(`You won the game!`);
  //   }
  // }, [dice]);

  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
      // console.log(`You won!`);
    }
  });

  return (
    <main className="main">
      <h1 className="title">{tenzies ? `You won!` : `Tenzies`}</h1>
      <p className="instructions">
        {tenzies
          ? `🤩🥳🤩`
          : `  Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.`}
      </p>
      <div className="dice-container">{diceM}</div>
      <button onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
      {tenzies && <Confetti />}
    </main>
  );
}

export default App;
