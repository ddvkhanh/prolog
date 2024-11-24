/* eslint-disable @next/next/no-img-element */
import { Button } from "@features/ui";
import styles from "./modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Modal ({ isOpen, onClose }: ModalProps) {
    if (!isOpen) {
        return null;
    }

    const handleEmail = (e) => {
        const email = "jungtalent@gmail.com";
        window.location.href = `mailto:${email}` ;
        e.preventDefault();
    }

    return(
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
               <img className={styles.imgEmail} src="/icons/email.svg" alt={"Contact Us"}/>
                <h2>Contact Us Via Email</h2>
                <div className={styles.description}>
                    <p>Any questions? Send us an email at jungtalents@gmail.com.</p>
                    <p>We usually answer within 24 hours.</p>
                </div>
                <div className={styles.modalButtons}>
                    <Button className={styles.cancelButton} onClick={onClose}>Cancel</Button>
                    <Button className={styles.emailButton} onClick={handleEmail}>Open Email App</Button>
                </div>                
            </div>
        </div>
    )
}