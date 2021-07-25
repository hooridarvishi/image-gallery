// Image filtering functions

function showAll() {
  var galleryImage = document.getElementsByClassName("galleryImage");
  for (let i = 0; i < galleryImage.length; i++) {
		if (galleryImage[i].classList.contains('hide')) {
    	galleryImage[i].classList.remove('hide');
		} 
  }
}

function showNature() {
  var i;
  var galleryImage = document.getElementsByClassName("galleryImage");
  for (i = 0; i < galleryImage.length; i++) {
		if (galleryImage[i].classList.contains('puppies') || galleryImage[i].classList.contains('chickens')) {
    	galleryImage[i].classList.add('hide');
		} else {
    	galleryImage[i].classList.remove('hide');
		}
  }
}

function showPuppies() {
  var i;
  var galleryImage = document.getElementsByClassName("galleryImage");
  for (i = 0; i < galleryImage.length; i++) {
		if (galleryImage[i].classList.contains('nature') || galleryImage[i].classList.contains('chickens')) {
    	galleryImage[i].classList.add('hide');
		} else {
    	galleryImage[i].classList.remove('hide');
		}
  }
}

function showChickens() {
  var i;
  var galleryImage = document.getElementsByClassName("galleryImage");
  for (i = 0; i < galleryImage.length; i++) {
		if (galleryImage[i].classList.contains('nature') || galleryImage[i].classList.contains('puppies')) {
    	galleryImage[i].classList.add('hide');
		} else {
    	galleryImage[i].classList.remove('hide');
		}
  }
}

// Nature Pop up 
let gallery = document.getElementById('gallery');
let popUp = document.getElementById('popUp');
let selectedImage = document.getElementById('selectedImage');
let imageIndexes = [1, 2, 3, 4, 5];
let selectedIndex = null;

imageIndexes.forEach((i) => {
  const image = document.createElement('img');
  image.src = `images/nature-${i}.png`;
  image.classList.add('galleryImage');
  image.classList.add('nature');

  image.addEventListener('click', () => {
    popUp.style.transform = `translateY(0)`;
    selectedImage.src = `images/nature-${i}.png`;
    selectedImage.alt = `Florida nature photo ${i}`;
  })

  gallery.appendChild(image);
});



// Chicken Pop up
let imageChickenIndexes = [1, 2];
let selectedChickenIndex = null;

imageChickenIndexes.forEach((i) => {
  const image = document.createElement('img');
  image.src = `images/chickens-${i}.jpeg`;
  image.classList.add('galleryImage');
  image.classList.add('chickens');

  image.addEventListener('click', () => {
    popUp.style.transform = `translateY(0)`;
    selectedImage.src = `images/chickens-${i}.jpeg`;
    selectedImage.alt = `Chickens!`;
  })

  gallery.appendChild(image);
});

// Click out of the pop up
popUp.addEventListener('click' , () => {
  popUp.style.transform = `translateY(-100%)`;
  popUp.src = '';
  popUp.alt = '';
});