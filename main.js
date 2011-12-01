// Activity 2
// Visual Frameworks (VFW)
// Mobile Development
// Full Sail University

//Wait until the DOM is ready.
window.addEventListener("DOMcontentLoaded", function(){
    
    //getElementById Function
    function $(x){
        var theElement = document.getElementById(x);
        return theElement;
    }
    
    
    
    //Variable defaults
    var contactGroups = ["--Choose A Group--", "Friends", "Work"];
    
    
    
    //Set Link & Submit Events
    var displayLink = $('displayLink');
    displayLink.addEventListener("click", getData);
    var clearLink = $('clear');
    clerLink.addEventListener("click", clearLocal);
    var save = $('submit');
    save.addEventListener("click", storeData);
    
});