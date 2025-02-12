// Initialize Supabase
const SUPABASE_URL = "https://osovrtrhscypfwwyqhrq.supabase.co"; // Replace with your Supabase URL
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zb3ZydHJoc2N5cGZ3d3lxaHJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxNzg2NjUsImV4cCI6MjA1NDc1NDY2NX0.KlmPgisE1dzPpBN_DARadjUw0BV1FhLkOBIPFcqQx_I"; // Replace with your Supabase Anon Key
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
// Sign Up Function
async function signUp() {
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    const { error, user } = await supabase.auth.signUp({
        email: email,
        password: password
    });

    if (error) {
        document.getElementById("message").innerText = error.message;
    } else {
        document.getElementById("message").innerText = "Sign-up successful! Check your email.";
        setTimeout(() => {
            window.location.href = "./signIn.html"; // Redirect to dashboard
        }, 2000);
    }
}

// Sign In Function
async function signIn() {
    let email = document.getElementById("signin-email").value;
    let password = document.getElementById("signin-password").value;

    const { error, session } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        document.getElementById("message").innerText = error.message;
    } else {
        document.getElementById("message").innerText = "Sign-in successful!";
        setTimeout(() => {
            window.location.href = ".home.html"; // Redirect to dashboard
        }, 2000);
    }
}
