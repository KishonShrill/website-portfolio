const requestMongoURLS = () => {
  $(document).ready(function() {
    // Make an AJAX request to fetch the top 8 URLs from your backend
    $.ajax({
      url: 'http://localhost:5173/website-portfolio/mas_amicus/',  // Replace with your backend API endpoint to fetch the top 8 URLs
      method: 'GET',
      success: function(data) {
        // Iterate through the data and create the HTML structure for each project
        data.forEach(function(item, index) {
          const imgWrapper = $('<div>', { class: 'featured__img-wrapper' });
          const img = $('<img>', {
            class: 'lazy loading',
            src: 'https://fakeimg.pl/1920x1080/?retina=1&text=こんにちは&font=noto',
            'data-src': item.imgUrl, // Use the imgUrl from MongoDB
            alt: item.name // Use the project name as alt text
          });
          imgWrapper.append(img);
          $('#featuredImgContainer').append(imgWrapper);
        });
      },
      error: function(err) {
        console.error('Error fetching data:', err);
      }
    });
  });  
}

export default requestMongoURLS;