// Q 1a
const button1 = document.querySelector('button');

// Q 1b

button1.onclick = function(){
    alert(`"You clicked the first button! Congrats!" `)
};

// Q 2a
const h3 = document.querySelector(`h3`);

// Q 2b

h3.addEventListener('mouseout', () =>{
    alert(`"You hovered over the h3 element! Congrats!"`)
});


// });

// Q 3a
const form = document.querySelector(`form`);

// Q 3b

form.addEventListener(`submit`, () => {
    const user = form.elements.entry.value;
    alert(`${user}`);
});


// BONUS

// Q 4a

const darkMode = document.getElementById(`dm`);
const body = document.querySelector(`body`);

// Q 4b

darkMode.addEventListener('click',() => {
    body.classList.toggle(`dark-mode`);
});

// Q 5a

const times = document.getElementById('times');
let click = 0;

// Q 5b

times.onclick = () =>{
    click++;
        if(click <= 2){
            alert("You clicked the last button! Congrats!");

        } else if (click === 3){
            alert("OH NO! This button is NOT going to work anymore");

        } else{
            times.disabled = true;

        }

};