	
var favoriteProducts=[];
// отримуємо раніше збережені в браузері обрані продукти
if( window.localStorage.getItem('product')){
	favoriteProducts = window.localStorage.getItem('product');
	//розділяємо стрічку у масив
	favoriteProducts = favoriteProducts.split(',')
}
console.log(favoriteProducts);
$('button.add-to-favorites').each(function(){
	var product_id = $(this).attr('data-id');
	// перевіряємо чи айді товару є в списку обраних
	if(favoriteProducts.includes(product_id)==true){
		$(this).addClass('in-favorites');
	}
})

updateFavoritesCounter();

$(document).on('click', 'button.add-to-favorites', function(){
		//console.log(this);
		var product_id = $(this).attr('data-id');
		//var currentCount=Number($('#favorits span').html());
		if(favoriteProducts.includes(product_id)==true){
	   //рибираємо зі списку обраних
	  //визначаємо позицію елементу в масиві
	  var index = favoriteProducts.indexOf(product_id);
	  //приховуємо залите серце
	  $(this).removeClass('in-favorites');
       //видаляємо айді продукту з масиву за індексом
       favoriteProducts.splice(index, 1);
         // віднімаємо 1 від лічильника обраних
        // currentCount--;
    }
    else{ 

       //показуємо залите серце
       $(this).addClass('in-favorites');
       favoriteProducts.push(product_id);


		//одаємо 1 елемент до  лічилиника обраноих
		//currentCount=currentCount+1;
		//currentCount++;
		//оновити дані в лічильнику
	}
     //зберігаємо список обраних в браузер
     window.localStorage.setItem('product', favoriteProducts);
     updateFavoritesCounter();

	//$('#favorits span').html(currentCount);
	$('#favorits span').html(favoriteProducts.length);
	
	console.log(favoriteProducts);
});
function updateFavoritesCounter(){
	$('#favorits span').html(favoriteProducts.length);
	if(favoriteProducts.length==0){
		$('#favorits span').addClass('empty');
	}else{
		
		// показати лічильник
		$('#favorits span').removeClass('empty');
	}
}




$(document).ready(function(){

	var sliderOptions = {
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
		function createProductHtml(product){
			var html = `<li class="product-card home__product-list-card">
			<div class="thumb">
			<button  data-id="${product.id}" class="add-to-favorites">
			<svg>
			<use href="#heart"> </use>
			</svg>
			<svg class="filled">
			<use href="#heart1"> </use>
			</svg>

			</button>
			<a href="">
			<img src="${product.image}">
			</a>
			</div>
			<a href="#"class="title">
			${product.title}
			</a>
			<div class="old-price">
			${product.price * 1.2} ₴
			</div>
			<div class="price">
			${product.price} ₴
			</div>
			<div class="availablity">
			Є в наявності 
			</div>
			</li>`;
			return html;


		}

		function getProducts(){
			fetch('http://fakestoreapi.com/products')
			.then((responce)=>{
				return responce.json();
			})
			.then((products)=>{
var allHtml = '';
var count = 0;
				products.forEach((product)=>{
					if(count < 5){


					
					var html = createProductHtml(product);
					allHtml = allHtml + html;
					count++;}
				})
				$('.home__product-list ul').html(allHtml);
			})
			.catch((error)=>{
				console.log(error);
			})
		}
		getProducts();