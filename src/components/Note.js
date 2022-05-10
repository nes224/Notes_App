import {FaTrash} from 'react-icons/fa'


const Note = ({id,text,date,deleteItem}) =>{

    return(
        <div className = "note">
            <span>{text} </span>
            <div className = "note-footer">
                <small>{date}</small>
                <FaTrash className = "delete-icon" size = "1.3em" onClick = {() => deleteItem(id)}/>
            </div>
        </div>
    )
}

export default Note