//Student Name: Ferdowsi Rumi
//Student Number: 301168815
//Date: OCT 1st, 2021



// function myfunction() {
//   var x = document.getElementById("menubar");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//   showGoToTopButton();
//   // animateBlocks();
// }
// function showGoToTopButton() {
//   if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 500) {
//     document.getElementById("goToTopBtn").style.display = "block";
//   } else {
//     document.getElementById("goToTopBtn").style.display = "none";
//   }
// }
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

// $(document).ready(function () {

//   $(window).scroll(function () {
//     $(".slideanim").each(function () {
//       var pos = $(this).offset().top;

//       var winTop = $(window).scrollTop();
//       if (pos < winTop + 600) {
//         $(this).addClass("slide");
//       }
//     });
//   });


//   var myform = $("form#myform");
//   myform.submit(function (event) {
//     event.preventDefault();

//     var template_params = {
//       "reply_to": $("#from_email").val(),
//       "from_name": $("#from_name").val(),
//       "to_name": "Ferdowsi Rumi",
//       "message_html": $("#message_html_value").val()
//     }
//     // Change to your service ID, or keep using the default service
//     var service_id = "default_service";

//     var template_id = "template_8r23TpKK";
//     myform.find("button").text("Sending...");
//     emailjs.send(service_id, template_id, template_params)
//       .then(function () {

//         alert("Thank you so much for your email. It's on the way!");
//         myform.find("button").text("Send");
//       }, function (err) {
//         alert("Send email failed!\r\n My site having some problem. Will fix it soon. :\n " + JSON.stringify(err));
//         myform.find("button").text("Send");
//       });

//     return false;
//   });
// });
const validateEmail = (email) => {
  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

const validatePassword = (password) => {
  //var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  //return strongRegex.test(String(password));
  return true;

}
function emailCheck() {
  var emailField = document.getElementById("email");
  var emailError = document.getElementById("emailError");
  if (validateEmail(emailField.value)) {
    emailError.innerText = "All done!! Valid email";
  } else {
    emailError.innerText = "Invalid email!! write with correct format";
  }
}

function passwordCheck() {
  var passwordField = document.getElementById("password");
  var passwordError = document.getElementById("passwordError");
  if (validatePassword (passwordField.value)) {
    passwordError.innerText = "All done!! Valid password";
  } else {
    passwordError.innerText = "Invalid password!! write with correct format";
  }
}
if(submit)
  submit.addEventListener("click", (e) => {
    //e.preventDefault();
    //emailCheck();
    //passwordCheck();
  });
