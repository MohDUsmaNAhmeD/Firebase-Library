// Get all features
const features = document.querySelectorAll('.feature');

// Get search input
const searchInput = document.getElementById('search-input'); 

// Add keyup listener
searchInput.addEventListener('keyup', handleSearch);

function handleSearch() {

  // Get search term
  const searchTerm = searchInput.value.toLowerCase();

  // Filter features
  features.forEach(feature => {

    // Get feature title 
    const title = feature.querySelector('h2').textContent.toLowerCase();

    if(searchTerm === '') {
      // Show all on empty search
      feature.style.display = 'block';
    } else {
      // Check for match
      if(title.includes(searchTerm)) {
        feature.style.display = 'block';  
      } else {
        feature.style.display = 'none';
      }
    }

  });

}