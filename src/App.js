import logo from './logo.svg';
import './App.css';
import NotesList from './components/Noteslist';
import { useState,useEffect } from 'react';
import {nanoid} from 'nanoid'
import Search from './components/Search';
function App() {
  const [notes,setNotes] = useState([{
    id: nanoid(),
    text: "This is my first note!",
    date: "15/04/2021"
  },
  {
    id: nanoid(),
    text: "This is my second note!",
    date: "24/04/2021"
  },
  {
    id: nanoid(),
    text: "This is my third note!",
    date: "24/05/2021"
  },
])
  useEffect(() =>{
    const saveNote = JSON.parse(localStorage.getItem("react-notes-app-data"))
    if(saveNote){
      setNotes(saveNote)
    }
  },[])
  useEffect(() =>{
    localStorage.setItem("react-notes-app-data",JSON.stringify(notes))
  },[notes])
  const [searchText,setSearchText] = useState('')
  const addNote = (text) =>{
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text:text,
      date:date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteItem = (id) =>{
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }
  return (
    <div className="container">
      <Search handleSearchNote = {setSearchText}/>
      <NotesList notes = {notes.filter((note) =>note.text.toLocaleLowerCase().includes(searchText))} handleAddNote = {addNote} deleteItem = {deleteItem}/>
    </div>
  );
}

export default App;
