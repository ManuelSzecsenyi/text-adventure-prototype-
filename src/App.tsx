import { useState } from 'react';
import './App.css';

function App() {

  const [gameState, setGameState] = useState({
    money: 0,
    lifepoints: 0
  });

  let decisions = [
    {
      question: "This is a question",
      answers: [
        {
          id: 1,
          text: "Money +1",
          money: 1
        },
        {
          id: 2,
          text: "Money -1",
          money: -1
        }
      ]
    }
  ]

  let activeDecision = decisions[0];

  function handleAnswer(money: number) {

    setGameState(state => ({
      ...state,
      money: state.money + money,
    }))

    console.log(gameState.money);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Make a decision
      </h1>

      <div className='mt-5'>
          <div className='text-2xl'>{activeDecision.question}</div>
          <div className='flex'>
            {activeDecision.answers.map((answer) => {
              return(
                <div onClick={() => handleAnswer(answer.money)} className='p-4 bg-sky-100 m-1' key={answer.id}>{answer.text}</div>
              )
            })}
            
          </div>
      </div>

      <div className='flex mt-10'>
        <div>Money: {gameState.money}</div>
        <div className='ml-4'>Lifepoints: {gameState.lifepoints}</div>
      </div>
     
    </div>

  );
}

export default App;
