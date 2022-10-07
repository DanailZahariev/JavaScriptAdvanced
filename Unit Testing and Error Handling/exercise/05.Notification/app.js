function notify(message) {

    let notification = document.getElementById('notification');
    notification.innerText = message;
    notification.style.display = 'block';
    notification.addEventListener('click', () => {
        notification.style.display = 'none';
    });
}