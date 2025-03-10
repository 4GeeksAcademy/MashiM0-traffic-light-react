import React, { useState } from "react";


const Home = () => {
	const [color, setColor] = useState("red")
	return (
		<>
			<div className="container d-flex justify-content-center">
				<div className="traffic-light-pole"/>
			</div>
			<div className="container d-flex justify-content-center">
				<div className="traffic-light-body d-flex flex-column p-3 mx-auto">
					<div onClick={() => setColor("red")} className={"light-red my-2 " + (color === "red" ? "red-glow" : " ")}/>
					<div onClick={() => setColor("yellow")} className={"light-yellow my-2 " + (color === "yellow" ? "yellow-glow" : " ")}></div>
					<div onClick={() => setColor("green")} className={"light-green my-2 " + (color === "green" ? "green-glow" : " ")}></div>
				</div>
			</div>
		</>
	);
};

export default Home;