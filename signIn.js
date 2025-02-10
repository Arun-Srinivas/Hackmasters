document.addEventListener("DOMContentLoaded", function () {
    const passwordField = document.querySelector("#password");
    const togglePassword = document.querySelector("#togglePassword");

    togglePassword.addEventListener("click", function () {
        // Toggle password visibility
        const type = passwordField.type === "password" ? "text" : "password";
        passwordField.type = type;

        // Change icon style (if needed)
        if (type === "text") {
            togglePassword.classList.remove("fa-eye-slash");
            togglePassword.classList.add("fa-eye");
        } else {
            togglePassword.classList.remove("fa-eye");
            togglePassword.classList.add("fa-eye-slash");
        }
    });
});
