// Import Supabase
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Initialize Supabase
const supabaseUrl = "https://osovrtrhscypfwwyqhrq.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zb3ZydHJoc2N5cGZ3d3lxaHJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxNzg2NjUsImV4cCI6MjA1NDc1NDY2NX0.KlmPgisE1dzPpBN_DARadjUw0BV1FhLkOBIPFcqQx_I";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Function to get the logged-in user
async function getUser() {
    const { data: { user }, error } = await supabase.auth.getUser();
    
    if (error) {
        console.error("Error fetching user:", error.message);
        return null;
    }
    return user;
}

// Function to display user details
async function displayUserDetails() {
    const user = await getUser();
    if (user) {
        document.getElementById("displayName").textContent = user.user_metadata?.full_name || "No display name";
        document.getElementById("email").textContent = user.email;
    }
}

// Function to update profile
async function updateProfile() {
    const user = await getUser();
    if (!user) {
        console.error("Error: User is undefined.");
        return;
    }

    const userId = user.id; // Use the correct user ID from auth
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;

    const { error } = await supabase
        .from('profiles')
        .update({ address, phone })
        .eq('user_id', userId);

    if (error) {
        console.error("Error updating profile:", error.message);
    } else {
        console.log("Profile updated successfully!");
    }
}
await supabase.auth.updateUser({
    data: { full_name: "John Doe" }
});

// Load user details on page load
document.addEventListener("DOMContentLoaded", function () {
    displayUserDetails();
    document.getElementById("saveChanges").addEventListener("click", updateProfile);
});
