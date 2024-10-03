import React, { FormEvent, useRef } from "react";

const Form = () => {
  const nameRef = useRef(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(nameRef.current.value);
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        SUBMIT
      </button>
    </form>
  );
};

export default Form;
