// do not delete anything from this code, just add stuff!
// this is the skeleton for the fetch function, the code for the card has already been written for you
// create a variable called breedNames and store in it the response of fetching all the names of breeds from the api
// you will have to transform that response (an object) into an array (use Object.keys() method... if you don't know it look for it on MDN :P)
// iterate over breedNames using forEach and this way generating a card for each breedName
// each breedName should then be the card-title of the card and the alt of the image (you will get the images in part 2 of the exercise)
// image src should be empty for now

function getDogs() {

  const breedNames = [] 

  const container = document.querySelector('.container-grid');

  fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
      const breeds = Object.keys(data.message);
      breedNames.push(...breeds);

      breedNames.forEach(breedName => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.maxWidth = '300px';

        card.innerHTML = `
          <img class="card-img-top" src="" alt="${breedName}" height="300px" style="object-fit: cover; object-position: center;">
          <div class="card-body">
            <h5 class="card-title">${breedName}</h5>
          </div>
        `;

        container.appendChild(card);

        const img = card.querySelector('img');

 
        fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
          .then(res => res.json())
          .then(imgData => {
            img.src = imgData.message;
          })
          .catch(err => {
            console.error(`Image fetch failed for ${breedName}`, err);
            img.alt = `Image not found for ${breedName}`;
          });
      });
    });
  }

getDogs();

//   container.innerHTML += `
//     <div class="card" style="max-width: 300px">
//         <img class="card-img-top" src="" alt="-BREED NAME GOES HERE-" height="300px" style="object-fit: cover; object-position: center;">
//         <div class="card-body">
//          <h5 class="card-title">-BREED NAME GOES HERE-</h5>
//         </div>
//     </div>`
// }

// getDogs();
