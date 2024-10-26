import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./WhatsAppButton.module.css";

const WhatsAppButton = () => {
    const phoneNumber = "55119932250639";
    const message = "Olá, gostaria de mais informações!";

    const handleClick = () => {
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
    };

    return (
        <div className={styles.whatsappButton} onClick={handleClick}>
            <FaWhatsapp />
        </div>
    );
};

export default WhatsAppButton;
