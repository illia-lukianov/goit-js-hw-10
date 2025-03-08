const form = document.querySelector('.feedback-form');
let formData = { email: '', message: '' };

form.addEventListener('input', (editData) => {
    formData[editData.target.name] = editData.target.value;
    const jsonFormData = JSON.stringify(formData);
    localStorage.setItem('feedback-form-state', jsonFormData);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (formData.email.trim() === '' || formData.message.trim() === '') {
        alert('Fill please all fields');
    } else {
        localStorage.removeItem('feedback-form-state');
        formData.email = '';
        formData.message = '';
        form.reset();
    }
})

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('feedback-form-state') !== null) {
        form.querySelector('input[name="email"]').value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
        form.querySelector('textarea[name="message"]').value = formData.message = JSON.parse(localStorage.getItem('feedback-form-state')).message;
    }
});

