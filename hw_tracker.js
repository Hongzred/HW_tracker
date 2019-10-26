function main () {
    const submit_button = document.getElementById('submit-button');
    submit_button.addEventListener('click',submit);
}

function getFormInfo () {
    const courseName = document.getElementById('course-name');
    const description = document.getElementById('assignment-description');
    const status = document.getElementById('assignment-type');

    document.getElementById('course-name').value = '';
    document.getElementById('assignment-description').value = '';
    document.getElementById('assignment-type').value = 'Done';

    return [courseName, description, status];
}

function submit (event) {
    event.preventDefault();
    [couseName, description, status] = getFormInfo();

    const hwList = document.getElementById('hw-list');
    const hw = document.createElement('li');
    const card = document.createElement('div');
    const courseName = document.createElement('label');
    const assignmentDescription = document.createElement('label');
    const status = document.createElement('label');
    const closeButton = document.createElement('button');

    couseName.append(document.createTextNode(courseName));
    assignmentDescription.append(document.createTextNode(description));
    status.append(document.createTextNode(status));

    closeButton.appendChild(document.createTextNode('\u274e'));

    card.appendChild(closeButton);
    card.appendChild(courseName);
    card.appendChild(assignmentDescription);
    card.appendChild(status);
    hw.appendChild(card);
    hwList.appendChild(hw);

    closeButton.classList.add('close-icon');
    closeButton.classList.add('text-right');
    closeButton.classList.add('button');

    hwList.classList.add('list-group-item');
    hw.classList.add('card');
    hw.classList.add('rounded');
    hw.classList.add('border');
    hw.classList.add('bg-light');

    closeButton.addEventListener('click', () => {
        while (hw.firstChild) {
            hw.removeChild(hw.firstChild);
        }
        hwList.removeChild(hw);
    })

}