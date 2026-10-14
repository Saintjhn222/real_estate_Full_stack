import { projects } from "./projects.js";

const renderProjects = () => {
	let html = "";

	projects.forEach((project) => {
		const { image, name, location, status, prices } = project;
		html += `
		
		<div class="card">
		<a href="./contact.html">
			<img src=${image} />
			<h1>${name}</h1>
			<p>Location: ${location}</p>
			<p>Status: ${status}</p>
			<h3>Prices: ${prices}</h3>
			</a>
		</div> 
		
        
        `;
	});

	document.querySelector(".js-grid").innerHTML = html;
};

renderProjects();
