function search() {

    let textToSearch = document.getElementById("input").value;
    let paragraph = document.getElementById("para");
    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    let pattern = new RegExp(`${textToSearch}`, "gi");
    paragraph.innerHTML = paragraph.textContent.replace(pattern, 
        (match) => `<mark>${match}</mark>`);
}



