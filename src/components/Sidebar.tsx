import { Avatar } from './Avatar';
import {PencilSimpleLine} from 'phosphor-react'
import styles from './Sidebar.module.css'

export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/37/IHLjdHdzSvi0rgUMMlSK_TE3_0286.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="" />
      <div className={styles.profile}>
      <Avatar src="https://avatars.githubusercontent.com/u/63100197?v=4" alt="" />
        <strong>Joyce Mara</strong>
        <span>Developer</span>
      </div>

      <footer>
       <a href='#'>
          <PencilSimpleLine size={20}/>
          Edit
       </a>
      </footer>
    </aside>
  );
}
