document.addEventListener("DOMContentLoaded", function() {

	// --------------------- images

	const imagesSrc = [];
	imagesSrc[0] = 'images/Medicine-Lake.jpg';
	imagesSrc[1] = 'images/penanjakan.jpg';
	imagesSrc[2] = 'images/shutterstock.jpg';
	imagesSrc[3] = 'images/treesAlongTheRiver.jpg';

	// --------------------- variables

	const displayedImage = document.querySelector('.displayedImage');

	const prevImgBtn = document.querySelector('.prevPicture');
	const nextImgBtn = document.querySelector('.nextPicture');
	let countImages = 0;

	displayedImage.src = imagesSrc[countImages]

	function prevImg() {
		countImages --;
		if (countImages < 0 ) {
			countImages = 3;
		}
		displayedImage.src = imagesSrc[countImages]

		animationFadeInOut('-100%');
		return countImages;
	}

	function prevImgKeyPress(e) {
		if( e.key == "ArrowLeft") {
			prevImg();
		}
	}

	function nextImg() {
		countImages ++;
		if( countImages === imagesSrc.length ) {
			countImages = 0;
		}
		displayedImage.src = imagesSrc[countImages];
		animationFadeInOut('100%');
		return countImages;
	}

	function nextImgKeyPress(e) {
		if(e.key =="ArrowRight") {
			nextImg();
		}
	}
	// ------------------ animations

	function animationFadeInOut (position) {
		displayedImage.animate([
			{opacity: 0, transform: `translate3d(${position}, 0, 0)`},
			{opacity: 1, transform: 'none'}
		], {
			duration: 500,
		});
	}
	// ------------------- Intervals

	setInterval(nextImg, 5000);

	//-------------------- events

	prevImgBtn.addEventListener('click', prevImg);
	document.addEventListener('keydown', prevImgKeyPress);
	nextImgBtn.addEventListener('click', nextImg);
	document.addEventListener('keydown', nextImgKeyPress);


});