// target javascript

var navMenuAnchorTag = document.querySelectorAll('.nav-menu a');
var interval;

for(var i = 0;i<navMenuAnchorTag.length;i++){
    navMenuAnchorTag[i].addEventListener('click',function(event){

        event.preventDefault();

        var targetSection = this.textContent.trim().toLowerCase();
        var targetSectionId = document.getElementById(targetSection);
        
       // interval = setInterval(scrollVertically,20,targetSectionId);
        interval = setInterval(function(){
            scrollVertically(targetSectionId)},20);
        
     });
}

function scrollVertically(targetSectionId){
    var coordinate = targetSectionId.getBoundingClientRect();
            if(coordinate.top<=0){
                clearInterval(interval);
                return;
            }
     window.scrollBy(0,50);
};

// skillbar javascript

var skillSection = document.getElementById("skill-container");
var progress = document.querySelectorAll(".skill-progress > div");
var spanChange = document.getElementsByClassName("span-change");



window.addEventListener('scroll',checkScroll);

var animationDone = false;

function initializeBar(){
    for(let bar=0;bar<progress.length;bar++){
        progress[bar].style.width = 0 + '%';
        spanChange[bar].style.color= "gray";
    }

}

initializeBar();

function fillBar(){
     for(let bar=0;bar<progress.length;bar++){
        let targetWidth = progress[bar].getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval = setInterval(function(){
            if(currentWidth>targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            progress[bar].style.width = currentWidth + '%';
             spanChange[bar].style.color= "white";
        },15);
        
    }
}



function checkScroll(){
    var coordinate_skill = skillSection.getBoundingClientRect();
    if(!animationDone && coordinate_skill.top<=window.innerHeight){
        animationDone = true;
        console.log("skill section reached");
        fillBar();
    }
    else if(coordinate_skill.top>window.innerHeight){
        animationDone = false;
        initializeBar();
    }
}