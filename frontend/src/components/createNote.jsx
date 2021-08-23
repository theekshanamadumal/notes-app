import { useState } from "react";
import React from "react";
import axios from "axios";

const CreateNote = () => {
  const [input, setInput] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return { ...prevInput, [name]: value };
    });
  }
  function handleClick(event) {
    event.preventDefault();
    console.log(input);
    const newNote = {
      title: input.title,
      content: input.content,
    };
    axios.post("http://localhost:3001/create", newNote);
  }

  return (
    <div className="container">
      <h1>Create note page</h1>
      <form className="container ">
        <div className="form-group">
          <input
            onChange={handleChange}
            name="title"
            autoComplete="off"
            className="form-control"
            placeholder="note title"
          ></input>
        </div>
        <div className="form-group">
          <textarea
            onChange={handleChange}
            name="content"
            autoComplete="off"
            className="form-control"
            placeholder="note content"
          ></textarea>
        </div>
        <button onClick={handleClick} className="btn btn-lg btn-info">
          Add Note
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
