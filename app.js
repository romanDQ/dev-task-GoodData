let movieData = [
    { name: '21 And Over', genre: 'Comedy', dist: 'Relativity M...', relDate: '2/28/2013', totalScore: '43.6', cumulGross: '$12,880,227', locsOpen: 771 },
    { name: '21 Jump Street', genre: 'Action', dist: 'Sony', relDate: '3/16/2012', totalScore: '23.2', cumulGross: '$34,873,361', locsOpen: 1233 },
    { name: '22 Jump Street', genre: 'Comedy', dist: 'Sony', relDate: '6/13/2014', totalScore: '53.2', cumulGross: 'n/a', locsOpen: 'n/a' },
    { name: '2 Guns', genre: 'Action', dist: 'Universal', relDate: '8/1/2013', totalScore: '76.0', cumulGross: '$35,878,123', locsOpen: 9233 },
    { name: '300: Rise of an Empire', genre: 'Action', dist: 'Warner Bros.', relDate: '3/7/2014', totalScore: '95.4', cumulGross: 'n/a', locsOpen: 'n/a' },

];

window.onload = () => {
    loadTableData(movieData)
}

function loadTableData(movieData) {
    const tableBody = document.getElementById('movieData')
    let dataHTML = '';

    for (let movie of movieData) {
        dataHTML += `<tr>  
              <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">${movie.name}</td>
                <td>${movie.genre}</td>
                <td>${movie.dist}</td>
                <td>${movie.relDate}</td>
                <td>${movie.totalScore}</td>
                <td>${movie.cumulGross}</td>
                <td>${movie.locsOpen}</td>
              </tr>`;
    }
    tableBody.innerHTML = dataHTML;

}