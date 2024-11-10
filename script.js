'use strict'
// 1
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery .image');
    let currentIndex = 0;

    images[currentIndex].classList.add('active');

    function updateImage() {
        images.forEach((img, index) => {
            img.classList.toggle('active', index === currentIndex)
        })
    }

    document.addEventListener('keydown', (event) => {
        if(event.key === 'ArrowRight'){
            currentIndex = (currentIndex + 1) % images.length;
            console.log(currentIndex);
            updateImage();
        } else if(event.key === 'ArrowLeft'){
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateImage();
        }
    })
})

// 2
const createBtn = document.querySelector('[data-action="render"]');
const deleteBtn = document.querySelector('[data-action="destroy"]');
const boxes = document.getElementById('boxes');

const createBoxes = (amount) => {
    const baseSize = 30;
    const sizeDif = 10;
    for(let i = 0; i < amount.length; i ++){
        let item = document.createElement('div');
        const currentSize = baseSize + i * sizeDif;
        item.style.width = `${currentSize}px`;
        item.style.height = `${currentSize}px`;
        item.style.margin = `10px`;
        const randomColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
        item.style.backgroundColor = randomColor;
        boxes.append(item);
    };
};

function destroyBoxes() {
    boxes.innerHTML = "";
};

createBtn.addEventListener('click', () => {
    const amount = document.querySelector('[type="number"]').value;
    createBoxes(amount);
});

deleteBtn.addEventListener('click', destroyBoxes);