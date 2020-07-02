
function showHideRegs() {
    let element = document.getElementById("ask-regs-all");
    let alertElementX = document.getElementById("toggle-alert-iconX");
    let alertElementCaret = document.getElementById("toggle-alert-iconCaret");

    if(element.className == "regs hide-all-regs") {
        element.classList.remove('hide-all-regs');
        element.classList.add('toggle-show-all-regs');   
        alertElementX.classList.add('showX');   
    }
    else if(element.className == "regs toggle-show-all-regs") {
        element.classList.remove('toggle-show-all-regs');
        element.classList.add('toggle-hide-all-regs');   
        alertElementX.classList.remove('showX:before');   
        alertElementCaret.classList.add('hideCaret:before');   
    }
    else if(element.className == "regs toggle-hide-all-regs") {
        element.classList.remove('toggle-hide-all-regs');   
        element.classList.add('toggle-show-all-regs');   
        alertElementX.classList.remove('hideX:before');   
        alertElementCaret.classList.add('showCaret:before'); 
    }
}


    