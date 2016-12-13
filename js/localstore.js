(function(){

  let myName = document.getElementById("my-name"); 
  let myCourse = document.getElementById("my-course");
  let getName = document.getElementById("get-name");
  let userName = document.getElementById("user-name"); 
  let courseName = document.getElementById("course-name");
  let clearName = document.getElementById("clear-name");
  let nameStored = localStorage.name;
  let courseStored = localStorage.course;
  console.log(`Name on page load: ${nameStored}`);
  
  if(nameStored) {
    // If there's a name in localStorage, use it:
    myName.innerHTML = `again ${nameStored}`;
    console.log(`Name stored is: ${nameStored}`);
  }
  else {
    // There's no name in localStorage:
    myName.innerHTML = "stranger";
    console.log(`No name stored`);
  }
  
  if(courseStored) {
	// if course then use it
	myCourse.innerHTML = `${courseStored}`;
	console.log(`Course stored is {nameStored}`);
  }
  else {
	myCourse.innerHTML = "No Course";
    console.log(`No course stored`);
  }

  function PerformGreeting() {
    if(userName.value === "") {
      alert("Please enter a name");
      userName.focus();
    } else if(courseName.value === "") {
	  alert("Please enter a course");
	  courseName.focus();
	}
    // Get values the user entered:
    nameStored = userName.value;
	courseStored = courseName.value;
    // Show the name in "my-name":
    myName.innerHTML = nameStored;
	myCourse.innerHTML = courseStored;
    // Put the name into localStorage:
    localStorage.name = nameStored;
	localStorage.course = courseStored;
    console.log(`New name stored: ${nameStored}`);
	console.log(`New course stored: $(courseStored}`);
    return false;
  }
  
  function ClearNameStorage() {
	console.log('Clearing local storage');
	localStorage.clear();
  }
  
  clearName.addEventListener("click", ClearNameStorage);

  // Listens for a form submit action: 
  if (typeof event === "undefined") {
    getName.onsubmit = PerformGreeting; // for Firefox
  }
  else {
    getName.addEventListener("submit", PerformGreeting);	
    event.preventDefault();
  }

}());
