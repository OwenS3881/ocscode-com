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

const dropdownIDs = ["fruit-force-privacy-policy", "fruit-force-T&C", "lost-flame-privacy-policy", "lost-flame-T&C"];
const dropdownButtonIDs = ["fruit-force-privacy-dropdown-button", "fruit-force-T&C-dropdown-button", "lost-flame-privacy-dropdown-button", "lost-flame-T&C-dropdown-button"];

for (let i = 0; i < dropdownIDs.length; i++)
{
    const button = document.getElementById(dropdownButtonIDs[i]);

    button.addEventListener("click", function()
    {
        const dropdown = document.getElementById(dropdownIDs[i]);

        button.classList.toggle("active");
        dropdown.classList.toggle("legal-active");
        dropdown.classList.toggle("legal-hidden");  
    });
}