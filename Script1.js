//javascript source code
function validateForm()
{
    var a = document.contactForm.theName.value;
    var b = document.contactForm.lastName.value;
    var c = document.contactForm.email.value;
    var d = document.contactForm.options.value;
    var e = document.contactForm.problems.value;

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
            alert("The subject must be filled out.");
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

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
