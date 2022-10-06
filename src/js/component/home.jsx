import React from "react";
import "./home.css";
import "./contador.jsx";

//create your first component
const Home = (props) => {
	let numeros = props.tiempo.toString();
	return (
		<div className="d-flex justify-content-center myBackground">
			<div className="mySquares">
			<i class="fa-regular fa-clock"></i>
			</div>
			<div className="mySquares">
				{numeros[numeros.length -6] ? numeros[numeros.length -6] : "0"}
			</div>
			<div className="mySquares">
				{numeros[numeros.length -5] ? numeros[numeros.length -5] : "0"}
			</div>
			<div className="mySquares">
				{numeros[numeros.length -4] ? numeros[numeros.length -4] : "0"}
			</div>
			<div className="mySquares">
				{numeros[numeros.length -3] ? numeros[numeros.length -3] : "0"}
			</div>
			<div className="mySquares">
				{numeros[numeros.length -2] ? numeros[numeros.length -2] : "0"}
			</div>
			<div className="mySquares">
				{numeros[numeros.length -1] ? numeros[numeros.length -1] : "0"}
			</div>
		</div>
	);
};

export default Home;
