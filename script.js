function navToggle(){
	var links = document.getElementById('navUL');
	links.classList.toggle("_active");
}

$('.owl-carousel').owlCarousel({
	items:3,
	lazyLoad:true,
	loop:true,
	margin:24,
	responsive:{
		0:{
			 items:1,
			 nav:true
		},
		592:{
			 items:3,
			 nav:false
		},
		1000:{
			 items:5,
			 nav:true,
			 loop:false
		}
  }
});