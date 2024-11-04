document.addEventListener('DOMContentLoaded', () => {
    feather.replace();

    const btnChange = document.querySelector(".toggle");
    btnChange.addEventListener('click', themeChange)

    const newIcon = `<i data-feather="moon"></i>`;
    const container = document.querySelector(".icon");
    
    let initialIcon = true;
    

    function themeChange() {
        document.body.classList.toggle('light')

        if (initialIcon) {
            container.innerHTML = newIcon;
            initialIcon = !initialIcon;
            feather.replace();
        } else {
            container.innerHTML = `<i data-feather="sun"></i>`;
            initialIcon = !initialIcon;
            feather.replace();
        }
    }

    // function iconChange() {

    // }
})

