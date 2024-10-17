import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch to connect to Redux
import { toggleTodo } from '../state/slice'; // Adjust the path based on your file structure

const ItemB = () => {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch(); // Create a dispatch function

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 0); // Simulate a loading time of 3 seconds

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <div style={{  border: "1px solid black", boxSizing: "border-box", width: "100%", height: "100%" }}>Loading Item C...</div>;
    }

    return (
        <div style={{ backgroundColor: "blue", border: "1px solid black", boxSizing: "border-box", width: "100%", height: "100%" }}>
            <span onClick={()=>dispatch({type:"toggleTodo"})}>Item 3 (b)</span>
            <span onClick={()=>dispatch(toggleTodo())}>Item 5 (b)</span>

            <span onClick={()=>dispatch(toggleTodo())}>Item 4 (b)</span>

            <span onClick={()=>dispatch(toggleTodo())}>Item 6 (b)</span>

            <span onClick={()=>dispatch(toggleTodo())}>Item 7 (b)</span>

        </div>
    );
};

export default ItemB;
