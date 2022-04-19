/* Shows the 'Other' input field when the other option is selected in the country selector
** inspired by https://stackoverflow.com/questions/5836710/css-javascript-show-hide-div-using-a-css-class
*/
function selectCountry(ele) {
    if (ele && ele.selectedIndex === 2) {
        document.getElementById('other').style.display = "block";
    } else {
        document.getElementById('other').style.display = "none";
    }
}

// Resets the form input data after user submits
function reset(form) {
    form.elements['name'].value = '';
    form.elements['email'].value = '';
    form.elements['country'].value = 'canada';
    form.elements['other'].value = '';
    form.elements['feedback'].value = '';
}

/* Shows a success message when submit button is clicked
** inspired by https://stackoverflow.com/questions/5836710/css-javascript-show-hide-div-using-a-css-class
*/
function success(form) {
    const name = form.elements['name'];

    if (name.value !== '') {
        document.getElementById('success').style.display = "block";

        document.getElementById('success').innerHTML = "Thank you " 
            + name.value 
            + "! Your feedback is very important to us!";
    }

    // resets the form data
    reset(form);
}