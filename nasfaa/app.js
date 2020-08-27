let element = document.getElementById('ask-regs-all');
let iconElements = document.getElementById('ask-regs-header');
let accordian = document.getElementById('ask-regs-accordion');

//accordion already shown once, set to hide on loading of new pages
if (sessionStorage.getItem('show_banner') === '1'){
    element.classList.add('hide-all-regs');
    iconElements.classList.add('collapsed-header'); 
    iconElements.classList.remove('expanded-header');
    accordian.classList.remove('accordian-show');
    accordian.classList.add('accordian-hide'); 

}
//accordion not yet shown, show accordian and set to shown
if (sessionStorage.getItem('show_banner') === null){
    sessionStorage.setItem('show_banner', '1');
    element.classList.add('toggle-show-all-regs');
    element.classList.remove('hide-all-regs');  
    iconElements.classList.add('expanded-header'); 
    iconElements.classList.remove('collapsed-header'); 
    accordian.classList.add('accordian-show');
    accordian.classList.remove('accordian-hide');
}

function showHideRegs() {
    //first time page loads, just has classname of regs
    // if(element.className == 'regs') {
    //     element.classList.add('toggle-hide-all-regs');
    //     element.classList.remove('toggle-show-all-regs'); 
    //     iconElements.classList.add('expanded-header'); 
    //     iconElements.classList.remove('collapsed-header'); 
    //     accordian.classList.add('accordian-hide');
    //     accordian.classList.remove('accordian-show'); 
    // }
     if(element.className == 'regs hide-all-regs') {
        element.classList.add('toggle-show-all-regs');
        element.classList.remove('hide-all-regs');  
        iconElements.classList.remove('collapsed-header'); 
        iconElements.classList.add('expanded-header'); 
        accordian.classList.remove('accordian-show');
        accordian.classList.add('accordian-hide'); 
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
//to add more files
$(document).ready(function() {      
    $("button[name='addAnother']").click(function() {
        var domElement = $('<div class="question-container2"><div class="custom-file"><input type="file" class="custom-file-input" id="customFile"><label class="custom-file-label" for="customFile">Choose file</label></div></div>');
        $(this).before(domElement);
    });  
});

//to make table sortable by column
// $(document).ready(function () {
//     $('#my-questions-table').DataTable();
//     $('.dataTables_length').addClass('bs-select');
//     });