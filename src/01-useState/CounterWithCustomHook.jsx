import { useCounter } from "../hooks/useCounter";


export const CounterCustomHook = () => {

    //const setCounter = useCounter(0);
    const {counter, increment, decrement, reset} = useCounter(0);


    return (
      <div className="p-4 m-2">
          <h1> CounterHook: {counter} </h1>
          <hr />
  
          <button onClick={() => increment(5)} className="btn btn-primary mx-2">+1</button>
          <button onClick={reset} className="btn btn-primary mx-2">Reset</button>
          <button onClick={() => decrement(5)} className="btn btn-primary mx-2">-1</button>
      </div>

/*   return (
    <div className="p-4 m-2">
        <h1> CounterHook: {setCounter.counter} </h1>
        <hr />

        <button onClick={setCounter.increment} className="btn btn-primary mx-2">+1</button>
        <button onClick={setCounter.reset} className="btn btn-primary mx-2">Reset</button>
        <button onClick={setCounter.decrement} className="btn btn-primary mx-2">-1</button>
    </div> */
  )
}
