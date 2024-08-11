   
// .......................................................................
// URL of the API for announcement
const piUrl = 'http://127.0.0.1:8000/anouncement/';

const productsContainer = document.getElementById('marquee');
// Get references to the HTML elements

// Function to fetch data from API
async function fetchData() {
  try {
    const response = await fetch(piUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    displayErrorMessage(error);
    return [];
  }
}

// Function to render announcements
function renderAnnounce(products) {
  productsContainer.innerHTML = '';
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('products');
    productElement.innerHTML = `
    <div>
        <p>${product.Information}</p>
</div>
`;
    productsContainer.appendChild(productElement);
  });
}

// Initial fetch and render
fetchData().then(data => {
    renderAnnounce(data); // Show all products initially
});

