import { ButtonHTMLAttributes } from "react"

import styles from "./Button.module.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    bgColor?: string
    icon: string
    text: string
}

export function Button({ bgColor, icon, text, ...props }: ButtonProps) {
    const backgroundColor = bgColor ?? "var(--pink-500)"

    return (
        <button
            className={styles.button}
            style={{ backgroundColor: `${backgroundColor}` }}
            {...props}
        >
            <img src={icon} />
            <span>{text}</span>
        </button>
    )
}