//Reveal Effects
reveal(".reveal");

window.addEventListener("scroll", function()
{
    reveal(".reveal");
});


function reveal(className)
{
    var reveals = document.querySelectorAll(className);

    for (let i = 0; i < reveals.length; i++)
    {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible)
        {
            reveals[i].classList.add("active");
        }
    }
}
//Legal Dropdowns
/*
const dropdownIDs = ["fruit-force-privacy-policy", "fruit-force-T&C", "lost-flame-privacy-policy", "lost-flame-T&C"];
const dropdownButtonIDs = ["fruit-force-privacy-dropdown-button", "fruit-force-T&C-dropdown-button", "lost-flame-privacy-dropdown-button", "lost-flame-T&C-dropdown-button"];

for (let i = 0; i < dropdownIDs.length; i++)
{
    const button = document.getElementById(dropdownButtonIDs[i]);

    if (button === null) continue;

    button.addEventListener("click", function()
    {
        const dropdown = document.getElementById(dropdownIDs[i]);

        if (dropdown === null) return;

        button.classList.toggle("active");
        dropdown.classList.toggle("legal-active");
        dropdown.classList.toggle("legal-hidden");  
    });
}
*/

//Contact Form
(function() {
    emailjs.init('WYHv9GY3JGp-GkDOQ');
})();

const form = document.querySelector(".contact-form");
const formName = document.querySelector(".form-name");
const formEmail = document.querySelector(".form-email");
const formSubject = document.querySelector(".form-subject");
const formMessage = document.querySelector(".form-message");

form.addEventListener("submit", SendMessage);

function SendMessage()
{
    const params =
    {
        from_name: formName.value,
        email_id: formEmail.value,
        form_subject: formSubject.value,
        message: formMessage.value
    }
    emailjs.send("service_wmvvg3l","template_n353qys", params).then(function (res) 
    {
        //alert(`Success! ${res.status}`);
        alert("Success!");
    });
}