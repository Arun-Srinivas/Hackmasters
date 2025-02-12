let supabase;

        document.addEventListener("DOMContentLoaded", function() {
            // Initialize Supabase client
            supabase = window.supabase.createClient(
                'https://osovrtrhscypfwwyqhrq.supabase.co',  // Your Supabase URL
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zb3ZydHJoc2N5cGZ3d3lxaHJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxNzg2NjUsImV4cCI6MjA1NDc1NDY2NX0.KlmPgisE1dzPpBN_DARadjUw0BV1FhLkOBIPFcqQx_I'  // Your Supabase API Key
            );

            const passwordField = document.getElementById("password");
            const togglePassword = document.getElementById("togglePassword");

            // Toggle password visibility
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
                    event.preventDefault(); // Prevent default form submit
                    const email = document.getElementById('email').value.trim();
                    const password = document.getElementById('password').value;
                    console.log("Form submitted with email:", email);  // Debug log
                    await signIn(email, password);  // Call signIn function
                });
            }
        });

        // Sign-in function
        async function signIn(email, password) {
            try {
                const { data, error } = await supabase.auth.signInWithPassword({
                    email: email,
                    password: password
                });

                if (error) throw error; // If there's an error, throw it
                
                // Debug log to check data
                console.log('User signed in:', data);

                // Redirect after successful login
                console.log("Redirecting to home.html...");
                window.location.href = '..//home/home.html';  // Redirect to home page

            } catch (error) {
                console.error('Error signing in:', error);  // Log any error
                alert('Login failed: ' + error.message);  // Display error message
            }
        }