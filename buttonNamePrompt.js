const button = document.querySelector('button');

button.onclick = function() {
  let day = prompt('What day is it?');
  alert('Happy ' + day + ', thanks for clicking!');
}
