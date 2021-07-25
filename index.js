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
		if (galleryImage[i].classList.contains('art') || galleryImage[i].classList.contains('pets')) {
    	galleryImage[i].classList.add('hide');
		} else {
    	galleryImage[i].classList.remove('hide');
		}
  }
}

function showPets() {
  var i;
  var galleryImage = document.getElementsByClassName("galleryImage");
  for (i = 0; i < galleryImage.length; i++) {
		if (galleryImage[i].classList.contains('nature') || galleryImage[i].classList.contains('art')) {
    	galleryImage[i].classList.add('hide');
		} else {
    	galleryImage[i].classList.remove('hide');
		}
  }
}

function showArt() {
  var i;
  var galleryImage = document.getElementsByClassName("galleryImage");
  for (i = 0; i < galleryImage.length; i++) {
		if (galleryImage[i].classList.contains('nature') || galleryImage[i].classList.contains('pets')) {
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



// Pets Pop up
let imagePetsIndexes = [1, 2, 3];
let selectedPetsIndex = null;

imagePetsIndexes.forEach((i) => {
  const image = document.createElement('img');
  image.src = `images/pets-${i}.png`;
  image.classList.add('galleryImage');
  image.classList.add('pets');

  image.addEventListener('click', () => {
    popUp.style.transform = `translateY(0)`;
    selectedImage.src = `images/pets-${i}.png`;
    selectedImage.alt = `Pets!`;
  })

  gallery.appendChild(image);
});

// Art Pop up
let imageArtIndexes = [1];
let selectedArtIndex = null;

imageArtIndexes.forEach((i) => {
  const image = document.createElement('img');
  image.src = `images/art-${i}.png`;
  image.classList.add('galleryImage');
  image.classList.add('art');

  image.addEventListener('click', () => {
    popUp.style.transform = `translateY(0)`;
    selectedImage.src = `images/art-${i}.png`;
    selectedImage.alt = `Art!`;
  })

  gallery.appendChild(image);
});

// Click out of the pop up
popUp.addEventListener('click' , () => {
  popUp.style.transform = `translateY(-100%)`;
  popUp.src = '';
  popUp.alt = '';
});