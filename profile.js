document.addEventListener('DOMContentLoaded', () => {
  const profileName = document.getElementById('profile_name');
  const profileEmail = document.getElementById('profile_email');
  const profilePhone = document.getElementById('profile_phone');

  // Fetch profile data from local storage or server
  const profileData = getProfileData();

  // Populate profile details
  profileName.textContent = profileData.name;
  profileEmail.textContent = profileData.email;
  profilePhone.textContent = profileData.phone;
});

function getProfileData() {
  // This is just a sample function. Replace with actual data fetching logic.
  return {
      name: 'Ram',
      email: 'ram.s.brudite@gmail.com',
      phone: '+91 8003163037'
  };
}
