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
    //find value of selcted radio button.
    function getSelectedRadio(){
        var radio = document.forms[0].sex;
        for(var i=0; i<radios.length; i++){
            if(radios[i].checked){
            sexValue = radios[i].value;
            }
        }
    }
    
    function getCheckboxValue(){
        if($('fav').checked){
            favoriteValue = $('fav').value;
        }else{
            favoriteValue = "No"
        }
    }
    
    function storeData(){
        var id              =Math.floor(Math.random()*100000001);
        //gather up all form field valus and store in object.
        //Object properties contain array with the form label and input value.
        getSelectedRadio();
        getCheckboxValue();
        var item            ={};
            item.group      =["Group:", $('groups').value];
            item.tname      =["Team Name:", $('tname').value];
            item.pword      =["Password:", $('pword').value];
            item.cpword     =["Confirm Password:", $('cpword').value];
            item.emal       =["Email:", $('email').value];
            item.sex        =["Sex:", sexValue];
            item.rating     =["rating", $('rating').value];
            item.date       =["startdate", $('startdate').value];
            item.comments   =["comments" , $('comments').value];
        //save data into local storage: Use Stringify to convery our object to a string.
        localStorage.setItem(id, JSON.stringify(iten));
        alert("Information Saved !");
        
    }
    
    //Variable defaults
    var contactGroups = ["--Choose A Group--", "Friends", "Work"];
        sexValue,
        favoriteValue = "No"
    ;
    pickTeam();
    
    
    
    //Set Link & Submit Events
   /* var displayLink = $('displayLink');
    displayLink.addEventListener("click", getData);
    var clearLink = $('clear');
    clerLink.addEventListener("click", clearLocal);
    var save = $('submit');
    save.addEventListener("click", storeData);*/
    
});