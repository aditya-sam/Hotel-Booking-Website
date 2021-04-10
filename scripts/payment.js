const params = new URLSearchParams(window.location.search)
let adult = params.get('adult');
let fullName = params.get('name');
let fromDate = new Date(params.get('fromDate'));
let toDate = new Date(params.get('toDate'));
let price = params.get('price');
let days = parseInt((toDate - fromDate) / (24 * 3600 * 1000));

document.getElementsByClassName('para')[0].innerHTML += ` ${fullName}`;
document.getElementsByClassName('para')[1].innerHTML += ` ${adult}`;
document.getElementsByClassName('para')[2].innerHTML += ` ${params.get('fromDate')}`;
document.getElementsByClassName('para')[3].innerHTML += ` ${params.get('toDate')}`;
document.getElementsByClassName('para')[4].innerHTML += ` ${price} x ${adult} Adults x ${days} Nights`;
document.getElementsByClassName('para')[5].innerHTML += ` ${price}`;

function payNow() {
    alert('Hi your booking is successful');
}