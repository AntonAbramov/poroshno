$(document).ready(function () {
	var myMap;

	// Дождёмся загрузки API и готовности DOM.
	ymaps.ready(init);

	function init () {
	    // Создание экземпляра карты и его привязка к контейнеру с
	    // заданным id ("map").
	    myMap = new ymaps.Map('map', {
	        // При инициализации карты обязательно нужно указать
	        // её центр и коэффициент масштабирования.
	        center:[55.76, 37.64], // Москва
	        zoom:10
	    });
	}
});

$(window).resize(function(){

});

$(window).load(function () {
        /**
         * Set theme and captions
         */
//        $('#countdown').timeTo(100, function(){ alert('Countdown finished'); });
        $('#countdown').timeTo({
            timeTo: new Date(new Date('Mon Apr 27 2014 09:00:00 GMT+0300 (EEST)')),
            displayDays: 2,
            theme: "black",
            displayCaptions: true,
            fontSize: 48,
            captionSize: 14
        });


});

