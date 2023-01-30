const select = document.getElementById("select-click");
const options = document.getElementById("options")
select.addEventListener("click", () => {
    debugger;
    if (options) {
        changeClass(options, ['hidden', 'active'])
    }
})



function changeClass(el, classes) {
    classes.forEach(Class => {
        if (el.classList.contains(Class)) {
            el.classList.remove(Class);
            el.classList.add(classes.filter(item => item !== Class)[0]);
            classes.length = 0;
        }
    })
}
