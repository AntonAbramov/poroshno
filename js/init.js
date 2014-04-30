$(document).ready(function () {
	ymaps.ready(init);
        var myMap,
            myPlacemark;

        function init(){
            myMap = new ymaps.Map("map", {
                center: [58.615388,49.816377],
                zoom: 10,
	            controls: ["default","routeEditor"]
            });
			myMap.controls.add('typeSelector');
			myMap.controls.add('zoomControl');
            myPlacemark = new ymaps.Placemark([58.615388,49.816377], {
                hintContent: 'Какой то город!',
                balloonContent: 'Контент тестовый'
            });

            myMap.geoObjects.add(myPlacemark);
        }


});

$(window).resize(function(){

});

$(window).load(function () {

});

//        http://lexxus.github.io/jq-timeTo/
var time = function(){
	if ($('#countdown').length) {
		$('#countdown').timeTo({
			timeTo: new Date(new Date('Mon Apr 27 2014 09:00:00 GMT+0300 (EEST)')),
			displayDays: 2,
			theme: "black",
			displayCaptions: true,
			fontSize: 48,
			captionSize: 14
		});
	}

}
