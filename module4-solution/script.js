(function (){
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for (var counter = 0; counter < names.length; counter++) {
		var firstLetter = names[counter].charAt(0).toLowerCase();
		if (firstLetter === "j") {
			byeSpeaker.speak(names[counter]);
		} 
		else {
			helloSpeaker.speak(names[counter]);
		}
	}
})();

