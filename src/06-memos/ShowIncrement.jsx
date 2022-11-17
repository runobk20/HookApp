import { memo } from "react"

export const ShowIncrement = memo(({increment}) => {
    
    console.log('Rendering button...')

  return (
    <button
    className="btn btn-primary"
    onClick={() => increment(1)}
    >Increment</button>
  )
})
