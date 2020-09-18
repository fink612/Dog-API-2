'use strict';

function getDogImage(quantity) {
  fetch(`https://dog.ceo/api/breeds/image/random/${quantity}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  let html = ''
  for (let i=0; i<responseJson.message.length; i++) {
    html += `<img src="${responseJson.message[i]}" />`
  }
  $('.results-img').html(html)
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let quantity = $('#amount').val()
    
    getDogImage(quantity);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
