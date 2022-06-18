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

const dropdownIDs = ["fruit-force-privacy-policy", "fruit-force-T&C"];
const dropdownButtonIDs = ["fruit-force-privacy-dropdown-button", "fruit-force-T&C-dropdown-button"];

for (let i = 0; i < dropdownIDs.length; i++)
{
    document.getElementById(dropdownButtonIDs[i]).addEventListener("click", function()
    {
        const ffpp = document.getElementById(dropdownIDs[i]);

        ffpp.classList.toggle("legal-active");
        ffpp.classList.toggle("legal-hidden");  
    });
}