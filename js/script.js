
const headerFunc = () => {

	const header = document.getElementById("header");
	const welcomeSection = document.querySelector(".welcome");
	let windowTop = 0;


	const checkHeader = () =>{
		windowTop = window.pageYOffset;
		if(windowTop >= welcomeSection.offsetHeight){
			header.classList.add('header_fixed');
		}
		else{
			header.classList.remove('header_fixed');
		}

	};

	window.addEventListener("DOMContentLoaded", checkHeader);

	window.addEventListener('scroll', checkHeader);

};


const spoilerFunc = () => {
	const spoilerTexts = ["asdasdsad", "qqqqq", "ssssss"];
	let textNum = 0;

	document.querySelectorAll(".spoiler__header").forEach(spoiler => {
		spoiler.addEventListener("click", () => {
			const parent = spoiler.parentNode;
			if(parent.classList.contains("spoiler__active")){
				parent.classList.remove("spoiler__active");
			}
			else{
				document.querySelectorAll(".spoiler__header").forEach(spoiler1 => {
					spoiler1.parentNode.classList.remove('spoiler__active');
					parent.classList.add('spoiler__active');
				});

				spoiler.scrollIntoView({
					behavior: 'smooth',
					block: 'center'
				});
					
			}
		});
	});


};

const swiper = () => {
	let position = 0;
	const slidesToShow = 1;
	const slidesToScroll = 1;
	const prevBtn = document.querySelector(".prevButton");
	const nextBtn = document.querySelector(".nextButton");
	const container = document.querySelector(".comment-info-wrapper");
	const comentTexts = document.querySelectorAll(".comment__text");
	

	prevBtn.addEventListener("click", () => {
		position--;
		setPosition();
		checkBtn();
	});
	

	nextBtn.addEventListener("click", () => {
		position++;
		setPosition();
		checkBtn();
	});





	const setPosition = () => {
		comentTexts.forEach(comment => {
			comment.style.transform = `translateX(-${100 * position}%)`;
		});
	};

	const checkBtn = () => {
		if(position <= 0){
			position = 0;
			prevBtn.style.display = 'none';
		}
		else if(position > 0 && position <comentTexts.length - 1){
			prevBtn.style.display = nextBtn.style.display = 'block';
		}
		else if(position >= comentTexts.length - 1){
			position = comentTexts.length - 1;
			nextBtn.style.display = 'none';
		}
	};

	checkBtn();
};

const scroller = () => {
	
	const nav = document.querySelectorAll(".nav__link");
	nav.forEach( a => {
		a.addEventListener("click", () => {
			const content = document.querySelector(`.${a.name}`);
			content.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	});
};


const burger = () => {
	const burgerBtn = document.querySelector(".nav__toggle");
	const navigation = document.querySelector(".nav");

	burgerBtn.addEventListener("click", ()=>{
		burgerBtn.classList.toggle("active");
		navigation.classList.toggle("nav_active");
	});
};



headerFunc();

spoilerFunc();

swiper();

scroller();

burger();

							