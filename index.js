let liveScoreLink= document.getElementById('ls');
let liveScore = document.getElementById('liveScore');
let networkLink = document.getElementById('ntw');
let network = document.getElementById('network');
let addOnsLink = document.getElementById('adn');
let addOns = document.getElementById('addOns');
let goLiveLink = document.getElementById('gl');
let addOnsSubDiv = document.getElementById('addOnsSubdiv');
let moreLink = document.getElementById('mr');                     
let more = document.getElementById('more');

//cards
let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');
let card4 = document.getElementById('card4');
let card5 = document.getElementById('card5');
let card6 = document.getElementById('card6');
let card7 = document.getElementById('card7');
let card8 = document.getElementById('card8');
let card9 = document.getElementById('card9');
let card10 = document.getElementById('card10');

//end of cards

//images
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let img5 = document.getElementById('img5');
let img6 = document.getElementById('img6');
let img8 = document.getElementById('img8');
let img9 = document.getElementById('img9');
let img10 = document.getElementById('img10');
//end of images

liveScoreLink.addEventListener('mouseover', function(){
    liveScore.style.display = 'block';
})

liveScore.addEventListener('mouseleave', function(){
    liveScore.style.display = 'none';
}) 

networkLink.addEventListener('mouseover', function(){
    network.style.display = 'block';
})

network.addEventListener('mouseleave', function(){
    network.style.display = 'none';
})

addOnsLink.addEventListener('mouseover', function(){
    addOns.style.display = 'block';
})

addOns.addEventListener('mouseleave', function(){
    addOns.style.display = 'none';
    addOnsSubDiv.style.display = 'none';
})

goLiveLink.addEventListener('mouseover', function(){
    addOnsSubDiv.style.display = 'block';
})

goLiveLink.addEventListener('mouseout', function(){
    addOnsSubDiv.style.display = 'none';
})

addOnsSubDiv.addEventListener('mouseleave', function(){
    addOnsSubDiv.style.display = 'none';
})

moreLink.addEventListener('mouseover', function(){
    more.style.display = 'block';
})

more.addEventListener('mouseleave', function(){
    more.style.display = 'none';
})

card1.addEventListener('mouseover', function(){
    img1.style.display = 'block';
})
card1.addEventListener('mouseleave', function(){
    img1.style.display = 'none';
})
card2.addEventListener('mouseover',function(){
    img2.style.display = 'block';
})
card2.addEventListener('mouseleave',function () {
    img2.style.display ='none';
})
card3.addEventListener('mouseover',function(){
    img3.style.display = 'block';
})
card3.addEventListener('mouseleave',function () {
    img3.style.display ='none';
})
card4.addEventListener('mouseover',function(){
    img4.style.display = 'block';
})
card4.addEventListener('mouseleave',function () {
    img4.style.display ='none';
})
card5.addEventListener('mouseover',function(){
    img5.style.display = 'block';
})
card5.addEventListener('mouseleave',function () {
    img5.style.display ='none';
})
card6.addEventListener('mouseover',function(){
    img6.style.display = 'block';
})
card6.addEventListener('mouseleave',function () {
    img6.style.display ='none';
})
card7.addEventListener('mouseover',function(){
    img7.style.display = 'block';
})
card7.addEventListener('mouseleave',function () {
    img7.style.display ='none';
})
card8.addEventListener('mouseover',function(){
    img8.style.display = 'block';
})
card8.addEventListener('mouseleave',function () {
    img8.style.display ='none';
})
card9.addEventListener('mouseover',function(){
    img9.style.display = 'block';
})
card9.addEventListener('mouseleave',function () {
    img9.style.display ='none';
})
card10.addEventListener('mouseover',function(){
    img10.style.display = 'block';
})
card10.addEventListener('mouseleave',function () {
    img10.style.display ='none';
})