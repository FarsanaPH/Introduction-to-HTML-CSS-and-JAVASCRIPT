
const button=document.getElementById('recommend_btn');
button.addEventListener('click', addRecommendation);

function addRecommendation() {
    const newRecommendation = document.getElementById('new_recommendation').value;
    const nameInput = document.getElementById('name_input').value;

    if (newRecommendation) {
        const recommendationList = document.getElementById('recommendation-list');

        const newListItem = document.createElement('li');    
        newListItem.classList.add('recommendation');
        newListItem.innerHTML = `<strong>${nameInput ? nameInput : 'Anonymous'}</strong><br>"${newRecommendation}"`;
        recommendationList.appendChild(newListItem);

        // Clear the input fields
        document.getElementById('new_recommendation').value = '';
        document.getElementById('name_input').value = '';

        //call showpopup function
        showPopup(true);
    }
}

function showPopup(success) {
    const popup = document.getElementById('popup');
    if (success) {
        popup.innerHTML = '<i class="fas fa-check-circle checkmark"></i><br>Thanks for leaving a recommendation!';
    } else {
        popup.textContent = 'Failed to add recommendation.';
    }
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 1300);
}
