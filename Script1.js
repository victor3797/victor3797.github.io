//javascript source code
function validateForm()
{
    var a = document.contactForm.theName.value;
    var b = document.contactForm.lastName.value;
    var c = document.contactForm.email.value;
    var d = document.contactForm.options.value;
    var e = document.contactForm.problem.value;

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
