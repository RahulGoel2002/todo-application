import Header from "./Components/Header"
import Footer from "./Components/Footer"
import CreateNote from "./Components/CreateNote"
import Notes from "./Components/Notes"
import { useState } from "react"

const App = () => {

    const [notes, updateNotes] = useState([])

    const addNote = (note) => {
        updateNotes(
            prev => {
                return [
                    ...prev,
                    note
                ]
            }
        )
    }

    const removeNote = (id) => {
        
        updateNotes(
            prevNotes => {
                return prevNotes.filter((noteItem, index) => {
                  return index !== id;
                });
              })

    }

    return <div>
        <Header />
        <CreateNote addNote={addNote} />
        <Notes notes={notes} removeNote={removeNote}/>
        <Footer />
    </div>
}

export default App