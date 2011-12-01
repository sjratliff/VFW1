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
    
    //create select field and populate with options
    function pickTeam(){
        var formTag = document.getElementByTagName("form");//formTag Is Array of all the tags.
            selectLi = $('select'),
            makeSelect = document.createElement('select');
            makeSelect.setAttribute("id", "groups");
        for(var i=0,j=contactGroups.length; i<j; i++){
            var makeOption = document.createElement('option');
            var optText = contactGroups[i];
            makeOption.setAttribute("value", optText);
            makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
        }
        selectLi.appendChild(makeSelect);
    }
    
    
    
    //Variable defaults
    var contactGroups = ["--Choose A Group--", "Friends", "Work"];
    pickTeam();
    
    
    //Set Link & Submit Events
    var displayLink = $('displayLink');
    displayLink.addEventListener("click", getData);
    var clearLink = $('clear');
    clerLink.addEventListener("click", clearLocal);
    var save = $('submit');
    save.addEventListener("click", storeData);
    
});