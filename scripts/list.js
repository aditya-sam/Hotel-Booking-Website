function listHotels(cities) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `abc?=${cities}`, true)
    xhr.send();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var hotels = JSON.parse(this.responseText);
            for (let eachHotel of hotels) {
                let container = document.createElement('a');
                container.setAttribute('href', 'E:\HTML\Hotel Booking Website\detail.html');
                container.setAttribute('class', 'hotels');
                container.setAttribute('style', 'text-decoration: none; color: black;');
                let img = document.createElement('img');
                img.setAttribute('src', 'hotelImg.png');
                container.appendChild(img);
                let name = document.createElement('div');
                let nameHeading = document.createElement('h3');
                let text = hotdocument.createTextNode(hotels.name);
                nameHeading.appendChild(text);
                name.appendChild(nameHeading);
                container.appendChild(name);
                let stars = document.createElement('p');
                for (var i = 0; i < hotels.star; i++) {
                    let span = document.createElement('span');
                    span.setAttribute('class', 'fa fa-star checked');
                    stars.appendChild(span);
                }
                container.appendChild(stars);
                let city = document.createElement('p');
                let cityName = document.createTextNode(cities);
                city.appendChild(cityName);
                container.appendChild(city);
                document.getElementsByClassName('list').appendChild(container);
            }
        }
    }
}
listHotels(window.location.hash.slice(1));

// var map;
// function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 8
//     });
//     document.getElementById('map').innerHTML += map;
// }