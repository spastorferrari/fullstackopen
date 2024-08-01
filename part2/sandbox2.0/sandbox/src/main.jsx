import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const notes = [
  {
    id: 1,
    content: 'July 2024 - Miami & Tegucigalpa',
    important: true
  },
  {
    id: 2,
    content: 'Champions League Final, London',
    important: false
  },
  {
    id: 3,
    content: 'Madrid, Mushi Labs, helloworld.png ',
    important: true
  }
]

const result = notes.map(i => i.id)
console.log(result)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App notes={notes} />
)