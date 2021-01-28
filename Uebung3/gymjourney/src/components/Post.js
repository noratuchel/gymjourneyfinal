import React from "react";

const Post = (props) => {
  return (
    <div className="media border mb-3 p-3">
      <img
        src={`https://i.pravatar.cc/300?img=${Math.random() * 60 + 1}`}
        alt="avatar"
        className="mr-3 mt-3 rounded-circle"
      />
      <div className="media-body">
        <h4>
          {props.firstname}{" "}
          <small>
            <p>vor {props.posttime}</p>
          </small>
        </h4>
        <div className="col-xs-2 blog">{props.content}</div>
        <div className="col-xs-2 icons">
          <i className="far fa-thumbs-up icon-10x" />
          <i className="far fa-comment" />
          <i className="far fa-paper-plane" />
        </div>
      </div>
    </div>
  );
};

export default Post;
