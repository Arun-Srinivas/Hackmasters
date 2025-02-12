let supabase;

document.addEventListener("DOMContentLoaded", function() {
    supabase = window.supabase.createClient(
        'https://osovrtrhscypfwwyqhrq.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zb3ZydHJoc2N5cGZ3d3lxaHJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxNzg2NjUsImV4cCI6MjA1NDc1NDY2NX0.KlmPgisE1dzPpBN_DARadjUw0BV1FhLkOBIPFcqQx_I'
    );

    const passwordField = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");

    if (togglePassword && passwordField) {
        togglePassword.addEventListener("click", function() {
            const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
            passwordField.setAttribute("type", type);
            this.classList.toggle("fa-eye");
            this.classList.toggle("fa-eye-slash");
        });
    }

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', async function(event) {
            event.preventDefault();
            
            const email = document.getElementById('email').value.trim().toLowerCase();
            const password = document.getElementById('password').value;
            const fullname = document.getElementById('fullname').value.trim();

            // Basic validation
            if (!fullname) {
                alert('Please enter your full name');
                return;
            }

            if (password.length < 6) {
                alert('Password must be at least 6 characters long');
                return;
            }

            try {
                const { data: { user }, error } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        data: {
                            full_name: fullname
                        }
                    }
                });

                if (error) throw error;

                alert('Check your email for the confirmation link!');
                window.location.href = '..//signIn/signIn.html';
            } catch (error) {
                console.error('Error:', error);
                alert(error.message || 'An error occurred during signup');
            }
        });
    }
});