
var login = document.getElementById("container1");
var signup = document.getElementById("container2");
var container3 = document.getElementById("container3");
var container4 = document.getElementById("container4");
var copyright = document.getElementById("copyright");

login.style.display = "block";  //login出現
container3.style.display = "block"; //container3出現
document.getElementById("username").value = "";
document.getElementById("password").value = "";
signup.style.display = "none";  //signup消失
container4.style.display = "none"; //container4消失
copyright.style.margin = "200px 0px 0px 0px";


function show_hide() {
    var login = document.getElementById("container1");
    var signup = document.getElementById("container2");
    var container3 = document.getElementById("container3");
    var container4 = document.getElementById("container4");
    var copyright = document.getElementById("copyright");

    if (login.style.display === "none") {
        login.style.display = "block";  //login出現
        container3.style.display = "block"; //container3出現
        document.getElementById("username").value="";
        document.getElementById("password").value="";
        signup.style.display = "none";  //signup消失
        container4.style.display = "none"; //container4消失
        copyright.style.margin = "200px 0px 0px 0px";
    } else {
        login.style.display = "none";   //login消失
        container3.style.display = "none"; //container3消失
        signup.style.display = "block"; //signup出現
        container4.style.display = "block"; //container4出現
        signup.style.visibility="visible";
        copyright.style.margin = "200px 0px 0px 0px";

        document.getElementById("phoneNum").value="";
        document.getElementById("fullname").value="";
        document.getElementById("password2").value="";
        document.getElementById("").value="";
    }
}

function toFB(){
    window.location.href = "https://www.facebook.com/?locale=zh_TW";
}

function fgtPW(){
    window.location.href = "https://i.instagram.com/accounts/password/reset/?hl=zh-tw";
}

function toGglPly(){
    window.location.href = "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D8A753279-7AA3-43AF-B9EA-BFFDEF867E18%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps://www.google.com/&pli=1";
}

function haha(){
    window.location.href = "https://youtu.be/dQw4w9WgXcQ?si=btnqhyaV-VpF9RRP";
}