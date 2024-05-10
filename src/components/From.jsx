import React, { useEffect, useState } from "react";

function From({ todos, setTodos, id, setId }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function onHandleTitleChange(e) {
    setTitle(e.target.value);
  }

  function onHandleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if(id){
      updateById(id);
      setId('')
    }else{
      const obj = {
        id: Math.random(),
        title,
        description,
      };
      setTodos([...todos, obj]);
    }

   
    setDescription("");
    setTitle("");
  }

  useEffect(() => {
    if(id){
      const updatedData = todos.filter((d)=>d.id === id)
      setTitle(updatedData[0].title)
      setDescription(updatedData[0].description)
    }
  }, [id])

  const updateById = (id)=>{
    const obj ={
      title,
      description
    }
    setTodos((prevData)=> prevData.map((todo)=>todo.id===id ? {...todo,...obj} : todo));
  }
  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          className="container text-center my-5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            value={title}
            className="mx-2"
            placeholder="Title"
            type="text"
            onChange={onHandleTitleChange}
          />
          <input
            value={description}
            className="mx-2"
            placeholder="Description"
            type="text"
            onChange={onHandleDescriptionChange}
          />
          {id && <button className="btn btn-warning">Edit</button>}
          {!id && <button className="btn btn-warning">Add</button>}
        </div>
      </form>
    </>
  );
}

export default From;
