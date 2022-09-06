import { Sidebar } from "../components/Sidebar"
import { Header } from "../components/Header"
import { Post } from "../components/Post"
import { IPost } from "../interfaces/Post"

import styles from "./Posts.module.css"

const posts: IPost[] = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/pedroanastacio.png",
        name: "Pedro Anastácio",
        role: "Full Stack Developer"
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋", },
        { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀", },
        { type: "link", content: "jane.design/doctorcare", },
      ],
      publishedAt: new Date("2022-07-16 09:02:13")
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/diego3g.png",
        name: "Diego Fernandes",
        role: "CTO @Rocketseat"
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋", },
        { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀", },
        { type: "link", content: "jane.design/doctorcare", },
        { type: "link", content: "#rocketseat", },
        { type: "link", content: "#nlw", },
      ],
      publishedAt: new Date("2022-07-15 20:11:35")
    },
  ]
  
export function Posts() {
    return (
        <div>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />

                <main>
                    {posts.map(post => {
                        return (
                            <Post
                                key={`post-${post.id}`}
                                author={post.author}
                                content={post.content}
                                publishedAt={post.publishedAt}
                            />
                        )
                    })}
                </main>
            </div>
        </div>
    )
}