import { useState } from "react";

const CreateNote = (props) => {

    const [noteInput, updateNoteInput] = useState({
        title: "",
        content: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        updateNoteInput(
            prevValue => {
                return {
                    ...prevValue,
                    [name]: value
                }
            }
        )
    }

    return <form onSubmit={null}>
        <input onChange={handleChange} value={noteInput.title} name="title" placeholder="Enter title here"></input>
        <textarea onChange={handleChange} value={noteInput.content} name="content" placeholder="Enter content here"></textarea>
        <button onClick={
            (event) => {
                props.addNote(noteInput)
                event.preventDefault()
                updateNoteInput(
                    {
                        title: "",
                        content: ""
                    }
                )
            }
        }>+</button>
    </form>
}

export default CreateNote;