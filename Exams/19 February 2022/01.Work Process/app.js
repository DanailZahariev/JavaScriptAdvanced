function solve() {

    let firstName = document.getElementById('fname');
    let lastName = document.getElementById('lname');
    let email = document.getElementById('email');
    let birthDate = document.getElementById('birth');
    let position = document.getElementById('position');
    let salary = document.getElementById('salary');
    let tBody = document.getElementById('tbody');
    let sumSalary = document.getElementById('sum');
    let addBtn = document.getElementById('add-worker');
    addBtn.addEventListener('click', addWorker);
    
    function addWorker(evt) {
        evt.preventDefault();

        if (!firstName.value || !lastName.value || !email.value ||
            !birthDate.value || !position.value || !salary.value) {
            return;
        }

        let createTr = createElement('tr');
        let tdFirstname = createElement('td', `${firstName.value}`);
        let tdLastName = createElement('td', `${lastName.value}`);
        let tdEmail = createElement('td', `${email.value}`);
        let tdBirthDate = createElement('td', `${birthDate.value}`);
        let tdPosition = createElement('td', `${position.value}`);
        let tdSalary = createElement('td', `${salary.value}`);
        let tdButtons = createElement('td');
        let firedBtn = createElement('button', 'Fired');
        let editBtn = createElement('button', 'Edit');
        firedBtn.classList.add('fired');
        editBtn.classList.add('edit');
        tdButtons.appendChild(firedBtn);
        tdButtons.appendChild(editBtn);
        tBody.appendChild(createTr);
        createTr.appendChild(tdFirstname);
        createTr.appendChild(tdLastName);
        createTr.appendChild(tdEmail);
        createTr.appendChild(tdBirthDate);
        createTr.appendChild(tdPosition);
        createTr.appendChild(tdSalary);
        createTr.appendChild(tdButtons);

        sumSalary.textContent = (Number(sumSalary.textContent) + Number(salary.value)).toFixed(2);

        function createElement(tagName, text) {
            let element = document.createElement(tagName);
            if (text) {
                element.textContent = text;
            }
            return element;
        }

        firstName.value = '';
        lastName.value = '';
        email.value = '';
        birthDate.value = '';
        position.value = ''
        salary.value = '';


        editBtn.addEventListener('click', (evt) => {
            evt.target.parentElement.parentElement.remove();
            sumSalary.textContent = (sumSalary.textContent - tdSalary.textContent).toFixed(2);
            firstName.value = tdFirstname.textContent;
            lastName.value = tdLastName.textContent;
            email.value = tdEmail.textContent;
            birthDate.value = tdBirthDate.textContent;
            position.value = tdPosition.textContent;
            salary.value = tdSalary.textContent
        });

        firedBtn.addEventListener('click', (evt) => {
            evt.target.parentElement.parentElement.remove();
            sumSalary.textContent = (sumSalary.textContent - tdSalary.textContent).toFixed(2);
        });
    }
}

solve()