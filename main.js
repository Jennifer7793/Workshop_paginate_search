document.addEventListener('DOMContentLoaded', () => {
  fetch('https://top-250-movies.herokuapp.com/api/v1/movies/top')
    .then(function(response) {
      return response.json();
    })
    .then(function(infor) {
      infor.forEach(element => {
        const content = document.querySelector('tbody')
        content.innerHTML += `
          <tr>
            <td>${element.rank}</td>
            <td><a href="${element.link}">${element.title}</a></td>
            <td>${element.year}</td>
            <td>${element.rating}</td>
            <td>${element.director}</td>
            <td>${element.main_stars}</td>
          </tr> 
          `
        console.log(element);
      });
    })
})