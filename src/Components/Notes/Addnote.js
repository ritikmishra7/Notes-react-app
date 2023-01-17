import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setNote } from "../Redux/NotesSlice";

function Addnote(props) {
  const [newnote, setNewnote] = useState("");
  const [char, setChars] = useState(200);

  const dispatch = useDispatch();

  function updateText(e) {
    setNewnote(e.target.value);
    const value = 200 - e.target.value.length;
    setChars(value);
  }

  function submitNote(e) {
    e.preventDefault();
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1
      }/${current.getFullYear()}`;
    const id = nanoid();
    if (newnote.length !== 0) {
      const sendThisNote = {
        id,
        Title: newnote,
        Date: date,
      };
      setNewnote("");
      setChars(200);
      // props.noteFunc(sendThisNote);
      dispatch(setNote(sendThisNote));

    } else alert("Please enter some text to add");
  }

  return (
    <div className="addNote">
      <textarea
        maxLength={200}
        value={newnote}
        placeholder="Type to add a note..."
        onChange={updateText}
      ></textarea>
      <div className="add-footer">
        <span>{char} Remaining</span>
        <button onClick={submitNote} className="btn">
          Save
        </button>
      </div>
    </div>
  );
}

export default Addnote;
