// 1. Declaration of empty fields
let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// 3. Checking the availability of data in the local storage
const savedFormData = localStorage.getItem('feedback-form-state');
if (savedFormData) {
  formData = JSON.parse(savedFormData);
  emailInput.value = formData.email;
  messageInput.value = formData.message;
}

// 2. Use event delegation to track input changes
form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// 4. Form submission
form.addEventListener('submit', event => {
  event.preventDefault();

  formData.email = emailInput.value.trim();
  formData.message = messageInput.value.trim();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
  emailInput.value = '';
  messageInput.value = '';
});

// Placeholder
function setPlaceholderOnFocus(element) {
  element.addEventListener('focus', () => {
    element.setAttribute('placeholder', 'Type area');
  });

  element.addEventListener('blur', () => {
    element.setAttribute('placeholder', '');
  });
}

setPlaceholderOnFocus(emailInput);
setPlaceholderOnFocus(messageInput);
