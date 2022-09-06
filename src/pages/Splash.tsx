import { Logo } from "../components/Logo"

import styles from "./Splash.module.css"

export function Splash() {
  return (
    <main className={styles.splash}>
      <Logo />
    </main>
  )
}