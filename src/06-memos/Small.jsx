import { memo } from "react"


export const Small = memo(({value}) => {
  console.log('running')
  return (
    <small>{value}</small>
  )
})
