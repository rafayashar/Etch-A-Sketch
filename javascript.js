const container = document.querySelector('#container');
let grid;
let gridVer;
let gridHorizon;

const button = document.createElement('button');
button.style.cssText = 'border-style: solid; border-width: 1px';
button.textContent = 'Reset Grid';

container.appendChild(button);


for (let i = 0; i < 16; i++) {
    gridVer = document.createElement('div');
    gridVer.classList.add('gridVer');
    gridVer.style.cssText = 'border-style: solid; border-width: 1px 2px';
    container.appendChild(gridVer)

    for (let j = 0; j < 16; j++) {
        gridHorizon = document.createElement('div');
        gridHorizon.classList.add('gridHorizon');
        gridHorizon.style.cssText = 'border-style: solid; border-width: 2px';
        gridVer.appendChild(gridHorizon);
    }
    gridVer = document.querySelectorAll('.gridVer');
    grid = document.querySelectorAll('.gridHorizon');
}

button.addEventListener('click', () => {
    grid.forEach(box => box.remove());
    gridVer.forEach(box => box.remove());
    const gridSize = prompt('Enter grid size');


    for (let i = 0; i < gridSize; i++) {
        gridVer = document.createElement('div');
        gridVer.classList.add('gridVer');
        gridVer.style.cssText = 'border-style: solid; border-width: 1px 2px';
        container.appendChild(gridVer)
    
        for (let j = 0; j < gridSize; j++) {
            gridHorizon = document.createElement('div');
            gridHorizon.classList.add('gridHorizon');
            gridHorizon.style.cssText = 'border-style: solid; border-width: 2px';
            gridVer.appendChild(gridHorizon);
        }
        gridVer = document.querySelectorAll('.gridVer');
        grid = document.querySelectorAll('.gridHorizon');
    }

    grid.forEach(box => {box.addEventListener('mouseover', () => {
        let h = (Math.floor(Math.random() * 360));
        let s = (Math.floor(Math.random() * 100));
        box.style.backgroundColor = `hsl(${h}, ${s}%, 50%)`;
    });});
    
});

grid.forEach(box => {box.addEventListener('mouseover', () => {
    let h = (Math.floor(Math.random() * 360));
    let s = (Math.floor(Math.random() * 100));
    box.style.backgroundColor = `hsl(${h}, ${s}%, 50%)`;
});});


