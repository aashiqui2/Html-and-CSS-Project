document.addEventListener("DOMContentLoaded", function() {
    var sortableList = new Sortable(document.getElementById('sortable-list'), {
        animation: 150,
        ghostClass: 'sortable-ghost'
    });
});
