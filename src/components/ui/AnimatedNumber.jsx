import { useState, useEffect } from "react";

export default function AnimatedNumber({ target, duration = 5000, type = 'en-US' }) {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        const startTime = performance.now();

        const animate = (time) => {
            const elapsedTime = time - startTime;
            const progress = Math.min(elapsedTime / duration, 1); // Asegura que no pase del 100%

            // Calcula el valor actual basado en el progreso
            const current = progress * target;

            // Actualiza el estado con el valor actual
            setCurrentValue(current);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [target, duration]);

    // Determina si el número objetivo tiene decimales
    const isDecimal = target % 1 !== 0;

    {/* Formatea el número con separadores */}
    return currentValue.toLocaleString("en-US", {
        minimumFractionDigits: isDecimal ? 2 : 0,
        maximumFractionDigits: isDecimal ? 2 : 0,
    });
}
