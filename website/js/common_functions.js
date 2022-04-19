/* Show other input field when select other option in country selector
** https://stackoverflow.com/questions/5836710/css-javascript-show-hide-div-using-a-css-class
** @method selectCountry
** @params {Object} ele   country selector
*/
function selectCountry(ele) {
    if (ele && ele.selectedIndex === 2) {
        document.getElementById('other').style.display = "block";
    } else {
        document.getElementById('other').style.display = "none";
    }
}

/* Reset form input data after submit
** 
** @method reset
** @params {Object} form   submission form element
*/
function reset(form) {
    form.elements['name'].value = '';
    form.elements['email'].value = '';
    form.elements['country'].value = 'canada';
    form.elements['other'].value = '';
    form.elements['feedback'].value = '';
}

/* Show success message when click on submit button
** https://stackoverflow.com/questions/5836710/css-javascript-show-hide-div-using-a-css-class
** @method success
** @params {Object} form   submission form element
*/
function success(form) {
    const name = form.elements['name'];

    if (name.value !== '') {
        document.getElementById('success').style.display = "block";

        document.getElementById('success').innerHTML = "~ Thank you " 
            + name.value 
            + "! Your feedback is very important to us! ~";
    }

    // reset form data
    reset(form);
}