let element = document.getElementById('ask-regs-all');
let iconElements = document.getElementById('ask-regs-header');
let accordian = document.getElementById('ask-regs-accordion');

if (sessionStorage.getItem('show_banner') === '1'){
    element.classList.add('hide-all-regs');

}
if (sessionStorage.getItem('show_banner') === null){
    sessionStorage.setItem('show_banner', '1');
    element.classList.add('toggle-show-all-regs');
    iconElements.classList.add('expanded-header'); 
    iconElements.classList.remove('collapsed-header'); 
    accordian.classList.add('accordian-show');
}

function showHideRegs() {
    if(element.className == 'regs') {
        element.classList.add('toggle-hide-all-regs');
        element.classList.remove('toggle-show-all-regs'); 
        iconElements.classList.add('expanded-header'); 
        iconElements.classList.remove('collapsed-header'); 
        accordian.classList.add('accordian-hide');
        accordian.classList.remove('accordian-show'); 
    }
    else if(element.className == 'regs hide-all-regs') {
        element.classList.add('toggle-show-all-regs');
        element.classList.remove('hide-all-regs');  
        iconElements.classList.remove('expanded-header'); 
        iconElements.classList.add('collapsed-header'); 
        accordian.classList.remove('accordian-hide');
        accordian.classList.add('accordian-show'); 
    }
    else if(element.className == 'regs toggle-hide-all-regs') {
        element.classList.add('toggle-show-all-regs');
        element.classList.remove('toggle-hide-all-regs');  
        iconElements.classList.add('expanded-header'); 
        iconElements.classList.remove('collapsed-header'); 
        accordian.classList.remove('accordian-hide');
        accordian.classList.add('accordian-show'); 
    }
    else if(element.className == 'regs toggle-show-all-regs') {
        element.classList.add('toggle-hide-all-regs');   
        element.classList.remove('toggle-show-all-regs');   
        accordian.classList.add('accordian-hide');
        accordian.classList.remove('accordian-show'); 
        iconElements.classList.remove('expanded-header'); 
        iconElements.classList.add('collapsed-header'); 
    }
}
