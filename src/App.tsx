import "./global.css";

import { Post, PostType } from "./components/Post";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/63100197?v=4",
      name: "Joyce Mara",
      role: "Developer",
    },
    content: [
      { type: "paragraph", content: "Hey guys 👋" },
      {
        type: "paragraph",
        content: "I just uploaded another project to my portfolio.",
      },
      { type: "link", content: "joyce/developer" },
    ],
    publishedAt: new Date("2023-05-18 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/63100197?v=4",
      name: "Vitor",
      role: "Backend",
    },
    content: [
      { type: "paragraph", content: "Hey guys 👋" },
      {
        type: "paragraph",
        content: "I just uploaded another project to my portfolio.",
      },
      { type: "link", content: "joyce/developer" },
    ],
    publishedAt: new Date("2023-05-10 20:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
