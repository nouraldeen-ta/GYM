function initMap() {
    var beirut = { lat: 33.893791, lng: 35.501778 };
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 4, center: beirut }
    );
    var marker = new google.maps.Marker({ position: beirut, map: map });
}
$("#navbar a,btn").on("click", function (event) {
    if (this.hash !== "") {
        Event.proventDefault();
        const hash = this.hash;
        $("html,body").animate({scrollTop:$(hash).offSet().top -100 },800);
    }
});
