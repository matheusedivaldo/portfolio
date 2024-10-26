import React from "react";
import services from "../../data/services.json";
import styles from "./ServiceList.module.css";

const Services = () => {
    return (
        <div className={styles.container}>
            <h2>Serviços</h2>
            <div className={styles.servicesList}>
                {services.map((category, index) => (
                    <div key={index} className={styles.serviceCategory}>
                        <h3>{category.category}</h3>
                        <ul>
                            {category.services.map((service, serviceIndex) => (
                                <li key={serviceIndex}>{service}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;