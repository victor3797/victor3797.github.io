//javascript source code
function validateForm()
{
    var a = document.contactForm.firstname.value;
    var b = document.contactForm.lastname.value;
    var c = document.contactForm.email.value;
    var d = document.contactForm.contactreason.value;
    var e = document.contactForm.subject.value;

    if (a == "" || a == null)
        {
            alert("First Name must be filled out.");
            return false;
        }
    else if (b == "" || b == null)
        {
            alert("Last Name must be filled out.");
            return false;
        }
    else if(c == "" || c == null)
        {
            alert("Email must be filled out.");
            return false;
        }
    else if(d == "" || d == null)
        {
            alert("Reason must be filled out.");
            return false;
        }
    else if(e == "" || e == null)
        {
            alert("Subject must be filled out.");
            return false;
        }
}
