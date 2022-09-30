function lockedProfile() {

    let userProfile = Array.from(document.querySelectorAll('.profile button'));

    for (const user of userProfile) {
        user.addEventListener('click', showInfo)
    }

    function showInfo(evt) {

        let isUnlocked = evt.target.parentNode.querySelector('input[value="unlock"]').checked;

        if (isUnlocked) {

            let hiddenDiv = Array.from(evt.target.parentNode.querySelectorAll('div'))
                .find(el => el.id.includes('Hidden'));

            if (evt.target.textContent === 'Show more') {
                hiddenDiv.style.display = 'block';
                evt.target.textContent = 'Hide it';
            } else {
                hiddenDiv.style.display = 'none';
                evt.target.textContent = 'Show more';
            }
        }
    }
}