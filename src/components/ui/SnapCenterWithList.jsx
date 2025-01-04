import React, { useRef, useState, useEffect } from 'react';
import { services } from '../../utils/icons';

const SnapCenterWithList = ({selectedSub, setSelectedSub}) => {
    const containerRef = useRef(null);

    const listaSubs = [
        {
            id: 1,
            name: "Spotify",
            icon: "SPOTIFY",
        },
        {
            id: 2,
            name: "Youtube Premium",
            icon: "YOUTUBE",
        },
        {
            id: 3,
            name: "Netflix",
            icon: "NETFLIX",
        },
        {
            id: 4,
            name: "HBO",
            icon: "HBO",
        },
        {
            id: 5,
            name: "Microsoft OneDrive",
            icon: "ONEDRIVE"
        },
        {
            id: 6,
            name: "Amazon Web Services",
            icon: "AWS"
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const children = Array.from(containerRef.current.children);
            const containerCenter = containerRef.current.offsetWidth / 2;
            let closestElement = null;
            let closestDistance = Infinity;

            children.forEach((child) => {
                const rect = child.getBoundingClientRect();
                const childCenter = rect.left + rect.width / 2;
                const distance = Math.abs(childCenter - containerCenter);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestElement = child;
                }
            });

            if (closestElement) {
                const selectedId = parseInt(closestElement.getAttribute("data-id"), 10);
                const selected = closestElement.getAttribute("data-id"); //listaSubs.find((sub) => sub.id === selectedId);
                setSelectedSub(selected);
            }
        };

        const container = containerRef.current;
        container.addEventListener("scroll", handleScroll, { passive: true });

        return () => container.removeEventListener("scroll", handleScroll);
    }, [listaSubs]);

    return (
        <div className='w-full'>
            <div className="flex w-full px-46 gap-20 snap-x overflow-x-scroll" ref={containerRef}>
                {Object.keys(services).map((s, index) => (
                    <div key={index} className={`snap-center w-[160px] h-[130px] flex flex-col justify-center items-center`} data-id={s}>
                        <span className={`scale-[200%] 3xs:scale-[260%]`}>
                            {services[s]}
                        </span>
                    </div>
                ))}
            </div>
            <p className='text-center font-semibold text-h5 hidden'>{selectedSub}</p>
        </div>
    );
};

export default SnapCenterWithList;
