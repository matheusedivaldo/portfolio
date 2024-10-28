import React, { useState } from "react";
import { FaCode, FaPaintBrush } from "react-icons/fa";
import servicesData from "../../data/services.json";
import styles from "./ServiceList.module.css";

const Services = () => {
    const [expandedService, setExpandedService] = useState(null);

    const toggleDescription = (index) => {
        setExpandedService(expandedService === index ? null : index);
    };

    const getCategoryIcon = (category) => {
        switch (category) {
            case "Desenvolvimento":
                return <FaCode className={styles.icon} />;
            case "Design":
                return <FaPaintBrush className={styles.icon} />;
            default:
                return null;
        }
    };

    return (
        <section className={styles.container} id="services">
            <h2 className={styles.title}>Serviços</h2>
            {servicesData.map((categoryData, catIndex) => (
                <div key={catIndex} className={styles.categorySection}>
                    <div className={styles.categoryHeader}>
                        {getCategoryIcon(categoryData.category)}
                        <h3 className={styles.categoryTitle}>{categoryData.category}</h3>
                    </div>
                    <div className={styles.cardsContainer}>
                        {categoryData.services.map((service, srvIndex) => (
                            <div key={srvIndex} className={styles.card}>
                                <h4 className={styles.serviceTitle}>{service.title}</h4>
                                {expandedService === `${catIndex}-${srvIndex}` ? (
                                    <p className={styles.description}>{service.description}</p>
                                ) : (
                                    <p className={styles.shortDescription}>Clique para saber mais</p>
                                )}
                                <button
                                    className={styles.toggleButton}
                                    onClick={() => toggleDescription(`${catIndex}-${srvIndex}`)}
                                >
                                    {expandedService === `${catIndex}-${srvIndex}` ? "Ver menos" : "Saber mais"}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Services;