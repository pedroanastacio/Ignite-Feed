import { Dispatch, SetStateAction } from "react"
import styles from "./Modal.module.css"

interface ModalProps {
    title: string
    content: string
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
    onConfirm: () => void
}

export function Modal({ title, content, isOpen, setIsOpen, onConfirm }: ModalProps) {

    function handleClose() {
        setIsOpen(false);
    }

    return (
        <>
            {isOpen &&
                <div className={styles.overlay}>
                    <div className={styles.modal}>
                        <header>
                            <h5>{title}</h5>
                        </header>

                        <div className={styles.content}>
                            <p>{content}</p>
                        </div>

                        <footer>
                            <button className={styles.cancelBtn} onClick={handleClose}>
                                Cancelar
                            </button>

                            <button className={styles.confirmBtn} onClick={onConfirm}>
                                Sim
                            </button>
                        </footer>
                    </div>
                </div>
            }
        </>
    )
}