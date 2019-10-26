const updateForm = document.querySelector('.js-update_form');
const updateBtn = updateForm.querySelector('button');

const updateHandler = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('content', document.querySelector("#content").value);
    fetch(updateForm.dataset.taskId, {method: 'PUT', body: formData})
        .then(res => window.location.href = '/')
        .catch(err => console.log(err));
}

updateForm.addEventListener('submit', updateHandler);
updateBtn.addEventListener('click', updateHandler);