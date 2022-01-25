const quiz = [
		{

		},
		{
			question: "In which part of your body would you find the cruciate ligament?",
			options: ["Knee", "Toe", "Elbow", "Hip"],
			correctAnswer: "knee"
		},
		{
			question: "What is the name of the main antagonist in the Shakespeare play Othello?",
			options: ["Iago", "Philip", "Ian", "Queen"],
			correctAnswer: "Iago"
		},
		{
			question: "What element is denoted by the chemical symbol Sn in the periodic table?",
			options: ["Tin", "Gold", "Silver", "Copper"],
			correctAnswer: "Tin"
		},
		{
			question: "What is the name of the 1976 film about the Watergate scandal, starring Robert Redford and Dustin Hoffman?",
			options: ["All the President’s Men","All the Governor’s Men","All the Mayor’s Men","All the King’s Men"],
			correctAnswer: "All the President’s Men"
		},
		{
			question: "How many of Henry VIII’s wives were called Catherine?",
			options: ["3", "4", "5", "6"],
			correctAnswer: "3"
		},
		{
			question: "What was the most popular girls name in the UK in 2019?",
			options: ["Olivia", "Patricia", "Eve", "Diamond"],
			correctAnswer: "Olivia"
		},
		{
			question: "Which comedian was the second permanent host of Never Mind the Buzzcocks after Mark Lamarr?",
			options: ["Simon Amstell", "Peter Amstell", "Simon Brown", "Simon Pastel"],
			correctAnswer: "Simon Amstell"
		},
		{
			question: "Which popular video game franchise has released games with the subtitles World At War and Black Ops?",
			options: ["Call of Duty", "Meter Madness", "GTA V", "God of War"],
			correctAnswer: "Call of Duty"
		},
		{
			question: "In what US State is the city Nashville?",
			options: ["Tennessee", "Texas", "Ohio", "North Dakota"],
			correctAnswer: "Tennessee"
		},
		{
			question: "Which rock band was founded by Trent Reznor in 1988?",
			options: ["Nine Inch Nails", "Six Inch Nails", "Six Feet Nails", "Six Inch Beats"],
			correctAnswer: "Nine Inch Nails"
		},
];

var j = 1;
score = -1;

newScore = (option) => {
	if(j<quiz.length) {

		
		document.getElementById("question").innerHTML = quiz[j].question;
		
		// randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
		
		var k = 2;
		var l = 1;
		var m = 3;
		var n = 0;

	// assignKLMN = () => {
	// 	k = randomIntFromInterval(1, 4);
	// 	l = randomIntFromInterval(1, 4);
	// 	while(l!=k){
	// 		m = randomIntFromInterval(1, 4);
	// 		while(m != l && m !=k){
	// 			n = randomIntFromInterval(1, 4);
					
	// 	}
			
	// }

	// assignKLMN();
	
	console.log('k = '+ k);
	console.log('l = '+ l);
	console.log('m = '+ m);
	console.log('n = '+ n);
	
	document.getElementById("answer1").innerHTML = quiz[j].options[k];
	document.getElementById("answer2").innerHTML = quiz[j].options[l];
	document.getElementById("answer3").innerHTML = quiz[j].options[m];
	document.getElementById("answer4").innerHTML = quiz[j].options[n];

	answer = 1
		if(option==answer){
			score++;
			
		}
	}	
	j++;
	document.getElementById("Score").innerHTML = score;	
	
}



document.getElementById("answer1").addEventListener("click", function(){ newScore(1); });
document.getElementById("answer2").addEventListener("click", function(){ newScore(2); });
document.getElementById("answer3").onclick = function(){ newScore(3)};
document.getElementById("answer4").addEventListener("click", function(){ newScore(4); });


