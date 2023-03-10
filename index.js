

// var audio =  {};
// for (let i = 0; i < 7; i++) {
//     audio.push(`audio${i}`);
// }
// console.log(audio1)

// audio1.play();
// for( item in document.querySelectorAll('.drum') ){
//     document.querySelectorAll('.drum')[item].addEventListener('click',audio1.play());
// }

function makeSound(key) {
    // var buttonInnerHTML =  this.innerHTML;

    switch (key) {
        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'l':
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;

        default:
            console.log('Wrong keyword');
            break;
    }
}


//  Button Press


for(let i= 0;i<document.querySelectorAll('.drum').length;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        var buttonInnerHTML =  this.innerHTML;
        makeSound(buttonInnerHTML);
        buttionAnimation(buttonInnerHTML);

        
    });
}
//   Keyboard press
document.addEventListener('keydown',function(event){
    makeSound(event.key);
    buttionAnimation(event.key);
});

// function HouseKeeper (name,age,hasworkingPermit,languages,experience){
//     this.name = name;
//     this.age = age;
//     this.hasworkingPermit = hasworkingPermit;
//     this.languages = languages;
//     this.experience = experience;
//     this.cleaning = function(){
//         alert('Work in progress !!');
//     }
//     this.cleaning();
// }

// let housekeeper1 = new HouseKeeper('Marie',21,'No',['English','Chinese','French','Russian'],5);
// console.log(housekeeper1.cleaning)


function buttionAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add('pressed')
    
    setTimeout(function(){
        activeButton.classList.remove('pressed')
    },200)

}

