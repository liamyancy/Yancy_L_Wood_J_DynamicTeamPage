(() => {

	let teamImages = document.querySelectorAll(".imageContainer"),
		houseDescription = document.querySelector(".memberBio");

	const bioData = [
		["john", `My name is John Wood. I am 20 years old and come from Blue Mountains Ontario Canada. I like playing
		 soccer, videogames and listening to music. I am currently attending Fanshawe College and am enrolled in 
		 the Interactive Media Design program. After the program ends, I aim to be a web developer as far as employment. `],

		["liam", `My name is Liam Yancy, and I am 18 years old. I am from Ingersoll Ontario and my hobbies include
		soccer, hanging out with friends, and playing games such as League of Legends, CS:GO, and Rocket League. I
		Currently go to school at Fanshawe College in Downtown London, aspiring to be a Web Developer upon graduation. `]

	];

	function showBio() {
		houseDescription.textContent = `${bioData[this.dataset.offset][1]}`;
		classList.add("memberInfo");
	}

	teamImages.forEach(button => button.addEventListener("click", showBio));
})();