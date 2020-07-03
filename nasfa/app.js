
function showHideRegs() {
    let element = document.getElementById('ask-regs-all');
    let iconElements = document.getElementById('ask-regs-header');

    if(element.className == 'regs hide-all-regs') {
        element.classList.remove('hide-all-regs');
        element.classList.add('toggle-show-all-regs'); 
        iconElements.classList.toggle('expanded-header'); 
        iconElements.classList.toggle('collapsed-header'); 
    }
    else if(element.className == 'regs toggle-show-all-regs') {
        element.classList.remove('toggle-show-all-regs');
        element.classList.add('toggle-hide-all-regs');   
        iconElements.classList.toggle('expanded-header'); 
        iconElements.classList.toggle('collapsed-header'); 
    }
    else if(element.className == 'regs toggle-hide-all-regs') {
        element.classList.remove('toggle-hide-all-regs');   
        element.classList.add('toggle-show-all-regs');   
        iconElements.classList.toggle('expanded-header'); 
        iconElements.classList.toggle('collapsed-header'); 
    }
}
