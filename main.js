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
        errMsg = $('errors');
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
            item.date       =["Startdate", $('startdate').value];
            item.pword      =["Password:", $('pword').value];
            item.cpword     =["Confirm Password:", $('cpword').value];
            item.email       =["Email:", $('email').value];
            item.rating     =["Rating", $('rating').value];
            item.comments   =["Comments" , $('comments').value];
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
	editLink.addEventListener("click", editItem);
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
	
	function editItem(){
	//Grab the data from our item from local Storage
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
		
		//Show the form
		toggleControls("off");
		
		//populate the form fields with the current localStorage values
		$('groups')   .value = item.group[1];
		$('tname')    .value = item.tname[1];
		var radios = document.forms[0].sex;
		for(var i=0; i<radios.length;i++){
			if(radios[i].value == "Male" && item.sex[1] == "Male"){
				radios[i].setAttribute("checked", "checked");
		   }else if (radios[i].value == "Female" && item.sex[1] == "Female"){
		   	radios[i].setAttribute("checked" , "checked");
		   	}
		   }
		$('startdate').value = item.date[1];
		$('pword')    .value = item.pword[1];
		$('cpword')   .value = item.cpword[1];
		$('email')    .value = item.email[1];
		$('rating')   .value = item.rating[1];
		$('comments') .value = item.comments[1];
		
		
		//Remove the initial listener from the  input "save contact" button
		save.removeEventListener("click", storeData);
		//Change Submit Button Value to Edit Button
		$('submit').value = "Edit Contact";
		var editSubmit = $('submit');
		//Save the key value established in this function as a property of the editSubmit event
		//soo we can use that value when we save the data we edited.
		editSubmit.addEventListener("click" , validate);
		editSubmit.key = this.key;
		
		
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
    
    function validate(e){
    	//define element we want to check
    	var getGroup = $('groups');
    	var gettname = $('tname');
    	var getpword = $('pword');
    	var getcpword = $('cpword');
    	var getEmail = $('email');
    	var getComments = $('comments');
    	
    	
    	//Get Error Messages
    	var messageAry = [];
    	//group validation
    	if (getGroup.value=="--Choose A Team--"){
    		var groupError = "Please choose a group.";
    		getGroup.style.border = "1px solid red";
    		messageAry.push(groupError);
    	}
    	
    	//Team Name Validation
    	if (gettname.value==""){
    		var tnameError = "Please Enter Team Name.";
    		getTname.style.border = "1px solid red";
    		messageAry.push(tnameError);
    		
    	}
    	
    	//Password Validation
    	if (getPword.value==""){
    		var pwordError = "Please Enter Password.";
    		getPword.style.border = "1px solid red";
    		messageAry.push(pwordError);
    	}
    	
    	//Password Confirm Validation
    	if (getCpword.value==""){
    		var cpwordError = "Please Re-Enter Password.";
    		getCpword.style.border = "1px solid red";
    		messageAry.push(cpwordError);
    	}
    	
    	//Email Validation
    	var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    	if(!(re.exec(getEmail.value))){
    	var emailError = "Please Enter Valid Email Address.";
    	getEmail.style.border = "1px solid red";
    	messageAry.push(emailError);
    	
    	}
    	//if there were error, display on screen
    	if(messageAry.length >= 1){
    		for(var i=0, j=messageAry.length; i < j; i++){
    			var txt = document.createElement('li');
    			txt.innerHTML = messageAry[i];
    			errMsg.appendChild(txt)
    			
    		}
    			
    	}
    	e.preventDefault();
    	return false;
    	
    }		
    		
    //Variable defaults
  ;
    pickTeam();
    
    
    
    //Set Link & Submit Events

    
    var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
    var clearLink = $('clear');
    clearLink.addEventListener("click", clearLocal);
    var save = $('submit');
	save.addEventListener("click", validate);
    
});