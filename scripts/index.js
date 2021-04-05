function viewMore() {
    let cities = `<div class="card">
    <a>
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/4d/46/b8/chennai-madras.jpg">

        <div class="middle"></div>
        <div class="text">Chennai</div>
    </a>
</div>
<div class="card">
    <a>
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/33/fc/fc/agra.jpg">

        <div class="middle"></div>
        <div class="text">Agra</div>
    </a>
</div>
<div class="card">
    <a>
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/10/a3/3b/8a/screenshot-2017-09-12.jpg">

        <div class="middle"></div>
        <div class="text">Jaipur</div>
    </a>
</div>
<div class="card">
    <a>
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/0c/d2/2f/7a/palace-from-the-outside.jpg">

        <div class="middle"></div>
        <div class="text">Bengaluru</div>
    </a>
</div>`;

    document.getElementsByClassName('city-card')[0].innerHTML += cities;
    document.getElementById('view').innerHTML = '<button type="button" class="btn btn-secondary btn-sm" data-toggle="modal" onclick="viewLess()">View Less</button>'
}

function viewLess() {
    let cities = `<div class="card">
    <a href="E:\HTML\Hotel Booking Website\list.html">
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/33/fe/a2/new-delhi.jpg">

        <div class="middle"></div>
        <div class="text">Delhi</div>
    </a>
</div>
<div class="card">
    <a>
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/33/fc/f0/goa.jpg">

        <div class="middle"></div>
        <div class="text">Goa</div>
    </a>
</div>
<div class="card">
    <a>
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/0f/98/f7/df/charminar.jpg">

        <div class="middle"></div>
        <div class="text">Hyderabad</div>
    </a>
</div>
<div class="card">
    <a>
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/33/fe/ac/kolkata-calcutta.jpg">

        <div class="middle"></div>
        <div class="text">Kolkata</div>
    </a>
</div>`;

    document.getElementsByClassName('city-card')[0].innerHTML = cities;
    document.getElementById('view').innerHTML = '<button type="button" class="btn btn-secondary btn-sm" data-toggle="modal" onclick="viewMore()">View More</button>'

}