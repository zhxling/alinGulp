module.exports = function() {
    
    let smallImg = document.createElement('img');
    smallImg.src = require('../images/flower.jpg');

    document.body.appendChild(smallImg);

    let bigImg = document.createElement('img');
    bigImg.src = require('../images/sky.jpg');
    bigImg.className = 'test';

    document.body.appendChild(bigImg);

    require("../style/addImages.css")
}