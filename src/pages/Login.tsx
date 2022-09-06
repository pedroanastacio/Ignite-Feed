import { Logo } from "../components/Logo"
import { Button } from "../components/Button"

import googleLogo from "../assets/google-logo.svg"
import facebookLogo from "../assets/facebook-logo.svg"
import gitHubLogo from "../assets/github-logo.svg"

import styles from "./Login.module.css"
import { useNavigate } from "react-router-dom"

export function Login() {
  const navigate = useNavigate();

  function handleLoginClick() {
    navigate("/posts");
  }

  return (
    <div className={styles.wrapper}>
      <img src="/src/assets/login.jpg" alt="Pessoas rindo" />

      <main>
        <header>
          <Logo />
        </header>

        <div className={styles.title}>
          <h1>Escolha uma opção para entrar</h1>

          <p>Utilize algum dos serviços abaixo para entrar na nossa plataforma.</p>
        </div>

        <div className={styles.options}>
          <Button
            bgColor="var(--google)"
            icon={googleLogo}
            text="Entrar com o Google"
            onClick={handleLoginClick}
          />

          <Button
            bgColor="var(--facebook)"
            icon={facebookLogo}
            text="Entrar com o Facebook"
            onClick={handleLoginClick}
          />

          <Button
            bgColor="var(--github)"
            icon={gitHubLogo}
            text="Entrar com o GitHub"
            onClick={handleLoginClick}
          />
        </div>
      </main>
    </div>
  )
}


