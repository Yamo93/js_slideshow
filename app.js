let boxWidth = document.querySelector('.box').offsetWidth;
let count = 1;
let itemsLength = document.querySelectorAll('.box').length;
console.log(itemsLength);
let showUI = document.querySelector('.show');

document.querySelector('.right-arr').addEventListener('click', function() {
    if (count < itemsLength) {
        showUI.style.left = '-' + count * boxWidth + 'px';
        count++;
    } else {
        count -= itemsLength;
        showUI.style.left = '-' + count * boxWidth + 'px';
        count++;
    }

    if (count === 2) {
        document.querySelector('.right-arr').style.color = 'white';
        document.querySelector('.left-arr').style.color = 'white';
    } else {
        document.querySelector('.right-arr').style.color = 'black';
        document.querySelector('.left-arr').style.color = 'black';
    }
});


document.querySelector('.left-arr').addEventListener('click', function() {
    if (count === 1) {
        count = itemsLength - 1;
        showUI.style.left = '-' + count * boxWidth + 'px'; // count is 2
        //count--; // it becomes 1
    } else if (count === 2) {
        count--; // count is 1
        showUI.style.left = '-' + count * boxWidth + 'px';
        count--;
    } else if (count === 0) {
        showUI.style.left = '-' + count * boxWidth + 'px';
        count++;
    }

    if (count === 1 || count === 2) {
        document.querySelector('.right-arr').style.color = 'black';
        document.querySelector('.left-arr').style.color = 'black';
    } else if (count === 0) {
        document.querySelector('.right-arr').style.color = 'white';
        document.querySelector('.left-arr').style.color = 'white';
    }
});