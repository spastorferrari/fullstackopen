import Note from './components/Note'
import "./index.css"
import { useState } from "react"

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState(
    'a new note...'
  )
  const [showAll, setShowAll] = useState(true)
  
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important);


  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
      id: notes.length + 1,
  };

    setNotes(notes.concat(noteObject))
    setNewNote('')
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  };

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
    </div>
  )
};

export default App