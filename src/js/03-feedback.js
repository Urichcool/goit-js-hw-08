const feedBackEl = document.querySelector('.feedback-form');
const throttle = require('lodash.throttle');
const formData = {};
populateFeedback();
feedBackEl.addEventListener('submit', e => {
    e.preventDefault();
     localStorage.removeItem('feedback-form-state');
    e.currentTarget.reset();
    console.log(formData);
})
feedBackEl.addEventListener('input', throttle(e => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500));


function populateFeedback() {
    const savedData = localStorage.getItem('feedback-form-state');
    try {
        const parsedData = JSON.parse(savedData);
         if (savedData) {
           const emailEl = document.querySelector('.feedback-form input');
           emailEl.value = parsedData.email;
           const messageEl = document.querySelector('.feedback-form textarea');
           messageEl.value = parsedData.message;
         }
    } catch (error) {
      console.log(error.name); 
      console.log(error.message); 
    }
   
};
//sdsd//



