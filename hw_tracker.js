function main () {
    const submit_button = document.getElementById('submit-button');
    submit_button.addEventListener('click', submit);
}

function getFormInfo () {
    const courseName = document.getElementById('course-name').value;
    const description = document.getElementById('assignment-description').value;
    const status = document.querySelector('input[name="assignment-type"]:checked').value;;

    document.getElementById('course-name').value = '';
    document.getElementById('assignment-description').value = '';
    // document.getElementsByName('assignment-type').value = 'Done';

    return [courseName, description, status];
}

function submit (event) {
    event.preventDefault();
    [courseName, description, status] = getFormInfo();
    if (courseName === '' || description === '') {
        alert('Please enter valid input');
    }
    const hwList = document.getElementById('hw-list');
    const hw = document.createElement('li');
    const card = document.createElement('div');
    const courseNameHolder = document.createElement('h5');
    const assignmentDescriptionHolder = document.createElement('p');
    const statusHolder = document.createElement('p');
    const closeButton = document.createElement('div');

    courseNameHolder.append(document.createTextNode('Course: ' + courseName));
    assignmentDescriptionHolder.append(document.createTextNode('Description: ' + description));
    statusHolder.append(document.createTextNode('Type: ' + status));

    const closeButtonParent = document.createElement('span');
    closeButtonParent.append(document.createTextNode('\u274e'));
    closeButton.append(closeButtonParent);

    card.appendChild(closeButton);
    card.appendChild(courseNameHolder);
    card.appendChild(assignmentDescriptionHolder);
    card.appendChild(statusHolder);
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

window.onload = main;