//////////////////////////////////////////////////////////////////

//

// Fortune Cookie Generator

//

//////////////////////////////////////////

var counter = 0;

var newFort = [];

var fortList = [];

//I will need to remove redundant and null entries from the list eventually so I will establish this now
var removeRedundancies = function(fortunesList){
	//take every entry in the array
	for(var i = 0; i <= fortunesList.length; i++){
		//compare it against every other entry in the array
		for(var j = 0; j <= fortunesList.length; j++){
			//if any two entries are the same, then splice the last one out
			if(j != i && fortunesList[i] === fortunesList[j]){
				fortunesList.splice(j, 1);
			};
		};
	};
};

var generateFortuneCookie = function(fortunesList) {

    // This is where your code for the Fortune Cookie generator goes.

    // You will use the fortunesList variable defined lower in this file

    // to supply your fortune cookies with text.

    // TODO: Grab the paragraph with the ID

    // `fortune-cookie-text` to be able to insert text into that element.
	
	//Here I start by setting a variable equal to fortunesList.length
	fortuneLength = fortunesList.length;
	//Here I start by asking the users how many fortunes they would like to generate.
	var simulFort = prompt("How many fortunes at a time would you like to generate?", "Accepts integers (Redundancy will occur over " + fortuneLength + ")");
	//and here I erase whatever previous fortunes are still in the fortune-cookie-text so that the new ones can avoid cluttering the page.
	document.getElementById('fortune-cookie-text').innerHTML = " ";
	
	//adding to the fortune counter
	counter += parseInt(simulFort);
	
	//if user inputs more than 0:
	if(simulFort > 0){
		//alerts users if they exceed the number of fortunes left and recommends a number to go below, passes out of the function so that stuff does not get borked
		if(simulFort > fortuneLength){
			alert("Try a smaller number next time!  There were only " + fortuneLength + " entries left in the list of fortunes.");
			counter = 0;
			return;
		};
		//From 1 to the user input:
		for(var i = 1; i <= simulFort; i++){
			
			//selecting random fortune based on random index
			var fortuneNum = Math.floor(Math.random() * fortunesList.length);
			var fortuneCurrent = fortunesList[fortuneNum];
			
			//pushing the new fortune to the empty array to use later
			newFort.push(fortuneCurrent);
			
			//console.log("newFort length: " + newFort.length)
			
			//establishing the previous fortune container
			var fortunePrev = document.getElementById('previous-fortunes-container');
			
			//Establishing the background image.  Repeats if enough fortunes are generated.
			document.getElementById("fortune-cookie-text").style.backgroundImage = "url('fortunepaper.png')";
			
			//creating list elements using the current fortunes that will be appended to the previous fortunes element
			var forList = document.createElement('li');
			
			//adding list elements
			forList.innerHTML += fortuneCurrent;
			
			//if the counter hasn't ticked up to the length of the fortune array...
			if(newFort.length % (fortuneLength) != 0){
				
				//add current fortune to the fortune cookie text along with a line break
				document.getElementById('fortune-cookie-text').innerHTML += fortuneCurrent;
				document.getElementById('fortune-cookie-text').innerHTML += "<br>";
				
				//push the list elements to the previous fortune container
				fortunePrev.appendChild(forList);
				
				//get rid of the current fortune from the fortunes list
				fortunesList.splice(fortuneNum, 1);
				
				//add the counter to the page
				document.getElementById('fortune-counter').innerHTML = (counter);
				
			//...but if it has
			}else{
				
				//add the final fortune like normal
				document.getElementById('fortune-cookie-text').innerHTML += fortuneCurrent;
				fortunePrev.appendChild(forList);
				//counter++;
				
				//ask user if they want to keep going
				var yn = prompt("We've run through all the fortunes!  Keep going?", "y/n");
				
				//if they say yes
				if(yn === 'y'){
					
					//return all entries to fortunesList to repopulate the array and start anew
					for(i = 0; i <= newFort.length; i++){
						fortunesList.push(newFort[i]);
						
					}
					
					//bugchecking.
					//console.log("fortuneslist length: " + fortunesList.length);
					//console.dir(fortunesList);
					
					//reset the newFort array
					newFort = [];
					//remove possible redundancies
					removeRedundancies(fortunesList);
					//return to the top of the function
					continue;
				//or if they say anything else
				}else{
					//Leave the fortunes up for posterity?
					var ny = prompt("Would you like to (1) leave this as it is or (2) start from scratch?")
					if(parseInt(ny) == 1){
						break;
					}else{
						//or burn them all and start anew?
						location.reload();
					};
				};
			};
		};
	};
};
	
	
	
	







// The following data list is provided for you to use in your code.

var fortunesList = [

    "People are naturally attracted to you.",

    "You learn from your mistakes... You will learn a lot today.",

    "If you have something good in your life, don't let it go!",

    "What ever you're goal is in life, embrace it visualize it, and for it will be yours.",

    "Your shoes will make you happy today.",

    "You cannot love life until you live the life you love.",

    "Be on the lookout for coming events; They cast their shadows beforehand.",

    "Land is always on the mind of a flying bird.",

    "The man or woman you desire feels the same about you.",

    "Meeting adversity well is the source of your strength.",

    "A dream you have will come true.",

    "Our deeds determine us, as much as we determine our deeds.",

    "Never give up. You're not a failure if you don't give up.",

    "You will become great if you believe in yourself.",

    "There is no greater pleasure than seeing your loved ones prosper.",

    "You will marry your lover.",

    "The greatest love is self-love.",

    "A very attractive person has a message for you.",

    "You already know the answer to the questions lingering inside your head.",

    "It is now, and in this world, that we must live.",

    "You must try, or hate yourself for not trying.",

    "You can make your own happiness.",

    "The greatest risk is not taking one.",

    "The love of your life is stepping into your planet this summer.",

    "Love can last a lifetime, if you want it to.",

    "Adversity is the parent of virtue.",

    "Serious trouble will bypass you.",

    "A short stranger will soon enter your life with blessings to share.",

    "Now is the time to try something new.",

    "Wealth awaits you very soon.",

    "If you feel you are right, stand firmly by your convictions.",

    "If winter comes, can spring be far behind?",

    "Keep your eye out for someone special.",

    "You are very talented in many ways.",

    "A stranger, is a friend you have not spoken to yet.",

    "A new voyage will fill your life with untold memories.",

    "You will travel to many exotic places in your lifetime.",

    "Your ability for accomplishment will follow with success.",

    "Nothing astonishes men so much as common sense and plain dealing.",

    "Its amazing how much good you can do if you dont care who gets the credit.",

    "Everyone agrees. You are the best.",

    "LIFE CONSISTS NOT IN HOLDING GOOD CARDS, BUT IN PLAYING THOSE YOU HOLD WELL.",

    "Jealousy doesn't open doors, it closes them!",

    "It's better to be alone sometimes.",

    "When fear hurts you, conquer it and defeat it!",

    "Let the deeds speak.",

    "You will be called in to fulfill a position of high honor and responsibility.",

    "The man on the top of the mountain did not fall there.",

    "You will conquer obstacles to achieve success.",

    "Joys are often the shadows, cast by sorrows.",

    "Fortune favors the brave."

]

