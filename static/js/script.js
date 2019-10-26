window.onload = function() {
    const deleteLinks = document.querySelectorAll('.js-delete');
    deleteLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            fetch(e.target.href, {method: 'DELETE'})
                .then(res => window.location.reload())
                .catch(err => console.log(err));
        })
    })
}