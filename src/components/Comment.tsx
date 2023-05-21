import { ThumbsUp, Trash } from "phosphor-react";

import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    console.log("deletar");

    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/63100197?v=4"
        alt=""
        onClick={() => alert("Hello")}
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Joyce</strong>
              <time title="May 14, 2023" dateTime="2023-05-14">
                Published 1 hour ago
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Delete">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Clap <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
