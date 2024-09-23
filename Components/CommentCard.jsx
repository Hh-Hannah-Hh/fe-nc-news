import { Link } from "react-router-dom";

function CommentCard({ comments }) {
  return (
    <>
      {comments.map((comment) => {
        return (
          <>
            <div className="single-comment">
              <p>{comment.author}</p>
              <p>{comment.created_at}</p>
              <p>{comment.body}</p>
              <p>{comment.votes} users agree</p>
            </div>
          </>
        );
      })}
    </>
  );
}

export default CommentCard;
