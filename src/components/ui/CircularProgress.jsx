import { useState, useEffect } from "react";

const CircularProgress = ({ currentValue, totalValue }) => {
    const [strokeOffset, setStrokeOffset] = useState(500); // Inicialmente en 500 (vacío)

    useEffect(() => {
        // Función para calcular el strokeDashoffset según el valor actual y total
        const calculateOffset = () => {
            const max = 260; // Barra llena
            const min = 500; // Barra vacía (visual mínimo)

            // Asegurarse de que el valor actual esté entre 0 y el total
            const clampedValue = Math.min(Math.max(currentValue, 0), totalValue);

            // Calcular el porcentaje de progreso: mapea el valor entre 0 y el totalValue
            const percentage = clampedValue / totalValue;

            // Establecer el nuevo strokeDashoffset en función del progreso
            const newOffset = (1 - percentage) * (min - max) + max;
            return newOffset;
        };

        // Animar el progreso
        let progress = strokeOffset;
        const targetOffset = calculateOffset();

        const animateProgress = () => {
            if (progress !== targetOffset) {
                progress += (targetOffset - progress) * 0.5; // Aumenta la velocidad de animación (ajusta el factor)
                setStrokeOffset(progress);
                requestAnimationFrame(animateProgress); // Continuar animando
            }
        };

        animateProgress();
    }, [currentValue, totalValue]);

    //Donde en strokeDashoffset
    //260 es barra vacía
    //500 es barra llena

    return (
            <svg className="circular-progress-main rotate-132" width="250" height="250" viewBox="0 0 120 120">
                <circle className="background" cx="60" cy="60" r="50" stroke="#e6e6e6" strokeWidth="4" fill="none" strokeDasharray="300" strokeDashoffset="60" />
                {<circle className="foreground1 absolute" cx="60" cy="60" r="50" stroke="#4E4E61" strokeWidth="4.5" fill="none" strokeDasharray={500}
                    strokeDashoffset={strokeOffset}
                    style={{
                        transition: "stroke-dashoffset 1s ease-in-out",
                    }} />}
            </svg>
    );
};

// Uso del componente
export default CircularProgress
