import sendAlt from "@iconify-icons/carbon/send-alt";
import commentDots from "@iconify-icons/fa-regular/comment-dots";
import thumbsUp from "@iconify-icons/fa/thumbs-up";
import { Icon } from "@iconify/react";
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
          <Icon icon={thumbsUp} />
          <Icon icon={commentDots} />
          <Icon icon={sendAlt} />
        </div>
      </div>
    </div>
  );
};

export default Post;
