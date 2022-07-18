import { HandsClapping, Trash } from "phosphor-react"
import { useState } from "react"

import { Avatar } from "./Avatar"

import styles from "./Comment.module.css"

interface CommentProps {
    content: string
    onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState<number>(0);

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount(prevLikeCount => prevLikeCount + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title="15 de julho às 09:02h" dateTime="2020-07-15 09:02:13">1h</time>
                        </div>

                        <button 
                        title="Deletar comentário"
                        onClick={handleDeleteComment}
                        >
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <HandsClapping />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}