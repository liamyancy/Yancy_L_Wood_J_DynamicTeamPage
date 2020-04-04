(() => {

	let teamImages = document.querySelectorAll(".imageContainer"),
		houseDescription = document.querySelector(".memberBio");

	const bioData = [
		["john", `John Bio. `],

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