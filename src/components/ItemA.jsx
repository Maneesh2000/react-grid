import React, { useEffect, useState } from 'react';

const ItemA = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 0); // Simulate a loading time of 3 seconds

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <div style={{  border: "1px solid black", boxSizing: "border-box", width: "100%", height: "100%" }}>Loading Item A...</div>;
    }

    return (
        <div style={{ backgroundColor: "red", border: "1px solid black", boxSizing: "border-box",width:"100%",height:"100%" }}>
            <span>Item 1 (A)</span>
        </div>
    );
};

export default ItemA;
