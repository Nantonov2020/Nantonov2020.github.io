'use strict';

const chekers = document.querySelectorAll('.checkbox');
for (let elem of chekers){
    elem.addEventListener('click',activateClickOnCheckbox);
}

activateClickOnCheckbox();

function activateClickOnCheckbox(){
    for (let elem of chekers){
        let area = elem.dataset.name;
        let setLink = document.querySelectorAll(`.${area}`);
        if ((area == 'all')&&(elem.checked)){
            setLink = document.querySelectorAll('.link');
        }
        for (let link of setLink){
              if (elem.checked) {
                link.style.display = 'block';
            } else{
                link.style.display = 'none';
            }
        }
        if ((area == 'all')&&(elem.checked)){
            break;
        }
    }
}