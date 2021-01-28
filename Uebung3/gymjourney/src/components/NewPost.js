import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: (event) => {
        setValue(event.target.value);
      },
    },
  };
};

const NewPost = (props) => {
  const { value: content, bind: bindcontent, reset: resetcontent } = useInput(
    ""
  );

  return (
    <div className="media border mb-3 p-3">
      <img
        src={`https://i.pravatar.cc/300?img=${Math.random() * 60 + 1}`}
        alt="avatar"
        className="mr-3 mt-3 rounded-circle"
      />
      <div className="media-body">
        <h4>{props.firstname} </h4>
        <div
          style={{ display: "flex", flexDirection: "column" }}
          className="col-xs-2 blog"
        >
          <textarea
            style={{ marginBottom: ".5rem" }}
            placeholder="Erstelle einen neuen Post"
            type="text"
            {...bindcontent}
          />
          <Button
            style={{ color: "#b9defd", backgroundColor: "#1764a4" }}
            onClick={() => props.handleCreatePostCallback(content)}
          >
            Post erstellen
          </Button>
        </div>
        <div className="col-xs-2 icons">
          <i className="far fa-thumbs-up icon-10x" />
          <i className="far fa-comment" />
          <i className="far fa-paper-plane" />
        </div>
      </div>
    </div>
  );
};

export default NewPost;
