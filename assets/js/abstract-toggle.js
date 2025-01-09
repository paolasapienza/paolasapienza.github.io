function toggleAbstract(abstractId) {
    var abstract = document.getElementById('abstract-' + abstractId);
    if (abstract.style.display === 'none' || abstract.style.display === '') {
        abstract.style.display = 'block';
    } else {
        abstract.style.display = 'none';
    }
}