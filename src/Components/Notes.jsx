import Note from "./Note"

const Notes = (props) => {
    return <>
        {
            props.notes.map(
                (note, index) => {
                    return <Note key={index} id={index} title={note.title} content={note.content} removeNote={props.removeNote} />
                }
            )
        }
    </>
}

export default Notes