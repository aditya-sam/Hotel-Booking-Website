setHeader();
setFooter();

function setHeader() {
    var header =   `<button type="button" id="login" class="btn btn-light btn-sm" data-toggle="modal" data-target="#exampleModal" onclick="setLoginModal()" style="display: flex; margin: 1%"> 
                        LOGIN 
                    </button>
                    <button type="button" id="logout" class="btn btn-light btn-sm" onclick="logout()" style="display: none; margin: 1%">
                        LOGOUT
                    </button>` ;

    document.getElementById('head').innerHTML += header;
}

function setFooter() {
    var footer = `<div class="foot"> 
                        <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#exampleModal1" onclick="setContactModal()" style="display: flex;"> 
                            Contact Us 
                        </button> 
                    </div> 
                    <div id="copyright">&copy;<span>2020 ROOM SEARCH PVT LTD</span></div> 
                    <div class="foot"> 
                        <a href="https://www.twitter.com" target="_blank"> 
                            <img src="E:\HTML\Hotel Booking Website\assests\images\twitter.png" alt="twitter"></a> 
                        <a href="https://www.instagram.com" target="_blank"> 
                            <img src="E:\HTML\Hotel Booking Website\assests\images\instagram.png" alt="instagram"></a> 
                        <a href="https://www.facebook.com" target="_blank"> 
                            <img src="E:\HTML\Hotel Booking Website\assests\images\facebook.png" alt="facebook"></a> 
                    </div>` ;

    document.getElementById('foot').innerHTML += footer;
}

function setLoginModal() {
    var loginModal = `<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" data-backdrop="false"> 
                        <div class="modal-dialog" role="document"> 
                            <div class="modal-content"> 
                                <div class="modal-header"> 
                                    <h5 class="modal-title" id="exampleModalLabel">Please Login</h5> 
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"> 
                                        <span aria-hidden="true">&times;</span> 
                                    </button> 
                                </div> 
                                <div class="modal-body"> 
                                    <form action="E:\HTML\Hotel Booking Website\index.html" method="GET"> 
                                        <p><label for="Username">Username:</label> 
                                            <input type="email" id="Username" placeholder="Enter Username" required/></p> 
                                        <p><label for="Password">Password:</label> 
                                            <input type="password" id="Password" placeholder="Enter Password" required></p> 
                                    </form> 
                                </div> 
                                <div class="modal-footer"> 
                                    <button type="button" id="submit" class="btn btn-primary" data-dismiss="modal" onclick="login()" style="display: flex; margin: 0 auto;">Login</button> 
                                </div> 
                            </div> 
                        </div> 
                    </div>` ;

    document.getElementById('head').innerHTML += loginModal;
}

function setContactModal() {
    var contactModal = `<div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" data-backdrop="false"> 
                            <div class="modal-dialog" role="document"> 
                                <div class="modal-content"> 
                                    <div class="modal-header"> 
                                        <h5 class="modal-title" id="exampleModalLabel">Get in touch</h5> 
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"> 
                                            <span aria-hidden="true">&times;</span> 
                                        </button> 
                                    </div> 
                                    <div class="modal-body"> 
                                        <p>Thank you for reaching out!!!</p> 
                                        <P>Please enter your email and we will get back to you.</P> 
                                        <form action="E:\HTML\Hotel Booking Website\index.html" method="GET"> 
                                            <p><label for="Username">Email:</label> 
                                                <input type="email" id="Username" placeholder="Enter your email id" required /> 
                                            </p> 
                                        </form> 
                                    </div> 
                                    <div class="modal-footer"> 
                                        <button type="button" class="btn btn-primary" data-dismiss="modal">Submit</button> 
                                    </div> 
                                </div> 
                            </div> 
                        </div>`;

    document.getElementById('foot').innerHTML += contactModal;
}

function login() {
    var x = document.getElementById('Username');
    let username = document.getElementById('Username').value;
    let password = document.getElementById('Password').value;
    let submit = document.getElementById('submit').value;

    localStorage.setItem("user", "admin");
    localStorage.setItem("pass", "admin");

    let user = localStorage.getItem("user");
    let pass = localStorage.getItem("pass");
    if (user == username && pass == password) {
        alert("Successfully Loggedin");
        document.getElementById('logout').style.display = 'flex';
        document.getElementById('login').style.display = 'none';
        document.getElementById('pay').innerHTML = `<button type="button" class="btn btn-success" onclick="payNow()">Pay Now</button>`
    }
}

function logout() {
    document.getElementById('login').style.display = 'flex';
    document.getElementById('logout').style.display = 'none';
    document.getElementById('pay').innerHTML = `<button type="button" class="btn btn-success" disabled>Pay Now</button>`
}

function payNow() {
    alert('Hi your booking is successful');
}