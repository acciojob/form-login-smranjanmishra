function getFormvalue() {
    // Prevent form from submitting and refreshing the page
    event.preventDefault();

    // Get the form element
    const form = document.getElementById('form1');

    // Retrieve values of first and last name from the form
    const firstName = form.elements['fname'].value;
    const lastName = form.elements['lname'].value;

    // Display the values in an alert box
    alert(firstName + ' ' + lastName);
}