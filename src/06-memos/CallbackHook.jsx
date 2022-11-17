import { useCallback, useState, useEffect } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
    const [counter, setCounter] = useState(0);
    const increment = useCallback(
      (value) => {
        setCounter(counterValue => counterValue + value)
      },
      [],
    )
    

    /*const increment = () => {
        setCounter(counter + 1)
    } */

  return (
    <div className="container mx-auto my-4 p-4">
        <h1>useCallback Hook: {counter}</h1>
        <hr />
        <ShowIncrement increment={increment}/>
    </div>
  )
}
