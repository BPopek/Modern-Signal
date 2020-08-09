
function showHideRegs() {
    let element = document.getElementById('ask-regs-all');
    let iconElements = document.getElementById('ask-regs-header');
    let accordian = document.getElementById('ask-regs-accordion');


    if(element.className == 'regs hide-all-regs') {
        element.classList.remove('hide-all-regs');
        element.classList.add('toggle-show-all-regs'); 
        accordian.classList.remove('accordian-hide');
        accordian.classList.add('accordian-show'); 
        iconElements.classList.toggle('expanded-header'); 
        iconElements.classList.toggle('collapsed-header'); 
    }
    else if(element.className == 'regs toggle-show-all-regs') {
        element.classList.remove('toggle-show-all-regs');
        element.classList.add('toggle-hide-all-regs');  
        accordian.classList.add('accordian-hide');
        accordian.classList.remove('accordian-show');  
        iconElements.classList.toggle('expanded-header'); 
        iconElements.classList.toggle('collapsed-header'); 
    }
    else if(element.className == 'regs toggle-hide-all-regs') {
        element.classList.remove('toggle-hide-all-regs');   
        element.classList.add('toggle-show-all-regs');   
        accordian.classList.remove('accordian-hide');
        accordian.classList.add('accordian-show'); 
        iconElements.classList.toggle('expanded-header'); 
        iconElements.classList.toggle('collapsed-header'); 
    }
}

$(document).ready(function() {
    let childWidth = $('.category-tag').height()
    $('.tag-right').width(childWidth);

    let childHeight = $('.category-tag').height()
    $('.tag-right').height(childHeight);
})