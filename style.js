// URL of the API
const apiUrl = "http://127.0.0.1:8000/api/";
// const apiUrl = 'https://fakestoreapi.com/products';

// Get references to the HTML elements
const latestContainer = document.getElementById('latest');
const politicsContainer = document.getElementById('politics');
const MegaNewsAwardContainer = document.getElementById('MegaNewsAward');
const metroContainer = document.getElementById('metro');
const columnsContainer = document.getElementById('columns');
const entertainmentContainer = document.getElementById('entertainment');
const cartoonContainer = document.getElementById('cartoon');
const businessContainer = document.getElementById('business');
const healthContainer = document.getElementById('health');
const sportsContainer = document.getElementById('sports');
const relationshipsContainer = document.getElementById('relationships');
const technologyContainer = document.getElementById('technology');
const educationContainer = document.getElementById('education');
const trendingContainer = document.getElementById('trending');
const modal = document.getElementById('productModal');
const modalContent = document.getElementById('modalProductDetails');

// Function to fetch data from API
async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // Assuming create_date is in ISO format or any format parsable by Date
    data.sort((a, b) => new Date(b.create_date) - new Date(a.create_date));
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    displayErrorMessage(error);
    return [];
  }
}

// .........................................Function to display error message
function displayErrorMessage(error) {
  const errorMessage = document.createElement('div');
  errorMessage.classList.add('error');
  errorMessage.textContent = `Error: ${error.message}`;
  productsContainer.innerHTML = '';
  productsContainer.appendChild(errorMessage);
}

// ....................Single page for latest News...............................
function single_page_latest(latestNews) {
  const single_pageContainer = document.getElementById('single_page_latest');
  single_pageContainer.innerHTML = '';

  const latestToShow = latestNews.filter(latests => latests.category.name === "Latest News");

  const latest = latestToShow.slice(0, 1);

  latest.forEach(latests => {
    const latestElement = document.createElement('div');
    latestElement.classList.add('single_page');
    latestElement.innerHTML = `
    <p style=" color: red; "><strong>.</strong> ${new Date(latests.create_date).toLocaleTimeString()}</p>
      <div class='shadow bg-body rounded'>
      <div>
      <img src="${latests.picture}" alt="${latests.title}" style="width: 100%; height: 400px;">
      </div>
      <div>
      <h6>${latests.title}</h6>
          </div>
         </div>
      `;
      latestElement.addEventListener('click', () => displayProductDetails(latests));
      single_pageContainer.appendChild(latestElement);
  });
}



// ..........................................Function to render latest News................
function renderlatest(latestNews) {
  latestContainer.innerHTML = '';

  const latestToShow = latestNews.filter(latests => latests.category.name === "Latest News");

  const latest = latestToShow.slice(1, 9);

  latest.forEach(latests => {
    const latestElement = document.createElement('div');
    latestElement.classList.add('product-containers');
    latestElement.innerHTML = `
    <p style=" color: red; "><strong>.</strong> ${new Date(latests.create_date).toLocaleTimeString()}</p>
      <div style="display: flex;" class='shadow bg-body rounded'>
      <div>
      <img src="${latests.picture}" alt="${latests.title}" style="width: 60%; height: 90px;">
      </div>
      <div>
      <h6>${latests.title}</h6>
          </div>
         </div>
      `;
      latestElement.addEventListener('click', () => displayProductDetails(latests));
      latestContainer.appendChild(latestElement);
  });
}


// ....................Single page for Politics News...............................
function single_page_Politics(politicsNews) {
  const single_pageContainer = document.getElementById('single_page_Politics');
  single_pageContainer.innerHTML = '';

  const latestToShow = politicsNews.filter(politic => politic.category.name === "Politics");

  const politics = latestToShow.slice(0, 1);

  politics.forEach(politic => {
    const politicsElement = document.createElement('div');
    politicsElement.classList.add('single_page');
    politicsElement.innerHTML = `
      <div class='shadow bg-body rounded'>
      <div>
      <img src="${politic.picture}" alt="${politic.title}" style="width: 100%; ">
      </div>
      <div>
      <h6>${politic.title}</h6>
          </div>
         </div>
      `;
      politicsElement.addEventListener('click', () => displayProductDetails(politic));
      single_pageContainer.appendChild(politicsElement);
  });
}


// ...........................................Function to render politics...News..............
function renderpoliticsNews(politicsNews) {
  politicsContainer.innerHTML = '';

  const latestToShow = politicsNews.filter(politic => politic.category.name === "Politics");

  const politics = latestToShow.slice(1, 5);

  politics.forEach(politic => {
    const politicsElement = document.createElement('div');
    politicsElement.classList.add('product-container');
    politicsElement.innerHTML = `
      <div style="display: flex;" class='shadow bg-body rounded'>
      <div>
      <img src="${politic.picture}" alt="${politic.title}" style="width: 60%; height: 90px;">
      </div>
      <div>
      <h6>${politic.title}</h6>
          </div>
         </div>
      `;
      politicsElement.addEventListener('click', () => displayProductDetails(politic));
    politicsContainer.appendChild(politicsElement);
  });
}


// ....................Single page for MegaNews News...............................
function single_page_MegaNews(MegaNews) {
  const single_pageContainer = document.getElementById('single_page_MegaNews');
  single_pageContainer.innerHTML = '';
  const MegaNewsToShow = MegaNews.filter(MegaAward => MegaAward.category.name === "Meganews Awards");

  const MegaNewsAward = MegaNewsToShow.slice(0, 1);

  MegaNewsAward.forEach(MegaAward => {
    const MegaNewsAwardElement = document.createElement('div');
    MegaNewsAwardElement.className = 'product';

    MegaNewsAwardElement.innerHTML = `
      <div class='shadow bg-body rounded'>
           <div>
        <img src="${MegaAward.picture}" alt="${MegaAward.title}" style="width: 100%; height: 400px;">
         </div>
           <div>
        <h6>${MegaAward.title}</h6>
          </div>
         </div>
      `;
      MegaNewsAwardElement.addEventListener('click', () => displayProductDetails(MegaAward));
      single_pageContainer.appendChild(MegaNewsAwardElement);
  });
}


// ................................Function to render MegaNews Award News............................................
function renderMegaNewsAward(MegaNews) {
  MegaNewsAwardContainer.innerHTML = '';
  const MegaNewsToShow = MegaNews.filter(MegaAward => MegaAward.category.name === "Meganews Awards");

  const MegaNewsAward = MegaNewsToShow.slice(1, 6);

  MegaNewsAward.forEach(MegaAward => {
    const MegaNewsAwardElement = document.createElement('div');
    MegaNewsAwardElement.className = 'product';

    MegaNewsAwardElement.innerHTML = `
      <div style="display: flex;" class='shadow bg-body rounded'>
           <div>
        <img src="${MegaAward.picture}" alt="${MegaAward.title}" style="width: 60%; height: 90px;">
         </div>
           <div>
        <h6>${MegaAward.title}</h6>
          </div>
         </div>
      `;
      MegaNewsAwardElement.addEventListener('click', () => displayProductDetails(MegaAward));
    MegaNewsAwardContainer.appendChild(MegaNewsAwardElement);
  });
}



// ....................Single page for metro News...............................
function single_page_metro(metroNews) {
  const single_pageContainer = document.getElementById('single_page_metro');
  single_pageContainer.innerHTML = '';
  const metrosToShow = metroNews.filter(metro => metro.category.name === "Metro");

  const metros = metrosToShow.slice(0, 1);

  metros.forEach(metro => {
    const metroElement = document.createElement('div');
    metroElement.className = 'single_page';

    metroElement.innerHTML = `
      <div class='shadow bg-body rounded'>
           <div>
        <img src="${metro.picture}" alt="${metro.title}" style="width: 100%; height: 400px;">
         </div>
           <div>
        <h6>${metro.title}</h6>
          </div>
         </div>
      `;
      metroElement.addEventListener('click', () => displayProductDetails(metro));
      single_pageContainer.appendChild(metroElement);
  });
}

// ...................................Function to render metro News............................................
function renderMetroNews(metroNews) {
  metroContainer.innerHTML = '';
  const metrosToShow = metroNews.filter(metro => metro.category.name === "Metro");

  const metros = metrosToShow.slice(1, 5);

  metros.forEach(metro => {
    const metroElement = document.createElement('div');
    metroElement.className = 'product';

    metroElement.innerHTML = `
      <div style="display: flex;" class='shadow bg-body rounded'>
           <div>
        <img src="${metro.picture}" alt="${metro.title}" style="width: 60%; height: 90px;">
         </div>
           <div>
        <h6>${metro.title}</h6>
          </div>
         </div>
      `;
      metroElement.addEventListener('click', () => displayProductDetails(metro));
    metroContainer.appendChild(metroElement);
  });
}

//.......................................... Function to render columns News........................
function displayColumns(columns) {
  columnsContainer.innerHTML = '';
  const columnsNews = columns.filter(column => column.category.name === "Columns");

  const columnsToShow = columnsNews.slice(0, 10); 
   
  columnsToShow.forEach(column => {
      const columnsElement = document.createElement('div');
      columnsElement.className = 'columnsnews';

      columnsElement.innerHTML = `
      <p style=" color: red; "><strong>.</strong>${new Date(column.create_date).toLocaleTimeString()}</p>
      <div class='shadow bg-body rounded'>
          <div>
              <img src="${column.picture}" alt="${column.title}" >
              </div>
              <div>
                  <h6>${column.title}</h6>
          </div>
      </div>
      `;

      columnsElement.addEventListener('click', () => displayProductDetails(column));
      columnsContainer.appendChild(columnsElement);
  });
}

//.......................................... Function to render entertainment News........................
function renderEntertainmentNews(entertainment) {
  entertainmentContainer.innerHTML = '';
  const entertainmentNews = entertainment.filter(entertain => entertain.category.name ===  "Entertainment");
  const entertainToShow = entertainmentNews.slice(0, 10); 

  entertainToShow.forEach(entertain => {
      const entertainmentElement = document.createElement('div');
      entertainmentElement.className = 'product';

      entertainmentElement.innerHTML = `
      <div style="display: flex;" class='shadow bg-body rounded'>
           <div>
        <img src="${entertain.picture}" alt="${entertain.title}" style="width: 60%; height: 90px;">
         </div>
           <div>
        <h6>${entertain.title}</h6>
          </div>
         </div>
      `;
      entertainmentElement.addEventListener('click', () => displayProductDetails(entertain));
      entertainmentContainer.appendChild(entertainmentElement);
  });
}

//.......................................... Function to render cartoon News........................
function displayCartoon(cartoonNews) {
  cartoonContainer.innerHTML = '';
  const cartoons = cartoonNews.filter(cartoon => cartoon.category.name === "Cartoon");

  const cartoonToShow = cartoons.slice(0, 10);  
  cartoonToShow.forEach(cartoon => {
      const cartoonElement = document.createElement('div');
      cartoonElement.className = 'cartoons_container';

      cartoonElement.innerHTML = `
      <div class='shadow bg-body rounded'>
           <div>
        <img src="${cartoon.picture}" alt="${cartoon.title}" style="width: 99%; height: 200px;">
         </div>
           <div>
        <h6>${cartoon.title}</h6>
          </div>
         </div>
      `;
      cartoonElement.addEventListener('click', () => displayProductDetails(cartoon));
      cartoonContainer.appendChild(cartoonElement);
  });
}

//.......................................... Function to render business News........................
function renderBusinessNews(business) {
  businessContainer.innerHTML = '';
  const businessToShow = business.filter(buz => buz.category.name ===  "Business");
  const businessNews = businessToShow.slice(0, 10); 

  businessNews.forEach(buz => {
      const businessElement = document.createElement('div');
      businessElement.className = 'product';

      businessElement.innerHTML = `
      <div style="display: flex;" class='shadow bg-body rounded'>
           <div>
        <img src="${buz.picture}" alt="${buz.title}" style="width: 60%; height: 90px;">
         </div>
           <div>
        <h6>${buz.title}</h6>
          </div>
         </div>
      `;
      businessElement.addEventListener('click', () => displayProductDetails(buz));
      businessContainer.appendChild(businessElement);
  });
}


//.......................................... Function to render health News........................
function renderHealthsNews(health) {
  healthContainer.innerHTML = '';
  const healthNewsToShow = health.filter(healths => healths.category.name ===  "Health");

  const healthNews = healthNewsToShow.slice(0, 10); 

  healthNews.forEach(healths => {
      const healthElement = document.createElement('div');
      healthElement.className = 'product';

      healthElement.innerHTML = `
      <div style="display: flex;" class='shadow bg-body rounded'>
           <div>
        <img src="${healths.picture}" alt="${healths.title}" style="width: 60%; height: 90px;">
         </div>
           <div>
        <h6>${healths.title}</h6>
          </div>
         </div>
      `;
      healthElement.addEventListener('click', () => displayProductDetails(healths));
      healthContainer.appendChild(healthElement);
  });
}

//.......................................... Function to render  sports News........................
function renderSportNews( sports) {
  sportsContainer.innerHTML = '';
  const  sportsToShow =  sports.filter( sport => sport.category.name ===  "Sports");
  const sportsNews = sportsToShow.slice(0, 10); 

  sportsNews.forEach(sport => {
      const sportsElement = document.createElement('div');
      sportsElement.className = 'product';

      sportsElement.innerHTML = `
      <div style="display: flex;" class='shadow bg-body rounded'>
           <div>
        <img src="${sport.picture}" alt="${sport.title}" style="width: 60%; height: 90px;">
         </div>
           <div>
        <h6>${sport.title}</h6>
          </div>
         </div>
      `;
      sportsElement.addEventListener('click', () => displayProductDetails(sport));
      sportsContainer.appendChild(sportsElement);
  });
}

//.......................................... Function to render  relationships News........................
function renderRelationshipNews( relationships) {
  relationshipsContainer.innerHTML = '';
  const  relationshipsToShow =  relationships.filter( relationship => relationship.category.name ===  "Relationships");
  const relationshipsNews = relationshipsToShow.slice(0, 10);

  relationshipsNews.forEach(relationship => {
      const relationshipsElement = document.createElement('div');
      relationshipsElement.className = 'product';

      relationshipsElement.innerHTML = `
      <div style="display: flex;" class='shadow bg-body rounded'>
           <div>
        <img src="${relationship.picture}" alt="${relationship.title}" style="width: 60%; height: 90px;">
         </div>
           <div>
        <h6>${relationship.title}</h6>
          </div>
         </div>
      `;
      relationshipsElement.addEventListener('click', () => displayProductDetails(relationship));
      relationshipsContainer.appendChild(relationshipsElement);
  });
}

//.......................................... Function to render  technologyContainer News........................
function renderTechnologyNews( technology) {
  technologyContainer.innerHTML = '';
  const  technologyToShow =  technology.filter( technologies => technologies.category.name ===  "Technology");
  const technologyNews = technologyToShow.slice(0, 10);

  technologyNews.forEach(technologies => {
      const technologyElement = document.createElement('div');
      technologyElement.className = 'product';

      technologyElement.innerHTML = `
      <div style="display: flex;" class='shadow bg-body rounded'>
           <div>
        <img src="${technologies.picture}" alt="${technologies.title}" style="width: 60%; height: 90px;">
         </div>
           <div>
        <h6>${technologies.title}</h6>
          </div>
         </div>
      `;
      technologyElement.addEventListener('click', () => displayProductDetails(technologies));
      technologyContainer.appendChild(technologyElement);
  });
}

//.......................................... Function to render  Education News........................
function renderEducationNews( educations) {
  educationContainer.innerHTML = '';
  const  educationsToShow =  educations.filter( education => education.category.name ===  "Education");
  const educationNews = educationsToShow.slice(0, 10);

  educationNews.forEach(education => {
      const educationElement = document.createElement('div');
      educationElement.className = 'product';

      educationElement.innerHTML = `
      <div style="display: flex;" class='shadow bg-body rounded'>
           <div>
        <img src="${education.picture}" alt="${education.title}" style="width: 60%; height: 90px;">
         </div>
           <div>
        <h6>${education.title}</h6>
          </div>
         </div>
      `;
      educationElement.addEventListener('click', () => displayProductDetails(education));
      educationContainer.appendChild(educationElement);
  });
}

// Function to show product details in a modal.............................................
function displayProductDetails(product) {
  modalContent.innerHTML = `
  <h4 class="mb-3 text-center">${product.category.name}</h4>
  <h2>${product.title}</h2>
  <img src="${product.picture}" alt="${product.title}">
  <h5 class="mb-5"><strong>Author:</strong> ${product.author}</h5>
  <p>${product.content}</p>
  `;
  modal.style.display = 'block';
}

//.................START FROM......................... Function to render Trending News........................
function renderTrendingNews(products) {
  trendingContainer.innerHTML = '';
  const trendingToShow = products.filter(product => product.category.name === "Trending News");
  const trendingProducts = trendingToShow.slice(0, 10);

  trendingProducts.forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'product';

    productElement.innerHTML = `
    <p style=" color: red; ">${new Date(product.create_date).toLocaleTimeString()}</p>
      <div style="display: flex;" class='shadow bg-body rounded'>
           <div>
        <img src="${product.picture}" alt="${product.title}" style="width: 60%; height: 90px;">
         </div>
           <div>
        <h6>${product.title}</h6>
          </div>
         </div>
      `;
    productElement.addEventListener('click', () => displayTrendingDetails(product));
    trendingContainer.appendChild(productElement);
  });
}
// Function to show trending details.............................................
function displayTrendingDetails(product) {
  modalContent.innerHTML = `
  <h4 class="mb-3 text-center">${product.category.name}</h4>
  <h2>${product.title}</h2>
  <img src="${product.picture}" alt="${product.title}">
  <h5 class="mb-5"><strong>Author:</strong> ${product.author}</h5>
  <p>${product.content}</p>
  `;

  modal.style.display = 'block';

  // Scroll up to the product details container
  modalContent.scrollIntoView({ behavior: 'smooth' });
}
//.................END HERE.................................................


// Event listener to close the modal when clicking outside of it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

// Section to share
function shareToSocialMedia(platform) {
  const url = window.location.href;
  const title = document.title;
  let shareUrl = '';

  switch(platform) {
      case 'facebook':
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&t=${encodeURIComponent(title)}`;
          break;
      case 'twitter':
          shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
          break;
      case 'whatsapp':
          shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + url)}`;
          break;
      case 'email':
          shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;
          break;
      case 'sms':
          shareUrl = `sms:?body=${encodeURIComponent(title + " " + url)}`;
          break;
      case 'instagram':
          shareUrl = `https://www.instagram.com/`;
          break;
      case 'tiktok':
          shareUrl = `https://www.tiktok.com/`;
          break;
      case 'messenger':
          shareUrl = `fb-messenger://share?link=${encodeURIComponent(url)}&app_id=YOUR_APP_ID`; // replace YOUR_APP_ID with your Facebook app ID
          break;
      case 'telegram':
          shareUrl = `https://api.telegram.com/send?text=${encodeURIComponent(title + " " + url)}`;
          break;
          case 'copylink':
      case 'copy':
          if (navigator.clipboard) {
              navigator.clipboard.writeText(url).then(() => {
                  alert('Link copied to clipboard!');
              }).catch(err => {
                  console.error('Failed to copy link: ', err);
              });
          } else {
              fallbackCopyTextToClipboard(url);
          }
          return;
      case 'native':
          if (navigator.share) {
              navigator.share({
                  title: title,
                  text: title,
                  url: url
              }).then(() => {
                  console.log('Successfully shared');
              }).catch((error) => {
                  console.error('Error sharing', error);
              });
          } else {
              alert('Web Share API is not supported in your browser.');
          }
          return;
      case 'chrome':
      case 'firefox':
      case 'edge':
      case 'safari':
          alert(`To share this link on ${platform.charAt(0).toUpperCase() + platform.slice(1)}, please use your browser's sharing options.`);
          return;
      default:
          console.log('Unknown platform');
          return;
  }

  if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
  }
}

function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
      document.execCommand('copy');
      alert('Link copied to clipboard!');
  } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}

// Call this function to fetch and render products
fetchData().then(data => {
  if (data.length > 0) {
    renderlatest(data);
    renderpoliticsNews(data);
    renderMegaNewsAward(data);
    renderMetroNews(data);
    displayColumns(data);
    renderEntertainmentNews(data);
    displayCartoon(data);
    renderBusinessNews(data);
    renderHealthsNews(data);
    renderSportNews(data);
    renderRelationshipNews(data);
    renderTechnologyNews(data);
    renderEducationNews(data);
    renderTrendingNews(data);
    // for single pages
    single_page_latest(data)
    single_page_Politics(data)
    single_page_MegaNews(data)
    single_page_metro(data)

  }
});


// Call the functions on page load
window.onload = updateDateTime;
setInterval(updateDateTime, 1000);



