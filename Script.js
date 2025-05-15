
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('authModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeBtn = document.querySelector('.close');
    const loginTab = document.getElementById('loginTab');
    const registerTab = document.getElementById('registerTab');
    const loginForm = document.getElementById('loginForm');
    const registrationForm = document.getElementById('registrationForm');

    openModalBtn.addEventListener('click', () => modal.style.display = 'block');
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => e.target === modal && (modal.style.display = 'none'));

    loginTab.addEventListener('click', () => {
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        loginForm.classList.add('active');
        registrationForm.classList.remove('active');
    });

    registerTab.addEventListener('click', () => {
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
        registrationForm.classList.add('active');
        loginForm.classList.remove('active');
    });

    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        clearErrors();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        let isValid = true;

        if (username.length < 3) {
            document.getElementById('usernameError').textContent = 'Имя должно быть не менее 3 символов';
            isValid = false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.getElementById('emailError').textContent = 'Введите корректный email';
            isValid = false;
        }

        if (password.length < 6) {
            document.getElementById('passwordError').textContent = 'Пароль должен быть не менее 6 символов';
            isValid = false;
        }

        if (password !== confirmPassword) {
            document.getElementById('confirmPasswordError').textContent = 'Пароли не совпадают';
            isValid = false;
        }

        if (isValid) {
            document.getElementById('registerStatus').textContent = 'Регистрация прошла успешно!';
            document.getElementById('registerStatus').className = 'auth-status success';

            setTimeout(() => {
                registrationForm.reset();
                document.getElementById('registerStatus').textContent = '';
                modal.style.display = 'none';
            }, 2000);
        }
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        clearErrors();

        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        let isValid = true;

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.getElementById('loginEmailError').textContent = 'Введите корректный email';
            isValid = false;
        }

        if (password.length < 1) {
            document.getElementById('loginPasswordError').textContent = 'Введите пароль';
            isValid = false;
        }

        if (isValid) {
            document.getElementById('loginStatus').textContent = 'Вход выполнен успешно!';
            document.getElementById('loginStatus').className = 'auth-status success';

            setTimeout(() => {
                loginForm.reset();
                document.getElementById('loginStatus').textContent = '';
                modal.style.display = 'none';

                openModalBtn.textContent = 'Профиль';
                openModalBtn.style.cursor = 'default';
                openModalBtn.removeEventListener('click', openModal);
            }, 2000);
        }
    });

    function clearErrors() {
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        document.querySelectorAll('.auth-status').forEach(el => {
            el.textContent = '';
            el.className = 'auth-status';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const deliveryModal = document.getElementById('deliveryModal');
    const deliveryBtn = document.querySelector('.dostavka');
    const closeDeliveryBtn = document.querySelector('.close-delivery');

    deliveryBtn.addEventListener('click', () => {
        deliveryModal.style.display = 'block';
    });

    closeDeliveryBtn.addEventListener('click', () => {
        deliveryModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === deliveryModal) {
            deliveryModal.style.display = 'none';
        }
    });

    const deliveryForm = document.querySelector('.delivery-form');
    if (deliveryForm) {
        deliveryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Данные доставки отправлены!');
            deliveryModal.style.display = 'none';
        });
    }
});

document.querySelector('.Otzivi').addEventListener('click', function() {
    document.querySelector('.Otzivi-k').scrollIntoView({
        behavior: 'smooth'
    });
});