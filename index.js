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
