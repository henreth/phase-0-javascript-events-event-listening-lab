// function addingEventListener() {
//     const input = document.getElementById('input');

//     function clickAlert() {
//     alert('I was clicked!');
//     }

//     input.addEventListener('click', clickAlert);

// }


const addingEventListener = () => {
    const input = document.getElementById('input');
    input.addEventListener('click', 
        () => alert('I was clicked!')
        )
    }