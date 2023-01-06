import React from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";

function App() {
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.floor(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }

  const [dice, setDice] = React.useState(allNewDice());

  function rollDice() {
    setDice(allNewDice());
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
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
  return (
    <main className="main">
      <div className="dice-container">{diceM}</div>
      <button onClick={rollDice}>Roll</button>
    </main>
  );
}

export default App;
