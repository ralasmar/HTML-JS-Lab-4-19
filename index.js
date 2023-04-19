console.log('hello world')
//HTML
let message = document.querySelector('#message')  //variable for selecting message id



//FUNCTIONS


//adding a movie----------------------
let addMovie = (event) => {
    event.preventDefault()   //default is interfering with our code because button is inside form el
    let inputField = document.querySelector('input')
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value;            //needs the .value to take inputed title
    movieTitle.addEventListener('click', crossOffMovie);
    movie.appendChild(movieTitle);
    
    //creating delete button
    let deleteBtn = document.createElement('button');        
    deleteBtn.textContent = 'X';
    movie.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', deleteMovie)       //first value is action, second is the function called
    
    let list = document.querySelector('ul');
    list.appendChild(movie);
};


//deleting a movie-------------------------
let deleteMovie = (event) => {
    event.target.parentNode.remove()          //JS knows what the target of this event is (the specific delete button) and will only get rid of that one button's parent (movie list item)
    message.textContent = event.target.parentNode.firstChild.textContent + ' has been deleted!'   //adds message following delete action, movie title is a sibling el of the X button
    revealMessage()
};


//crossing off movie-------------------------
let crossOffMovie = (event) => {
    event.target.classList.toggle('checked')  //doesn't need . because it's already decided as a class 
    if (event.target.classList.contains('checked')){
        message.textContent = event.target.textContent + ' has been watched!'  //message if movie was watched
    } else {
        message.textContent = event.target.textContent + ' marked as unwatched!'  //message if movie was unchecked
    }
    revealMessage()
}


//removing message after time------------------
function revealMessage() {                               
    message.classList.remove('hide')            //removes hide class again so that the cb can keep working repeatedly
    setTimeout(() => {                          //callback to hide the message after a set amount of time (1000ms)
        message.classList.add('hide')}, 1000)   //adding hide class to message after 1 sec which makes the message disappear
}


//CONNECT HTML AND CALLBACK
document.querySelector('form').addEventListener('submit', addMovie)

