import igniteLogo from "../assets/ignite-logo.svg"

import styles from "./Logo.module.css"

export function Logo() {
    return (
        <div className={styles.logo}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
            <strong>Ignite Feed</strong>
        </div>
    )
}