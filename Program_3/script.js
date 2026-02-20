document.getElementById('registrationForm').addEventListener('submit', function (e) {

    e.preventDefault(); // Prevent page reload

    const get = id => document.getElementById(id).value.trim();

    const name   = get('Name');
    const email  = get('email');
    const mobile = get('mobile');
    const blood  = document.getElementById('bloodGroup').value;
    const gender = document.querySelector('input[name="gender"]:checked');

    const patterns = {
        name: /^[A-Za-z\s'-]{2,50}$/,
        email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        mobile: /^[6-9]\d{9}$/
    };

    if (!patterns.name.test(name)) {
        alert("Invalid Name");
        return;
    }

    if (!patterns.email.test(email)) {
        alert("Invalid Email");
        return;
    }

    if (!patterns.mobile.test(mobile)) {
        alert("Invalid Mobile");
        return;
    }

    if (!blood) {
        alert("Select Blood Group");
        return;
    }

    if (!gender) {
        alert("Select Gender");
        return;
    }

    alert("Registration Successful!");
});