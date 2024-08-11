        // Function to fetch data from the API and populate the carousel
        function populateCarousel() {
            $.ajax({
                url: 'http://127.0.0.1:8000/carousel/',
                method: 'GET',
                success: function(response) {
                    $('#carouselInner').empty(); // Clear previous carousel items
                    response.forEach(function(item, index) {
                        // Add active class to the first item
                        var activeClass = (index === 0) ? 'active' : '';
                        // Append carousel item with fetched data
                        $('#carouselInner').append(
                            '<div class="carousel-item ' + activeClass + '">' +
                            '<img src="' + item.image + '" class="d-block w-100" style="height: 300px;" alt="' + item.slide + '">' +
                            '<div class="carousel-caption">' +
                            '<h3>' + item.slide + '</h3>' +
                            '<p>' + item.body + '</p>' +
                            '</div>' +
                            '</div>'
                        );
                    });
                },
                error: function(xhr, status, error) {
                    console.error('Failed to fetch data:', status, error);
                }
            });
        }

        // Call the populateCarousel function when the page loads
        $(document).ready(function() {
            populateCarousel();
        });
 