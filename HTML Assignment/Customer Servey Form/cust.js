const surveyForm = document.getElementById('surveyForm');
const popup = document.getElementById('popup');
const popupContent = document.getElementById('popupContent');

function submitForm() {
    if (surveyForm.checkValidity()) {
        // Get form values
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const dob = document.getElementById('dob').value;
        const country = document.getElementById('country').value;
        const gender = Array.from(document.querySelectorAll('input[name="gender"]:checked'))
                           .map(checkbox => checkbox.value);
        const profession = document.getElementById('profession').value;
        const email = document.getElementById('email').value;
        const mobileNumber = document.getElementById('mobileNumber').value;

        // Display values in the popup
        popupContent.innerHTML = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${gender.join(', ')}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
        `;

        // Show the popup
        popup.style.display = 'flex';
    } else {
        alert('Please fill in all the required fields.');
    }
}

function resetForm() {
    surveyForm.reset();
}

function closePopup() {
    popup.style.display = 'none';
}
