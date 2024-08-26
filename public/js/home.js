// home.js

// Function to handle logout
const handleLogout = async () => {
    try {
      const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Logout failed. Please try again.');
      }
    } catch (error) {
      console.error('Error logging out:', error);
      alert('An error occurred while logging out. Please try again.');
    }
  };
  
  // Attach event listener to logout button
  document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.querySelector('#logout');
    if (logoutButton) {
      logoutButton.addEventListener('click', handleLogout);
    }
  });
  
  // Function to show a welcome message or notification
  const showWelcomeMessage = () => {
    const welcomeMessage = document.createElement('div');
    welcomeMessage.classList.add('alert', 'alert-info');
    welcomeMessage.textContent = 'Welcome to Adopt a Paw! Explore our available pets and find your new best friend.';
    document.querySelector('main').insertBefore(welcomeMessage, document.querySelector('main').firstChild);
  };
  
  // Initialize page
  document.addEventListener('DOMContentLoaded', () => {
    // Show welcome message if user is logged in
    if (document.querySelector('#logout')) {
      showWelcomeMessage();
    }
  });
s  