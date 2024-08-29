'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const container = document.querySelector('.container');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
            <img class="country__img" src="${data.flags.svg}" />
            <div class="country__data">
              <h3 class="country__name">${data.name.common}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)} people</p>
              <p class="country__row"><span>🗣️</span>${
                Object.values(data.languages)[0]
              }</p>
              <p class="country__row"><span>💰</span>${
                Object.values(Object.values(data.currencies)[0])[0]
              }</p>
            </div>
          </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //   countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  //AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);

    // Get neighbour country
    const neighbour = data.borders?.[0];
    if (!neighbour) return;

    //AJAX call country2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('usa');

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

////////////////////////////////////////////////////////////////////

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// const getJSON = function(url, errorMsg = 'Something went wrong'){
//     fetch(url).then(response => {
//         if (!response.ok)
//           throw new Error(`${errorMsg} (${response.status})`);
//         return response.json();
//       })
// }

// const getCountryData = function (country) {
//   // Country1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) return;

//       // Country2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {

//         if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//         response.json()
//     })
//     .then(data => {
//       renderCountry(data[0], 'neighbour');
//     })
//     .catch(err => {
//       console.error(`${err} 👺`);
//       renderError(`Something went wrong ${err.message}. Try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData(`jjjjjj`);
// });

///////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////
//Challenge1
// const getCountryName = function (state) {
//   return fetch(`https://restcountries.com/v3.1/alpha/${state}`)
//     .then(response => response.json())
//     .then(data => data[0].name.common);
// };

// const whereAmI = function (lat, lng) {
//   console.log(lat, lng);
//   fetch(
//     `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=${5}&appid=7da50835c146258a590e605b1162efac`
//   )
//     .then(response => response.json())
//     .then(async data => {
//       const country = await getCountryName(data[0].country);
//       console.log(`You are in ${data[0].name}, ${country}`);
//       getCountryData(country);
//     })
//     .catch(err => console.error(`${err.message}`));
//   // .then(data => console.log(data));
// };

// whereAmI(-33.933, 18.474);

////////////////////////////////////////////////////////////////////////////////////////////

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }

    return response.json();
  });
};

const getCountryData = function (country) {
  // Country1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      console.log(data);
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error(`No neighbour found!`);

      // Country2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => {
      renderCountry(data[0], 'neighbour');
    })
    .catch(err => {
      console.error(`${err} 👺`);
      renderError(`Something went wrong ${err.message}. Try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', function () {
//   getCountryData(`germany`);
// });
// getCountryData(`germany`);

/*
//////////////////////////////////
//The Event Loop in Practice
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved Promise 1').then(res => console.log(res));
Promise.resolve('Resolved Promise 2').then(res => {
  for (let i = 0; i < 100; i++) {}
  console.log(res);
});
console.log('Test end');

// Building a Simple Promise

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lotter draw is happning');

  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN ');
    } else {
      reject(new Error('You lost your money'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 seconds'));

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('abc'))
  .then(x => console.log(x))
  .catch(x => console.error(x));


// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    //   position => resolve(position),
    // err => reject(err)
    // })
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = function () {
  getPosition()
    .then(pos => {
      console.log(pos.coords);
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=${5}&appid=7da50835c146258a590e605b1162efac`
      );
    })
    .then(response => response.json())
    .then(async data => {
      const country = await getCountryName(data[0].country);
      console.log(`You are in ${data[0].name}, ${country}`);
      getCountryData(country);
    })
    .catch(err => console.error(`${err.message}`));
  // .then(data => console.log(data));
};

// whereAmI(-33.933, 18.474);
whereAmI();


//////////////Challenge 2 ///////////////////
//My solution

const firstImage = 'img/img-1.jpg';
const secondImage = 'img/img-2.jpg';
const thirdImage = 'img/img-3.jpg';

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve) {
    const img = document.createElement('img');
    img.src = `${imgPath}`;
    console.log(img);
    img.addEventListener('load', function () {
      this.classList.add('images');
      container.append(this);
      resolve(this);
    });
  });
};

createImage(firstImage)
  .then(res => {
    wait(2)
      .then(() => {
        res.style.display = 'none';
        return wait(2);
      })
      .then(() =>
        createImage(secondImage).then(res =>
          wait(2)
            .then(() => {
              res.style.display = 'none';
              return wait(2);
            })
            .then(() =>
              createImage(thirdImage).then(res =>
                wait(2).then(() => (res.style.display = 'none'))
              )
            )
        )
      );
  })
  .catch(err => console.error(err));


//Jonas solution

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      img.classList.add('images');
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  });


const getCountryName = function (state) {
  return fetch(`https://restcountries.com/v3.1/alpha/${state}`)
    .then(response => response.json())
    .then(data => data[0].name.common);
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    //   position => resolve(position),
    // err => reject(err)
    // })
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  //Geo locatino
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    //Reverse geocoding
    const resGeo = await fetch(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=${5}&appid=7da50835c146258a590e605b1162efac`
    );
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();
    const country = await getCountryName(dataGeo[0].country);
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if (!resGeo.ok) throw new Error('Problem getting country data');
    const data = await res.json();
    renderCountry(data[0]);
    return `You are in ${dataGeo[0].name}, ${country}`;
  } catch (err) {
    console.error(err);
    renderError(`${err.message}`);
    //Reject promise returned from async function
    throw err;
  }
};

console.log('1:Will get location');
// const city = whereAmI();
// console.log(city);
// whereAmI()
//   .then(city => console.log(city))
//   .catch(err => console.error(`2:${err.message}`))
//   .finally(() => console.log('3: Finished getting'));
// console.log('3:Finished getting location');

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2:${city}`);
  } catch (err) {
    console.error(`2:${err.message}`);
  }
  console.log('3: Finished getting');
})();

// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }

//////////////////////////////////////////
//Running Promises in Parallel

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.map(d => console.log(d[0].capital)));
  } catch (err) {
    console.error(err);
  }
};

get3Countries('japan', 'usa', 'korea');

/////////////////////////////////////////
//Promis.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/japan`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('request took too long'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/mexico`),
  timeout(0.01),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Success'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

//primis.any
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

/////////////////////////////////////////////////
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       img.classList.add('images');
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   });

/////////Part 1
//My solution

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
*/

const imgContainer = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      img.classList.add('images');
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

const loadNpause = async function () {
  try {
    //Image 1
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    //Image 2
    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';

    //Image 3
    img = await createImage('img/img-3.jpg');
    console.log('Image 3 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};

const loadAll = async function (imgArr) {
  const imgs = imgArr.map(async img => await createImage(img));

  const imgsEl = await Promise.all(imgs);
  imgsEl.map(el => el.classList.add('parallel'));
  console.log(imgsEl);
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
