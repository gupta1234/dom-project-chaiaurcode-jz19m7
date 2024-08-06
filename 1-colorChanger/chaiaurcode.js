const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    // switch(e.target.id){
    //   case 'grey':
    //   body.style.backgroundColor = e.target.id;
    //   break;
    // }
    // switch(e.target.id){
    //   case 'white':
    //   body.style.backgroundColor = e.target.id;
    //   break;
    // }
    // switch(e.target.id){
    //   case 'blue':
    //   body.style.backgroundColor = e.target.id;
    //   break;
    // }
    // switch(e.target.id){
    //   case 'yellow':
    //   body.style.backgroundColor = e.target.id;
    //   break;
    // }
    // if (e.target.id === 'grey') {
    //   body.style.background = e.target.id;
    // }
    // if (e.target.id === 'white') {
    //   body.style.background = e.target.id;
    // }
    // if (e.target.id === 'blue') {
    //   body.style.background = e.target.id;
    // }
    // if (e.target.id === 'yellow') {
    //   body.style.background = e.target.id;
    // }
    // if (e.target.id === 'red') {
    //   body.style.background = e.target.id;
    // }
  });
});
