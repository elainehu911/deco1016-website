function goSignUp() {
  location.href = "signup.html";
}

function goHome() {
  location.href = "home.html";
}

var obj = {};
function next1() {
  var s1 = document.getElementById("s1").value;
  if (s1 == "0") {
    alert("please complete the form");
    return;
  }
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var birth = document.getElementById("birth").value;
  var email1 = document.getElementById("email1").value;
  var email2 = document.getElementById("email2").value;
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (!reg.test(email1) || !reg.test(email2)) {
    alert("The email format is incorrect");
    return;
  }
  if (email1 != email2) {
    alert("Mailbox is inconsistent");
    return;
  }

  var g = "";
  var genders = document.getElementsByName("gender");
  for (var i = 0; i < genders.length; i++) {
    if (genders[i].checked) {
      g = genders[i].value;
    }
  }

  if (
    firstName == "" ||
    lastName == "" ||
    birth == "" ||
    email1 == "" ||
    email2 == "" ||
    g == ""
  ) {
    alert("please complete the form");
    return;
  }
  obj.name = firstName;
  obj.gender = g;
  document.getElementById("a").innerHTML = firstName;
  document.getElementById("b").innerHTML = g;
  document.getElementsByClassName("one")[0].style.display = "none";
  document.getElementsByClassName("two")[0].style.display = "block";
}
function next2() {
  var s2 = document.getElementById("s2").value;
  if (s2 == "0") {
    alert("please complete the form");
    return;
  }
  var phone = document.getElementById("phone").value;
  var streetNumber = document.getElementById("streetNumber").value;
  var streetName = document.getElementById("streetName").value;
  var suburb = document.getElementById("suburb").value;
  var postCode = document.getElementById("postCode").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  if (
    phone == "" ||
    streetNumber == "" ||
    streetName == "" ||
    suburb == "" ||
    postCode == "" ||
    phoneNumber == ""
  ) {
    alert("please complete the form");
    return;
  }
  obj.phone = phoneNumber;
  obj.unit = phone;
  obj.streetNumber = streetNumber;
  obj.streetName = streetName;
  obj.suburb = suburb;
  document.getElementById("c").innerHTML = phoneNumber;
  document.getElementById("d").innerHTML = phone;
  document.getElementById("e").innerHTML = streetNumber;
  document.getElementById("f").innerHTML = streetName;
  document.getElementById("g").innerHTML = suburb;
  document.getElementsByClassName("two")[0].style.display = "none";
  document.getElementsByClassName("three")[0].style.display = "block";
}

function next3() {
  var q1 = "";
  var q1s = document.getElementsByName("q1");
  for (var i = 0; i < q1s.length; i++) {
    if (q1s[i].checked) {
      q1 = q1s[i].value;
    }
  }
  var q2 = "";
  var q2s = document.getElementsByName("q2");
  for (var i = 0; i < q2s.length; i++) {
    if (q2s[i].checked) {
      q2 = q2s[i].value;
    }
  }
  if (q1 == "" || q2 == "") {
    alert("please  complete the form");
    return;
  }
  document.getElementsByClassName("three")[0].style.display = "none";
  document.getElementsByClassName("four")[0].style.display = "block";
}

function back1() {
  document.getElementsByClassName("one")[0].style.display = "block";
  document.getElementsByClassName("two")[0].style.display = "none";
}
function back2() {
  document.getElementsByClassName("two")[0].style.display = "block";
  document.getElementsByClassName("three")[0].style.display = "none";
}

function back3() {
  document.getElementsByClassName("three")[0].style.display = "block";
  document.getElementsByClassName("four")[0].style.display = "none";
}

function sub() {
  var password = document.getElementById("password").value;
  obj.password = password;
  document.getElementById("h").innerHTML = password;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var s3 = document.getElementById("s3").value;
  var s4 = document.getElementById("s4").value;
  if (password != confirmPassword) {
    alert("Inconsistent password");
    return;
  }
  var isok = document.getElementById("isOk").checked;
  if (!isok || s3 == "0" || s4 == "0") {
    alert("please  complete the form");
    return;
  }
  localStorage.objs = JSON.stringify(obj);
  document.getElementById("open").click();
}

function go() {
  location.href = "endpoint.html";
}
