import { comments } from './comment-list.module.css';

function CommentList({ items }) {
  if (!items) {
    return <p>Loading...</p>;
  }
  return (
    <ul className={comments}>
      {items.map((comment) => (
        <li key={comment.id}>
          <p>{comment.text}</p>
          <div>
            By <address>{comment.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
