// import React, { useEffect, useState } from 'react';
// import { Responsive, WidthProvider } from "react-grid-layout";
// import GridLayout from "react-grid-layout";
// import 'react-grid-layout/css/styles.css';
// import 'react-resizable/css/styles.css';
// import { useSelector } from 'react-redux'; // Import useSelector to access Redux state

// const ItemC = () => {
//     const [isLoading, setIsLoading] = useState(true);
//     const ResponsiveGridLayout = WidthProvider(Responsive);
//     const todos = useSelector((state) => state.todos.todos);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setIsLoading(false);
//         }, 0); // Simulate a loading time of 3 seconds

//         return () => clearTimeout(timer);
//     }, []);

//     const [rowHeight, setRowHeight] = useState(0);
//     const layouts = todos.map(todo => ({
//         i: todo.i, // Use the id from todo as the key
//         x: todo.x,
//         y: todo.y,
//         w: todo.w,
//         h: todo.h,

//     }));
//     useEffect(() => {
//         const handleResize = () => {
//             const height = window.innerHeight; // Get the viewport height
//             setRowHeight(height / 10); // Set row height to 10% of viewport height
//         };

//         handleResize(); // Set initial height
//         window.addEventListener("resize", handleResize); // Update on resize
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     if (isLoading) {
//         return <div style={{  border: "1px solid black", boxSizing: "border-box", width: "100%", height: "100%" }}>Loading Item C...</div>;
//     }
//     // const layouts = [
//     //     { i: "a", x: 0, y: 0, w: 12, h: 1, static: false }, // Item 'a'
//     //     { i: "b", x: 0, y: 1, w: 3, h: 1 }, // Item 'b' below 'a'
//     //     { i: "c", x: 0, y: 1, w: 9, h: 1 }, // Item 'c' beside 'b'
//     // ];
//     // const layouts = [
//     //     { i: "a", x: 0, y: 0, w: 2, h: 1, minW: 2, maxW: 4
//     //     },  // Card 1
//     //     // { i: "b", x: 2, y: 0, w: 6, h: 1 },  // Card 2
//     //     // { i: "c", x: 4, y: 1, w: 3, h: 2 },  // Card 3
//     //     // { i: "d", x: 3, y: 1, w: 3, h: 2 },  // Card 4
//     //     // { i: "e", x: 6, y: 1, w: 6, h: 1 },  // Card 5
//     //     // { i: "f", x: 0, y: 2, w: 3, h: 2 },  // Card 6
//     //     // { i: "g", x: 3, y: 2, w: 3, h: 2 },  // Card 7
//     //     // { i: "h", x: 6, y: 2, w: 6, h: 1 },  // Card 8
//     //     // { i: "i", x: 0, y: 3, w: 6, h: 1 },  // Card 9
//     //     // { i: "j", x: 6, y: 3, w: 6, h: 1 },  // Card 10
//     // ];
//     return (
//         <div style={{ backgroundColor: "pink", border: "1px solid black", boxSizing: "border-box", width: "100%", height: "100%" }}>
//             <ResponsiveGridLayout
//             className="layout"
//             layouts={{ lg: layouts }} // Provide layouts for large screens
//             // breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
//             cols={{ lg: 12, md: 10, sm: 10, xs: 4, xxs: 2 }}
//             rowHeight={rowHeight} // Use the calculated row height
//             onLayoutChange={(currentLayout) => { console.log(currentLayout); }}
//             isDraggable={true} // Enable dragging
//             isResizable={true} // Enable resizing
//             allowOverlap={false}
//             width={1200}

//         >
//            {/* <div key="a" style={{backgroundColor:"black"}}>test1</div>
//            <div key="b" style={{backgroundColor:"black"}}>test1</div>
//            <div key="c" style={{backgroundColor:"black"}}>test1</div> */}
//            <div key="a" style={{ backgroundColor: "white" }}>Card 1</div>
//                 <div key="b" style={{ backgroundColor: "lightgreen", display: "flex", justifyContent: "center", alignItems: "center" }}>Card 2</div>
//                 <div key="c" style={{ backgroundColor: "lightcoral", display: "flex", justifyContent: "center", alignItems: "center" }}>Card 3</div>
//                 <div key="d" style={{ backgroundColor: "lightsalmon", display: "flex", justifyContent: "center", alignItems: "center" }}>Card 4</div>
//                 <div key="e" style={{ backgroundColor: "lightseagreen", display: "flex", justifyContent: "center", alignItems: "center" }}>Card 5</div>
//                 <div key="f" style={{ backgroundColor: "lightsteelblue", display: "flex", justifyContent: "center", alignItems: "center" }}>Card 6</div>
//                 <div key="g" style={{ backgroundColor: "lightyellow", display: "flex", justifyContent: "center", alignItems: "center" }}>Card 7</div>
//                 <div key="h" style={{ backgroundColor: "lightpink", display: "flex", justifyContent: "center", alignItems: "center" }}>Card 8</div>
//                 <div key="i" style={{ backgroundColor: "lightgray", display: "flex", justifyContent: "center", alignItems: "center" }}>Card 9</div>
//                 <div key="j" style={{ backgroundColor: "lightgoldenrodyellow", display: "flex", justifyContent: "center", alignItems: "center" }}>Card 10</div>

//         </ResponsiveGridLayout>
//         </div>
//     );
// };

// export default ItemC;

// import React, { useEffect, useState } from "react";
// import { Responsive, WidthProvider } from "react-grid-layout";
// import "react-grid-layout/css/styles.css";
// import "react-resizable/css/styles.css";
// import { useSelector } from "react-redux"; // Import useSelector to access Redux state
// const layout2 = [
// 	{
// 		w: 12,
// 		h: 1,
// 		x: 0,
// 		y: 0,
// 		i: "a",
// 		moved: false,
// 		static: false,
// 	},
	// {
	//     "w": 1,
	//     "h": 1,
	//     "x": 0,
	//     "y": 1,
	//     "i": "b",
	//     "moved": false,
	//     "static": false
	// },
	// {
	//     "w": 1,
	//     "h": 1,
	//     "x": 2,
	//     "y": 0,
	//     "i": "c",
	//     "moved": false,
	//     "static": false
	// },
	// {
	//     "w": 1,
	//     "h": 1,
	//     "x": 3,
	//     "y": 0,
	//     "i": "d",
	//     "moved": false,
	//     "static": false
	// },
	// {
	//     "w": 1,
	//     "h": 1,
	//     "x": 6,
	//     "y": 0,
	//     "i": "e",
	//     "moved": false,
	//     "static": false
	// },
	// {
	//     "w": 1,
	//     "h": 1,
	//     "x": 1,
	//     "y": 1,
	//     "i": "f",
	//     "moved": false,
	//     "static": false
	// },
	// {
	//     "w": 1,
	//     "h": 1,
	//     "x": 5,
	//     "y": 1,
	//     "i": "g",
	//     "moved": false,
	//     "static": false
	// },
	// {
	//     "w": 1,
	//     "h": 1,
	//     "x": 0,
	//     "y": 2,
	//     "i": "h",
	//     "moved": false,
	//     "static": false
	// },
	// {
	//     "w": 1,
	//     "h": 1,
	//     "x": 2,
	//     "y": 1,
	//     "i": "i",
	//     "moved": false,
	//     "static": false
	// },
	// {
	//     "w": 1,
	//     "h": 1,
	//     "x": 5,
	//     "y": 0,
	//     "i": "j",
	//     "moved": false,
	//     "static": false
	// }
// ];
// const ItemC = () => {
// 	const [isLoading, setIsLoading] = useState(true);
// 	const [layout, setLayout] = useState([
// 		{
// 			w: 12,
// 			h: 1,
// 			x: 0,
// 			y: 0,
// 			i: "a",
// 			moved: false,
// 			static: false,
// 		},
// 	]);
// 	const ResponsiveGridLayout = WidthProvider(Responsive);
// 	const todos = useSelector((state) => state.todos.todos); // Redux state

// 	const [expandedItem, setExpandedItem] = useState(null); // Track which item is expanded
// 	const [rowHeight, setRowHeight] = useState(0);

// 	useEffect(() => {
// 		const timer = setTimeout(() => {
// 			setIsLoading(false);
// 		}, 0); // Simulate loading time

// 		return () => clearTimeout(timer);
// 	}, []);

// 	useEffect(() => {
// 		const handleResize = () => {
// 			const height = window.innerHeight; // Get the viewport height
// 			setRowHeight(height / 10); // Set row height to 10% of viewport height
// 		};

// 		handleResize(); // Set initial height
// 		window.addEventListener("resize", handleResize); // Update on resize
// 		return () => window.removeEventListener("resize", handleResize);
// 	}, []);

// 	const handleItemClick = (itemId) => {
// 		// setExpandedItem(prev => (prev === itemId ? null : itemId)); // Toggle expanded state
// 		console.log("clicked");
// 		setLayout([
// 			{
// 				w: 12,
// 				h: 7.1,
// 				x: 0,
// 				y: 0,
// 				i: "a",
// 				moved: false,
// 				static: false,
// 			},
// 		]);
// 	};

// 	const layouts = todos.map((todo) => {
// 		if (expandedItem === todo.i) {
// 			// Make the clicked item occupy the entire grid
// 			return { i: todo.i, x: 0, y: 0, w: 12, h: 7.4 };
// 		}
// 		// Hide all other items when one is expanded
// 		return { i: todo.i, x: todo.x, y: todo.y, w: todo.w, h: todo.h, isHidden: !!expandedItem };
// 	});

// 	if (isLoading) {
// 		return <div style={{ border: "1px solid black", boxSizing: "border-box", width: "100%", height: "100%" }}>Loading Item C...</div>;
// 	}

// 	return (
// 		<div style={{ backgroundColor: "pink", border: "1px solid black", boxSizing: "border-box", width: "100%", height: "100%" }}>
// 			<ResponsiveGridLayout
// 				className="layout"
// 				layouts={{ lg: layout }} // Provide layouts for large screens
// 				cols={{ lg: 12, md: 10, sm: 10, xs: 4, xxs: 2 }}
// 				rowHeight={rowHeight} // Use the calculated row height
// 				onLayoutChange={(currentLayout) => {
// 					console.log(currentLayout);
// 				}}
// 				isDraggable={true} // Enable dragging
// 				isResizable={true} // Enable resizing
// 				allowOverlap={false}
// 				width={1200}
// 			>
// 				{/* Render grid items */}
// 				{layout2.map((todo) => (
// 					<div
// 						key={todo.i}
// 						style={{
// 							backgroundColor: expandedItem === todo.i ? "lightblue" : "white",
// 							display: expandedItem && expandedItem !== todo.i ? "none" : "flex", // Hide other cells if one is expanded
// 							justifyContent: "center",
// 							alignItems: "center",
// 							border: "1px solid black",
// 							cursor: "pointer",
// 						}}
// 					>
// 						{`Card ${todo.i.toUpperCase()}`}
// 						<div onClick={() => handleItemClick()}>expand</div>
// 					</div>
// 				))}
// 			</ResponsiveGridLayout>
// 		</div>
// 	);
// };
import React, { useEffect, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { useSelector } from "react-redux"; // Import useSelector to access Redux state

const ItemC = () => {
	const [isLoading, setIsLoading] = useState(true);
	const ResponsiveGridLayout = WidthProvider(Responsive);
	const todos = useSelector((state) => state.todos.todos); // Redux state

	const [expandedItem, setExpandedItem] = useState(null); // Track which item is expanded
	const [rowHeight, setRowHeight] = useState(0);
	const [layout, setLayout] = useState([]); // Initialize layout state

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 0); // Simulate loading time

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		const handleResize = () => {
			const height = window.innerHeight; // Get the viewport height
			setRowHeight(height / 10); // Set row height to 10% of viewport height
		};

		handleResize(); // Set initial height
		window.addEventListener("resize", handleResize); // Update on resize
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		// Set initial layout based on todos
		setLayout(
			todos.map((todo) => ({
				i: todo.i,
				x: todo.x,
				y: todo.y,
				w: 12,
				h: expandedItem === todo.i ? 7 : 1, // Expand if clicked
			}))
		);
	}, [todos, expandedItem]);

	const handleItemClick = (itemId) => {
        console.log("clicked")
		setExpandedItem(prev => (prev === itemId ? null : itemId)); // Toggle expanded state
	};

	if (isLoading) {
		return <div style={{ border: "1px solid black", boxSizing: "border-box", width: "100%", height: "100%" }}>Loading Item C...</div>;
	}

	return (
		<div style={{ backgroundColor: "pink", border: "1px solid black", boxSizing: "border-box", width: "100%", height: "100%" }}>
			<ResponsiveGridLayout
				className="layout"
				layouts={{ lg: layout }} // Provide layouts for large screens
				cols={{ lg: 12, md: 10, sm: 10, xs: 4, xxs: 2 }}
				rowHeight={rowHeight} // Use the calculated row height
				onLayoutChange={(currentLayout) => {
					console.log(currentLayout);
				}}
				isDraggable={false} // Enable dragging
				isResizable={false} // Enable resizing
				allowOverlap={false}
				width={1200}
			>
				{/* Render grid items */}
				{layout.map((todo) => (
					<div
						key={todo.i}
						style={{
							backgroundColor: expandedItem === todo.i ? "lightblue" : "white",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							border: "1px solid black",
							cursor: "pointer",
						}}
						onClick={() => handleItemClick(todo.i)} // Handle click to expand
					>
						{/* {`Card ${todo.i.toUpperCase()}`} */}
                        click
					</div>
				))}
			</ResponsiveGridLayout>
		</div>
	);
};




export default ItemC;
