import React, { useState } from "react";
import { FaChevronDown, FaChevronUp  } from "react-icons/fa6";

import services from "../../data/services.json";
import styles from "./ServiceList.module.css";

const Services = () => {
    const [expandedCategories, setExpandedCategories] = useState({});
    const [expandedServices, setExpandedServices] = useState({});

    // Alterna a visualização das categorias
    const toggleCategory = (index) => {
        setExpandedCategories((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    // Alterna a visualização das descrições dos serviços
    const toggleService = (categoryIndex, serviceIndex) => {
        const key = `${categoryIndex}-${serviceIndex}`;
        setExpandedServices((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };

    return (
        <div className={styles.container} id="services">
            <h2>Serviços</h2>
            <div className={styles.servicesList}>
                {services.map((category, index) => (
                    <div key={index} className={styles.serviceCategory}>
                        <h3 onClick={() => toggleCategory(index)}>
                            {category.category}
                            {expandedCategories[index] ? <FaChevronUp /> : <FaChevronDown />}
                        </h3>
                        {expandedCategories[index] && (
                            <ul>
                                {category.services.map((service, serviceIndex) => (
                                    <li key={serviceIndex} onClick={() => toggleService(index, serviceIndex)}>
                                        <span>{service.title}</span>
                                        {expandedServices[`${index}-${serviceIndex}`] && (
                                            <p className={styles.serviceDescription}>{service.description}</p>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;