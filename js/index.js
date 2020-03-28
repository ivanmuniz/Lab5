const check = (li) => {
    li.classList.toggle("check");
}

const del = (li) => {
    li.parentNode.removeChild(li);
}

const click = () => {
    const ul = document.querySelector("ul");
    ul.addEventListener('click', (ev) => {
        if(ev.target.matches('#check')) {
            check(ev.target.parentElement.parentElement);
        } else if (ev.target.matches('#delete')) {
            del(ev.target.parentElement.parentElement);
        }
    })
}

const addItem = (ev) => {
    ev.preventDefault();
    const ul = document.getElementsByTagName("ul");
    const input = document.getElementById("listInput").value;
    document.getElementById("listInput").value = '';
    if (input.trim() != '') {
        ul[0].innerHTML += 
        `<li>
            <div class="listItem">
                ${input}
            </div>
            <div class="buttons">
                <button id="check" class="btn btn-check">&#10004;</button>
                <button id="delete" class="btn btn-delete">&#10005;</button>
            </div>
        </li>`;
        ul[0].innerHTML = ul[0].innerHTML.replace(/>\s+</g, "><");
    }
    
}

function watchForm() {
    const form = document.getElementsByTagName("form");
    form[0].addEventListener("submit", addItem);
}

function init() {
    watchForm();
    click();
}


init();
