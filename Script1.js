//javascript source code
function validateForm()
{
    var a = document.myForm.fname.value;
    var b = document.myForm.lname.value;
    var c = document.myForm.email.value;
    var d = document.myForm.reason.value;
    var e = document.myForm.information.value;


    if (a == "" || a == null)
        {
            alert(" Your First Name must be filled out.");
            return false;
        }
    else if (b == "" || b == null)
        {
            alert(" Your Last Name must be filled out.");
            return false;
        }
    else if(c == "" || c == null)
        {
            alert(" You must enter a valid email adress.");
            return false;
        }
    else if(d == "" || d == null)
        {
            alert("Please make sure to submit a reason.");
            return false;
        }
    else if(e == "" || e == null)
        {
            alert("Please enter information about the contact reason.");
            return false;
        }
}

// Contact Us - Clear Button Click
function clearForm()
{
    document.getElementById(contactForm).reset();
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
