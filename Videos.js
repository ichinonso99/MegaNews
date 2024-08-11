let currentPage = 1;
const productsPerPage = 5;
let allProducts = [];

async function fetchData() {
    try {
        const response = await fetch('http://127.0.0.1:8000/video_audeo/');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        data.sort((a, b) => new Date(b.date_added) - new Date(a.date_added));
        allProducts = data.filter(product => product.vendor === "videos");
        displayVideos();
        allcaro = data.filter(product => product.vendor === "carousel");
        displayCarousel();
        Advet = data.filter(product => product.vendor === "advertize");
        displayAdvert();
        displayAdvertTwo();
        displayAdvertThree();
        displayAdvertFour();
        displayAdvertFive();
        displayAdvertSix();
        displayAdvertSeven();
        displayAdvertEight();
        displayAdvertNine();
        displayAdvertTen();
        displayAdvertEleven();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

        // ......................section for fetching Video News........................................
function displayVideos() {
    const jeweleryContainer = document.getElementById('videos');
    jeweleryContainer.innerHTML = '';

    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    const productsToShow = allProducts.slice(start, end);

    productsToShow.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'videosList';

        productElement.innerHTML = `
        <p style=" color: red; ">${new Date(product.date_added).toLocaleTimeString()}</p>
        <div class='shadow bg-body rounded'>
            <video style="background-color: black;" width="320" height="360" controls>
          <source src=${product.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>${product.title}</p>

        </div>
        `;

        productElement.addEventListener('click', () => displayProductDetails(product));
        jeweleryContainer.appendChild(productElement);
    });
}


        //........................ section for fetching carousel ........................................
        function displayCarousel() {
            const jeweleryContainer = document.getElementById('caro');
            jeweleryContainer.innerHTML = '';
        
            const productsToShow = allcaro.slice(0, 1);
        
            productsToShow.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'carousels';
        
                productElement.innerHTML = `

                <div class='shadow bg-body rounded'>
                <img src=${product.image} alt="${product.title}" style="width: 100%; height: 70px;">
                
                </div>
                `;
                // <p>${product.title}</p>
                // <p>${product.body}</p>
        
                productElement.addEventListener('click', () => displayProductDetails(product));
                jeweleryContainer.appendChild(productElement);
            });
        }
        
//.........................................START OF ADVERTISEMENT.............................................

        // .........................section for fetching  displayAdvertTwo ..........ONE..............................
        function displayAdvertTwo() {
            const jeweleryContainer = document.getElementById('advert1');
            jeweleryContainer.innerHTML = '';
        
            const productsToShow = Advet.slice(0, 1);
        
            productsToShow.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'advertizement';
        
                productElement.innerHTML = `
                <p style="text-align: center;">${product.title}</p>
                <div class='shadow bg-body rounded'>
                <img src=${product.image} alt="${product.title}" >
                <h6>${product.body}</h6>
                </div>
                `;
        
                productElement.addEventListener('click', () => displayProductDetails(product));
                jeweleryContainer.appendChild(productElement);
            });
        }

        
        // .........................section for fetching  advertizement ........TWO................................
        function displayAdvert() {
            const jeweleryContainer = document.getElementById('advert2');
            jeweleryContainer.innerHTML = '';
        
            const productsToShow = Advet.slice(1, 2);
        
            productsToShow.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'advertizement';
        
                productElement.innerHTML = `

                <p style="text-align: center;">${product.title}</p>
                <div class='shadow bg-body rounded'>
                <img src=${product.image} alt="${product.title}" >
                <h6>${product.body}</h6>
                </div>
                `;
        
                productElement.addEventListener('click', () => displayProductDetails(product));
                jeweleryContainer.appendChild(productElement);
            });
        }
    
    
        // .........................section for fetching  displayAdvertTwo ..........   Three..............................
        function displayAdvertThree() {
            const jeweleryContainer = document.getElementById('advert3');
            jeweleryContainer.innerHTML = '';
        
            const productsToShow = Advet.slice(2, 3);
        
            productsToShow.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'advertizement';
        
                productElement.innerHTML = `

                <p style="text-align: center;">${product.title}</p>
                <div class='shadow bg-body rounded'>
                <img src=${product.image} alt="${product.title}" >
                <h6>${product.body}</h6>
                </div>
                `;
        
                productElement.addEventListener('click', () => displayProductDetails(product));
                jeweleryContainer.appendChild(productElement);
            });
        }
    
        // .........................section for fetching  displayAdvertTwo ..........Four..............................
        function displayAdvertFour() {
            const jeweleryContainer = document.getElementById('advert4');
            jeweleryContainer.innerHTML = '';
        
            const productsToShow = Advet.slice(3, 4);
        
            productsToShow.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'advertizement';
        
                productElement.innerHTML = `

                <p style="text-align: center;">${product.title}</p>
                <div class='shadow bg-body rounded'>
                <img src=${product.image} alt="${product.title}" >
                <h6>${product.body}</h6>
                </div>
                `;
        
                productElement.addEventListener('click', () => displayProductDetails(product));
                jeweleryContainer.appendChild(productElement);
            });
        }
    
        // .........................section for fetching  displayAdvertTwo ..........Five..............................
        function displayAdvertFive() {
            const jeweleryContainer = document.getElementById('advert5');
            jeweleryContainer.innerHTML = '';
        
            const productsToShow = Advet.slice(4, 5);
        
            productsToShow.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'advertizements';
        
                productElement.innerHTML = `

                <p style="text-align: center;">${product.title}</p>
                <div class='shadow bg-body rounded'>
                <img src=${product.image} alt="${product.title}" style="width: 100%; height: 400px;">
                <h6>${product.body}</h6>
                </div>
                `;
        
                productElement.addEventListener('click', () => displayProductDetails(product));
                jeweleryContainer.appendChild(productElement);
            });
        }
    
        // .........................section for fetching  displayAdvertSix ..........Six..............................
        function displayAdvertSix() {
            const jeweleryContainer = document.getElementById('advert6');
            jeweleryContainer.innerHTML = '';
        
            const productsToShow = Advet.slice(5, 6);
        
            productsToShow.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'advertizements';
        
                productElement.innerHTML = `

                <p style="text-align: center;">${product.title}</p>
                <div class='shadow bg-body rounded'>
                <img src=${product.image} alt="${product.title}" style="width: 100%; height: 400px;">
                <h6>${product.body}</h6>
                </div>
                `;
        
                productElement.addEventListener('click', () => displayProductDetails(product));
                jeweleryContainer.appendChild(productElement);
            });
        }
    
        // .........................section for fetching  displayAdvertSeven ..........Seven..............................
        function displayAdvertSeven() {
            const jeweleryContainer = document.getElementById('advert7');
            jeweleryContainer.innerHTML = '';
        
            const productsToShow = Advet.slice(6, 7);
        
            productsToShow.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'advertizements';
        
                productElement.innerHTML = `

                <p style="text-align: center;">${product.title}</p>
                <div class='shadow bg-body rounded'>
                <img src=${product.image} alt="${product.title}" >
                <h6>${product.body}</h6>
                </div>
                `;
        
                productElement.addEventListener('click', () => displayProductDetails(product));
                jeweleryContainer.appendChild(productElement);
            });
        }
    
        // .........................section for fetching  displayAdvertEight..........Eight..............................
        function displayAdvertEight() {
            const jeweleryContainer = document.getElementById('advert8');
            jeweleryContainer.innerHTML = '';
        
            const productsToShow = Advet.slice(7, 8);
        
            productsToShow.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'advertizement';
        
                productElement.innerHTML = `

                <p style="text-align: center;">${product.title}</p>
                <div class='shadow bg-body rounded'>
                <img src=${product.image} alt="${product.title}" >
                <h6>${product.body}</h6>
                </div>
                `;
        
                productElement.addEventListener('click', () => displayProductDetails(product));
                jeweleryContainer.appendChild(productElement);
            });
        }
    
        // .........................section for fetching  displayAdvertNine ..........Nine..............................
        function displayAdvertNine() {
            const jeweleryContainer = document.getElementById('advert9');
            jeweleryContainer.innerHTML = '';
        
            const productsToShow = Advet.slice(8, 9);
        
            productsToShow.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'advertizement';
        
                productElement.innerHTML = `

                <p style="text-align: center;">${product.title}</p>
                <div class='shadow bg-body rounded'>
                <img src=${product.image} alt="${product.title}" >
                <h6>${product.body}</h6>
                </div>
                `;
        
                productElement.addEventListener('click', () => displayProductDetails(product));
                jeweleryContainer.appendChild(productElement);
            });
        }
    
        // .........................section for fetching  displayAdvertTen ..........Ten..............................
        function displayAdvertTen() {
            const jeweleryContainer = document.getElementById('advert10');
            jeweleryContainer.innerHTML = '';
        
            const productsToShow = Advet.slice(9, 10);
        
            productsToShow.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'advertizements';
        
                productElement.innerHTML = `

                <p style="text-align: center;">${product.title}</p>
                <div class='shadow bg-body rounded'>
                <img src=${product.image} alt="${product.title}" style="width: 100%; height: 400px;">
                <h6>${product.body}</h6>
                </div>
                `;
        
                productElement.addEventListener('click', () => displayProductDetails(product));
                jeweleryContainer.appendChild(productElement);
            });
        }
    
        // .........................section for fetching  displayAdvertEleven ..........Eleven..............................
        function displayAdvertEleven() {
            const jeweleryContainer = document.getElementById('advert11');
            jeweleryContainer.innerHTML = '';
        
            const productsToShow = Advet.slice(10, 11);
        
            productsToShow.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'advertizement';
        
                productElement.innerHTML = `

                <p style="text-align: center;">${product.title}</p>
                <div class='shadow bg-body rounded'>
                <img src=${product.image} alt="${product.title}" >
                <h6>${product.body}</h6>
                </div>
                `;
        
                productElement.addEventListener('click', () => displayProductDetails(product));
                jeweleryContainer.appendChild(productElement);
            });
        }
    
 
//.........................................THE END OF ADVERTISEMENT.............................................



// Call this function to fetch and render products
fetchData().then(data => {
    if (data.length > 0) {
        displayVideos();
        displayCarousel();
        displayAdvert()
        displayAdvertTwo()
        displayAdvertThree()
        displayAdvertFour()
        displayAdvertFive()
        displayAdvertSix()
        displayAdvertSeven()
        displayAdvertEight()
        displayAdvertNine()
        displayAdvertTen()
        displayAdvertEleven()

  
    }
  });
   

window.onload = fetchData;