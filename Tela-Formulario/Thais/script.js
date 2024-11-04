document.addEventListener('DOMContentLoaded', () => {
    feather.replace();

    const form = document.querySelector('form')
    const username = document.querySelector('#username')
    const email = document.querySelector('#email')
    const password1 = document.querySelector('#password')
    const password2 = document.querySelector('#confirm')

    const btnChange = document.querySelector('.toggle')
    btnChange.addEventListener('click', themeChange);

    const newIcon = `<i class="feather" data-feather="moon"></i>`
    let initialIcon = true



    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if(checkFields()) { signup() }
    })

    function checkFields() {
        let valid = true
            document.querySelectorAll('.form-group').forEach((item) => {
                if (item.classList.contains('error')) { valid = false }
            })
            return valid;
    }

    username.addEventListener('input', () => {
        validateField(username, username.value.trim(), 'Username required')
    })

    email.addEventListener('input', () => {
        validateField(email, isEmail(email.value), 'Not a valid email')
    })

    password1.addEventListener('input', () => {
        validateField(password1, password1.value.length >= 8, "Password need to be 8 characters")
    })
    
    password2.addEventListener('input', () => {
        validateField(password2, (password1.value === password2.value), "Password must be the same")
    })

    function validateField(input, condition, message) {
        if(condition) {
            setSucess(input)
        } else {
            setError(input, message)
        }
    }

    function isEmail(email) {
        return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)
    }

    function setSucess(input) {
        const formControl = input.parentElement
        const error = formControl.querySelector('.error_text')
        formControl.className = 'form-group success'
        error.innerText = ''
    }

    function setError(input, message) {
        const formControl = input.parentElement
        const error = formControl.querySelector('.error_text')

        formControl.className = 'form-group error'
        error.innerText = message
    }

    function signup() {
        const toast = document.querySelector('.toaster')
        toast.classList.add('show')

        setTimeout(() => {
                toast.classList.remove('show')
        }, 3000);
    }

    function themeChange() {
        document.body.classList.toggle('light');

        if(initialIcon) {
            btnChange.innerHTML = newIcon
        } else {
            btnChange.innerHTML = `<i class="feather" data-feather="sun"></i>`
        }

        feather.replace();
        initialIcon = !initialIcon
    }
});