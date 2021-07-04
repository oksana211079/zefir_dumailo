	
$(document).ready(function(){

	var sliderOptions={
		prevArrow:'<div class="prev-button"> <svg> <use href="#chevron-right"></use> </svg></div>',
		nextArrow:'<div class="next-button"><svg> <use href="#chevron-right"></use> </svg></div>'
	};
	$( '.home__banner-slider').slick(sliderOptions);

});
		//$(document).on('ready', function(){
        //alert('jquery is ok');

		//})
		//$('.header__search form button').on('click', function() {
		//	var searchTerm = $('.header__search form input').val();
		//	alert( searchTerm );
		//});

		$(document).on('click', '.header__search form button', function() {
			var searchTerm = $('.header__search form input').val();
			alert( searchTerm );
		});
		$(document).on('click', '.header__menu-toggle', function() {
			//$(this) == $('.header__menu-toggle')
        //if ($(this).hasClass('opened')){
       // $(this).removeClass('opened');

        //} else {
        //	$(this).addClass('opened');
        //}
        // змінюємо клас для кнопки
        $(this).toggleClass('opened');
        $('.slide-menu').toggleClass('opened');
    });
		//var FirstName="rr";
		//var lastName="tt";
		//var fullName=
		//console.log(fullName)
		var myData ={
			FirstName:"rr",
			lastName:"tt",
			age:31
		}
		function fullNamefunction(first, last) {
			var fullName = first+' '+ last	;
			return fullName;

		}
		var myFullName = fullNamefunction( myData.FirstName, myData.lastName);
		//alert(myFullName);
