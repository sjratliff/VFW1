// Activity 2
// Visual Frameworks (VFW)
// Mobile Development
// Full Sail University

//Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function(){
    
    //getElementById Function
    function $(x){
        var theElement = document.getElementById(x);
        return theElement;
    }
    
    var contactGroups = ["--Choose A Team--", "Bears", "Packers"];
    var sexValue,
        favoriteValue = "No"
    ;
    var save = $('submit');
    
    //create select field and populate with options
    function pickTeam(){
        var formTag = document.getElementByTagName("form"),//formTag Is Array of all the tags.
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
        for(var i=0; i<radio.length; i++){
            if(radio[i].checked){
            sexValue = radio[i].value;
            }
        }
    }
    
 
    function toggleControls(n){
        switch(n){
            case "on":
               $('contactForm').style.display = "none";
               $('clear').style.display = "inline";
               $('displayLink').style.display = "none";
               $('addNew').style.display = "inline";
                break;
            case "off":
               $('contactForm').style.display = "block";
               $('clear').style.display = "inline";
               $('displayLink').style.display = "inline";
               $('addNew').style.display = "none";
               $('items').style.display = "none";
               
               
                break;
            default:
                return false;
        }
            
        }
    
        function storeData(){
        var id              = Math.floor(Math.random()*100000001);
        //gather up all form field valus and store in object.
        //Object properties contain array with the form label and input value.
        getSelectedRadio();
        var item            ={};
            item.group      =["Group:", $('groups').value];
            alert("1");
            item.tname      =["Team Name:", $('tname').value];
             alert("2");
            item.sex        =["Sex:", sexValue];
             alert("6");
            item.date       =["startdate", $('startdate').value];
             alert("8");
            item.pword      =["Password:", $('pword').value];
             alert("3");
            item.cpword     =["Confirm Password:", $('cpword').value];
             alert("4");
            item.email       =["Email:", $('email').value];
             alert("5");
            item.rating     =["rating", $('rating').value];
             alert("7");
            item.comments   =["comments" , $('comments').value];
             alert("9");
        //save data into local storage: Use Stringify to convery our object to a string.
        localStorage.setItem(id, JSON.stringify(item));
        alert("Information Saved!");
        
     }
    
    function getData(){
        toggleControls("on");
        if(localStorage.length === 0){
            alert("There is no data in Local Storage.");
        }
        //Write data from local storage to browser.
        var makeDiv = document.createElement('div');
        makeDiv.setAttribute("id", "items");
        var makeList = document.createElement('ul');
        makeDiv.appendChild(makeList);
        document.body.appendChild(makeDiv);
        $('items').style.display = "block";
        for(var i=0, len=localStorage.length; i<len;i++){
            var makeli = document.createElement('li');
            makeList.appendChild(makeli);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            //Convert String from local storage value back to an object by using JSON.parsel()
            var obj = JSON.parse(value);
            var makeSubList = document.createElement('ul');
            makeli.appendChild(makeSubList);
            for(var n in obj){
                var makesubli = document.createElement('li');
                makeSubList.appendChild(makesubli);
                var optSubText = obj[n][0]+""+obj[n][1];
                makesubli.innerHTML = optSubText;
            }
        }
    }
    
    function clearLocal(){
        if(localStorage.length === 0 ){
            alert("There is no data to clear.");
        }else{
            localStorage.clear();
            alert("All Info Has Been Cleared");
            window.location.reload();
            return false;
        }
    }
    
    //Variable defaults
  
    pickTeam();
    
    
    
    //Set Link & Submit Events

    
    save.addEventListener("click", storeData);
    
});