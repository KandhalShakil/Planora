const API_BASE = '/api/auth';

const authForm = document.getElementById('loginForm') || document.getElementById('signupForm');
const authMsg = document.getElementById('authMsg');
const submitBtn = document.getElementById('submitBtn');

if (authForm) {
    authForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const isLogin = authForm.id === 'loginForm';
        const endpoint = isLogin ? '/login' : '/register';
        
        const formData = {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        };
        
        if (!isLogin) {
            formData.name = document.getElementById('name').value;
        }

        try {
            setLoading(true);
            const res = await fetch(`${API_BASE}${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (data.success) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                showPopup(isLogin ? 'Login successful! Redirecting...' : 'Account created successfully!', 'success');
                setTimeout(() => window.location.href = 'index.html', 1500);
            } else {
                // If it's a 500 error or similar, show a cleaner message
                const errorMsg = data.message && data.message.includes('must have a value') 
                    ? 'Server configuration error. Please contact admin.' 
                    : (data.message || 'Authentication failed');
                showMsg(errorMsg, 'error');
            }


        } catch (error) {
            showMsg('Network error. Please try again.', 'error');
        } finally {
            setLoading(false);
        }
    });
}

function showMsg(text, type) {
    authMsg.textContent = text;
    authMsg.className = `msg ${type}`;
}

function setLoading(isLoading) {
    submitBtn.disabled = isLoading;
    const span = submitBtn.querySelector('span');
    if (isLoading) {
        span.textContent = 'Please wait...';
    } else {
        span.textContent = authForm.id === 'loginForm' ? 'Login' : 'Create Account';
    }
}

// Password Show/Hide Toggle
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

if (togglePassword && passwordInput) {
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Toggle eye icon
        togglePassword.classList.toggle('fa-eye');
        togglePassword.classList.toggle('fa-eye-slash');
    });
}

// Redirect if already logged in
if (localStorage.getItem('token')) {
    window.location.href = 'index.html';
}

