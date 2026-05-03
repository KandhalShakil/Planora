const popupOverlay = document.getElementById('popupOverlay');
const popupCard = popupOverlay && popupOverlay.querySelector('.popup-card');
const popupIcon = popupOverlay && popupOverlay.querySelector('.popup-icon');
const popupTitle = popupOverlay && popupOverlay.querySelector('.popup-title');
const popupMessage = popupOverlay && popupOverlay.querySelector('.popup-message');
const popupActions = popupOverlay && popupOverlay.querySelector('.popup-actions');
let popupTimeout;

function setPopup(type, icon, title, message, actions) {
    if (!popupOverlay) return;
    clearTimeout(popupTimeout);
    popupCard.className = `popup-card popup-${type}`;
    popupIcon.className = `popup-icon fas ${icon}`;
    popupTitle.textContent = title;
    popupMessage.textContent = message;
    popupActions.innerHTML = actions;
    popupOverlay.classList.add('active');
}

function showPopup(message, type = 'success') {
    const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', warning: 'fa-info-circle' };
    setPopup(type, icons[type] || icons.success, type === 'success' ? 'Success' : type === 'error' ? 'Error' : 'Notice', message, '<button class="btn btn-primary" onclick="closePopup()">OK</button>');
    popupTimeout = setTimeout(closePopup, type === 'error' ? 5000 : 3000);
}

function showConfirm(message, onConfirm) {
    setPopup('confirm', 'fa-question-circle', 'Confirm', message, '<button class="btn btn-secondary" onclick="closePopup()">Cancel</button><button class="btn btn-danger" onclick="confirmAction()">Delete</button>');
    window.confirmAction = () => { closePopup(); onConfirm(); };
}

function closePopup() { clearTimeout(popupTimeout); popupOverlay?.classList.remove('active'); }

function debounce(func, wait) {
    let timeout;
    return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), wait); };
}
