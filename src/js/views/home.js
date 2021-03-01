import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const testPrivado = () => {
		fetch("https://3000-emerald-jellyfish-qyn0ga41.ws-us03.gitpod.io/profile", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + sessionStorage.getItem("u_token")
			}
			// body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Success:", data);
				// sessionStorage.setItem("u_token", data.token);
				// setRedirect(true);
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
			<button className="btn btn-primary" onClick={() => testPrivado()}>
				TEST PRIVADO
			</button>
		</div>
	);
};
