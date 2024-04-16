

function redirectt(page){
    console.log('hola')
    location.href = page
}

window.onload = function() {
  Particles.init
({
    selector: '.background',
    color : '#FFD369'
    
  });
};



anime({

    targets: '.logo',
    duration: 900,
    translateX: ['0%', '150%'],
    translateY: [1000, 0],
    delay: 100
    

})
anime({

    targets: 'h1,h3,.main-text,.main-div,.varita,p',
    translateX: [2000, 0],
    translateY: [1000, 0],
    duration: 900,
    delay: 100

})
anime({

    targets: 'h2',
    duration: 900,
    translateY: [1000, 0],
    translateX: [1000, 0],
    delay: 100

})
anime({
    targets: '.intro-div, .left, .p-div',
    duration: 900,
    translateY: [1000, 0],
    translateX: [-1000, 0],
    delay: 100
})



