import React, { useEffect, useState } from 'react';

const ItemC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 7000); // Simulate a loading time of 3 seconds

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <div style={{  border: "1px solid black", boxSizing: "border-box", width: "100%", height: "100%" }}>Loading Item C...</div>;
    }

    return (
        <div style={{ backgroundColor: "pink", border: "1px solid black", boxSizing: "border-box", width: "100%", height: "100%" }}>
            <span>Item 3 (C)</span>
        </div>
    );
};

export default ItemC;
