import ReactDOM from 'react-dom/client'

import App from './App'

const notes = [
  {
    id: 1,
    content: 'K.West',
    important: true
  },
  {
    id: 2,
    content: 'JPEGMAFIA',
    important: false
  },
  {
    id: 3,
    content: 'K.Cudi',
    important: true
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App notes={notes} />
)