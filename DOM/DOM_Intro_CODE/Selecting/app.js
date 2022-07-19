// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }


// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

// const links = document.querySelectorAll('p a');

// for (let link of links) {
//     console.log(link.href)
// }

document.getElementsByTagName('img');

document.getElementsByClassName('square');

const squareImages = document.getElementsByClassName('square');

for (let images of squareImages) {
    img.src =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg';
}

// queryselector gives us the first match 
// selects the second one
document.querySelector('p:nth-of-type(2)');

// how to select an attribute with the square brackets []

document.querySelector('a[title="Java"]'); 


document.querySelectorAll()



const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
}
