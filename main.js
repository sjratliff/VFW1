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
    var clearLink = $("clear");
	var displayLink = $("displayLink");
	
	
    //create select field and populate with options
    function pickTeam(){
        var formTag = document.getElementsByTagName("form"),//formTag Is Array of all the tags.
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
               $('startPage').style.display = "none";
               $('clear').style.display = "inline";
               $('displayLink').style.display = "none";
               $('addNew').style.display = "inline";
                break;
            case "off":
               $('startPage').style.display = "block";
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
            item.tname      =["Team Name:", $('tname').value];
            item.sex        =["Sex:", sexValue];
            item.date       =["startdate", $('startdate').value];
            item.pword      =["Password:", $('pword').value];
            item.cpword     =["Confirm Password:", $('cpword').value];
            item.email       =["Email:", $('email').value];
            item.rating     =["rating", $('rating').value];
            item.comments   =["comments" , $('comments').value];
        //save data into local storage: Use Stringify to convery our object to a string.
        localStorage.setItem(id, JSON.stringify(item));
        alert("Information Saved!");
        
     }
     
     function getData(){
		toggleControls("on");
		if(localStorage.length === 0){
		alert("There is no data in Local Storage.");
		}
		
		//Write Data from Local Storage to the browser.
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display = "block";
		for(var i=0, len=localStorage.length; i<len; i++){
			var makeli = document.createElement('li');
			var linksLi = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			//convert the string from local storage value back to an object by using JSON.parse().
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubList);
			for(var n in obj){
				var makeSubLi = document.createElement('li');
				makeSubList.appendChild(makeSubLi);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubLi.innerHTML = optSubText;
				makeSubList.appendChild(linksLi);
		 }
		 makeItemLinks(localStorage.key(i), linksLi); //Create our edit and delete buttons/link for each item in local storage.
	}
}
	//Make Item Links
	//Create the edit and delete links for each stored item when displayed
	function makeItemLinks(key, linksLi){
	//add edit single item link
	var editLink = document.createElement('a');
	editLink.href = '#';
	editLink.key = key;
	var editText = "Edit Info";
	//editLink.addEventListener("click", editItem);
	editLink.innerHTML = editText;
	linksLi.appendChild(editLink);
	
	//add line break
	var breakTag = document.createElement('br');
	linksLi.appendChild(breakTag);
	
	
	
	//add delete single item link
	var deleteLink = document.createElement('a');
	deleteLink.href = "#";
	deleteLink.key = key;
	var deleteText = "Delete Info";
	//deleteLink.addEventListener("click", deleteItem);
	deleteLink.innerHTML = deleteText;
	linksLi.appendChild(deleteLink);
	
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
    clearLink.addEventListener("click", clearLocal);
	displayLink.addEventListener("click", getData);
    
});