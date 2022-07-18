import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"

import { Avatar } from "./Avatar"
import { Comment } from "./Comment"

import { IAuthor } from "../interfaces/Author"
import { IContent } from "../interfaces/Content"

import styles from "./Post.module.css"

interface PostProps {
  author: IAuthor
  content: IContent[]
  publishedAt: Date
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState<string[]>([
    "Post muito bacana, hein?!"
  ])

  const [newCommentText, setNewCommentText] = useState<string>("")

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("")
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!")
  }

  function handleCreateNewComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText("")
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeleteOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          switch (line.type) {
            case "paragraph":
              return <p key={line.content}>{line.content}</p>
            case "link":
              return <p  key={line.content}><a href="#">{line.content}</a></p>
            default:
              return
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Escreva um comentário..."
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}