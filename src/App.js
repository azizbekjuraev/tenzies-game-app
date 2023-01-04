import React from "react";
import Die from "./components/Die";
function App() {
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.floor(Math.random() * 6) + 1);
    }
    return newDice;
  }
  const [dice, setDice] = React.useState(allNewDice());
  console.log(allNewDice());

  const diceM = dice.map((item) => {
    return <Die value={item} />; //nomerni olish uchun value ishlatamiza!!
  });

  return (
    <main className="main">
      <div className="dice-container">{diceM}</div>
    </main>
  );
}

export default App;
