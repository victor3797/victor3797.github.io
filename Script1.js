//javascript source code
function validateForm()
{
    var a = document.forms.["myForm"]["firstname"].value;
    var b = document.forms.["myForm"]["lastname"].value;
    var c = document.forms.["myForm"]["email"].value;
    var d = document.forms.["myForm"]["contactreason"].value;
    var e = document.forms.["myForm"]["subject"].value;


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
