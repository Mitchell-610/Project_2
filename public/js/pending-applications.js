document.addEventListener('DOMContentLoaded', () => {
    // Function to fetch and display pending applications
    const fetchPendingApplications = async () => {
      try {
        const response = await fetch('/api/pending-applications'); // Adjust the API endpoint as needed
        if (!response.ok) {
          throw new Error('Failed to fetch pending applications');
        }
        
        const data = await response.json();
        displayPendingApplications(data);
      } catch (error) {
        console.error('Error fetching pending applications:', error);
        alert('Failed to load pending applications. Please try again later.');
      }
    };
  
    // Function to display pending applications
    const displayPendingApplications = (applications) => {
      const container = document.querySelector('#pending-applications-container');
      container.innerHTML = ''; // Clear the container before adding new content
      
      if (applications.length === 0) {
        container.innerHTML = '<p>No pending applications at the moment.</p>';
        return;
      }
      
      const list = document.createElement('ul');
      applications.forEach(app => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <strong>${app.petName}</strong> (Applicant: ${app.applicantName})
          <button class="btn btn-info" data-id="${app.id}">View Details</button>
          <button class="btn btn-success" data-id="${app.id}">Approve</button>
          <button class="btn btn-danger" data-id="${app.id}">Reject</button>
        `;
        list.appendChild(listItem);
      });
      
      container.appendChild(list);
    };
  
    // Function to handle button clicks for application actions
    const handleApplicationAction = async (event) => {
      const button = event.target;
      const id = button.getAttribute('data-id');
  
      if (!id) return;
  
      let action;
      if (button.classList.contains('btn-info')) {
        action = 'view';
      } else if (button.classList.contains('btn-success')) {
        action = 'approve';
      } else if (button.classList.contains('btn-danger')) {
        action = 'reject';
      } else {
        return;
      }
  
      try {
        const response = await fetch(`/api/pending-applications/${id}/${action}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
        
        if (!response.ok) {
          throw new Error(`Failed to ${action} application`);
        }
  
        // Optionally, refetch the applications list or update the UI
        fetchPendingApplications();
      } catch (error) {
        console.error(`Error ${action} application:`, error);
        alert(`Failed to ${action} application. Please try again later.`);
      }
    };
  
    // Set up event listener for application action buttons
    document.addEventListener('click', handleApplicationAction);
  
    // Fetch and display pending applications on page load
    fetchPendingApplications();
  });
  