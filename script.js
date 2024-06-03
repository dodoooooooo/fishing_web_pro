var login = document.getElementById("container1");
var signup = document.getElementById("container2");
var container3 = document.getElementById("container3");
var container4 = document.getElementById("container4");

login.style.display = "block";
container3.style.display = "block";
signup.style.display = "none";
container4.style.display = "none";

function show_hide() {
    if (login.style.display === "none") {
        login.style.display = "block";
        container3.style.display = "block";
        signup.style.display = "none";
        container4.style.display = "none";
    } else {
        login.style.display = "none";
        container3.style.display = "none";
        signup.style.display = "block";
        container4.style.display = "block";
    }
}

function toFB() {
    window.location.href = "https://www.facebook.com/?locale=zh_TW";
}

function fgtPW() {
    window.location.href = "https://i.instagram.com/accounts/password/reset/?hl=zh-tw";
}

function toGglPly() {
    window.location.href = "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D8A753279-7AA3-43AF-B9EA-BFFDEF867E18%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps://www.google.com/&pli=1";
}

function haha() {
    window.location.href = "https://youtu.be/dQw4w9WgXcQ?si=btnqhyaV-VpF9RRP";
}

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('registerEmail').value.trim().toLowerCase(); // 確保電子郵件去除空格並轉為小寫
    const username = document.getElementById('registerUsername').value.trim();
    const password = document.getElementById('registerPassword').value.trim();
    const fullname = document.getElementById('registerFullname').value.trim();

    console.log('開始註冊過程'); // 調試信息

    // 檢查手機號碼或電子郵件是否已存在
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        console.log(`Checking key: ${key}`); // 調試信息

        let user;
        try {
            user = JSON.parse(localStorage.getItem(key));
        } catch (error) {
            console.log(`無法解析的項目: ${key}`); // 調試信息
            continue; // 跳過無法解析的項目
        }

        console.log(`Checking user: ${JSON.stringify(user)}`); // 調試信息
        if (user.email === email) {
            alert('手機號碼或電子郵件已存在');
            return;
        }
    }

    // 檢查用戶名是否已存在
    if (localStorage.getItem(username)) {
        alert('用戶名稱已存在');
        return;
    }

    const user = {
        email: email,
        username: username,
        password: password,
        fullname: fullname
    };
    localStorage.setItem(username, JSON.stringify(user));
    alert('註冊成功');
    console.log('註冊成功');
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    console.log('開始登入過程'); // 調試信息

    const storedUser = localStorage.getItem(username);
    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.password === password) {
            alert('登入成功');
            window.location.href = "https://dodoooooooo.github.io/web_hw1/"; // 登入成功後跳轉到等候網頁
        } else {
            alert('密碼錯誤');
        }
    } else {
        alert('用戶不存在');
    }
});

function togglePasswordVisibility(passwordFieldId) {
    const passwordField = document.getElementById(passwordFieldId);
    const toggleBtn = passwordField.nextElementSibling;
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleBtn.textContent = '隱藏';
    } else {
        passwordField.type = 'password';
        toggleBtn.textContent = '顯示';
    }
}

function toFB() {
    window.location.href = "https://www.facebook.com/?locale=zh_TW";
}

function fgtPW() {
    window.location.href = "https://i.instagram.com/accounts/password/reset/?hl=zh-tw";
}

function toGglPly() {
    window.location.href = "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D8A753279-7AA3-43AF-B9EA-BFFDEF867E18%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps://www.google.com/&pli=1";
}

function haha() {
    window.location.href = "https://youtu.be/dQw4w9WgXcQ?si=btnqhyaV-VpF9RRP";
}

function show_hide() {
    const login = document.getElementById("container1");
    const signup = document.getElementById("container2");
    const container3 = document.getElementById("container3");
    const container4 = document.getElementById("container4");

    if (login.style.display === "none") {
        login.style.display = "block";
        container3.style.display = "block";
        signup.style.display = "none";
        container4.style.display = "none";
    } else {
        login.style.display = "none";
        container3.style.display = "none";
        signup.style.display = "block";
        container4.style.display = "block";
    }
}
