import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { faTrash, faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteNote, updateNote } from '../Redux/NotesSlice';


function Individualnote({ query }) {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notesReducer.notes);
  const [edit, setEdit] = useState(false);
  const [newnote, setNewnote] = useState('');

  function handlesubmit(e, note) {
    e.preventDefault();
    if (newnote.length === 0) {
      alert('Please enter some text');
    }
    else {
      const sendThis = {
        id: note.id,
        Title: newnote,
        Date: note.Date
      }
      dispatch(updateNote(sendThis));
      setNewnote('');
      setEdit(false);
    }
  }
  function handleCancel() {
    setEdit(false);
  }
  function handleEdit(e, note) {
    if (edit !== false) {
      alert('Please edit the previous note first');
    }
    else {
      setNewnote(note.Title);
      setEdit(note.id);
    }
  }
  if (query.length === 0) {
    return (
      notes.map((note) => {
        if (edit == false || edit != note.id) {
          return (
            <div className="notebox" key={note.id}>
              <textarea defaultValue={note.Title} readOnly className={note.id}></textarea>
              <div className="note-footer">
                <span>{note.Date}</span>
                <div className='btn' onClick={(e) => handleEdit(e, note)}><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon></div>
                <div className='btn' onClick={() => dispatch(deleteNote(note))}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></div>
              </div>
            </div>
          )
        }
        else {
          return (
            <div className="notebox" key={note.id}>
              <textarea value={newnote} className={note.id} onChange={(e) => setNewnote(e.target.value)}></textarea>
              <div className="note-footer">
                <span>{note.Date}</span>
                <div className='btn' onClick={(e) => handlesubmit(e, note)}>Save</div>
                <div className='cancel' onClick={handleCancel}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></div>
              </div>
            </div>
          )

        }
      })
    );
  }
  else {
    const q_notes = notes.filter(note => {
      if (note.Title.toLowerCase().includes(query.toLowerCase())) return true;
      return false;
    });
    return (
      q_notes.map((note) => {
        if (edit == false || edit != note.id) {
          return (
            <div className="notebox" key={note.id}>
              <textarea defaultValue={note.Title} readOnly className={note.id}></textarea>
              <div className="note-footer">
                <span>{note.Date}</span>
                <div className='btn' onClick={(e) => handleEdit(e, note)}><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon></div>
                <div className='btn' onClick={() => dispatch(deleteNote(note))}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></div>
              </div>
            </div>
          )
        }
        else {
          return (
            <div className="notebox" key={note.id}>
              <textarea value={newnote} className={note.id} onChange={(e) => setNewnote(e.target.value)}></textarea>
              <div className="note-footer">
                <span>{note.Date}</span>
                <div className='btn' onClick={(e) => handlesubmit(e, note)}>Save</div>
                <div className='cancel' onClick={handleCancel}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></div>
              </div>
            </div>
          )
        }
      })
    );
  }
}

export default Individualnote;
