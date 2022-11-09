import React from 'react'
import ReactDOM from 'react-dom/client'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'

//import { CounterApp } from './01-useState/CounterApp'
//import { HooksApp } from './HooksApp'
//import {CounterCustomHook} from './01-useState/CounterWithCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import {CustomHookForm} from './02-useEffect/CustomHookForm';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MultipleCustomHooks/>
  </React.StrictMode>
)
