const qBank = [
  {
    question:
      "On the periodic table, elements are arranged in order of what?",
    answers: ["Increasing Atomic Number", "Increasing Atomic Mass", "Increasing Electrons"],
    correct: "Increasing Atomic Number",
    questionId: "099099",
    type:"science"
  },
  {
    question:
      "On the periodic table, elements are arranged in order of what?",
    answers: ["Increasing Atomic Number", "Increasing Atomic Mass", "Increasing Electrons"],
    correct: "Increasing Atomic Number",
    questionId: "099089",
    type:"science"
  },
  {
    question:
      'What is fools gold made of?',
    answers: ["Iron Pyrite", "Copper", "Copper pyrite", "00"],
    correct: "Iron Pyrite",
    questionId: "183452",
    type:"science"
  },
  {
    question:
      "What does a litmus test establish?,",
    answers: ["The acidity or alkalinity of a mixture", "Only Acidity", "Only Alkalinity", "None"],
    correct: "The acidity or alkalinity of a mixture",
    questionId: "267908",
    type:"science"
  },
  {
    question: "What is the process by which plants convert light energy into food known as?",
    answers: [
      "Photosynthesis",
      "Photolysis",
      "None",        
    ],
    correct: "Photosynthesis",
    questionId: "333247",
    type:"science"
  },
  {
    question: "How many chambers does a human heart have?",
    answers: ["4", "3", "2", "1"],
    correct: "4",
    questionId: "496293",
    type:"science"
  },
  {
    question:
      "A and B were sharing profits of a business in the ratio of 3 : 2. They admit C into partnership, who gets 1/3 of A’s share of profit from A, 1/2 of B’s share of profit from B.The new profit sharing ratio will be",
    answers: [
      "3 : 2 : 5",
      "2 : 1 : 2",
      "3 : 2 : 1",
      "3 : 2 : 2"
    ],
    correct: "2 : 1 : 2",
    questionId: "588909",
    type:"commerce"
  },
  {
    question:
      'Which one of the following statements about RBI is true?',
    answers: ["RBI maintains the foreign exchange reserves of India", "RBI is the regulator of Banks and Securities market in India", " RBI started functioning from 1870", "None of these"],
    correct: "RBI maintains the foreign exchange reserves of India",
    questionId: "648452",
    type:"commerce"
  },
 
  {
    question: "According to ownership, Government Company means ……… share.",
    answers: ["Whose paid-up share capital’s 48%, shares are owned by Government",
    "Whose paid-up share capital’s 49% shares are owned by Government",
    "Whose paid-up share capital’s 50% shares are owned by Government",
    "Whose paid-up share capital’s 51% shares are owned by Government",],
    correct: "Whose paid-up share capital’s 51% shares are owned by Government",
    questionId: "107134",
    type:"commerce"
  },
  {
    question: "An isosceles triangle has two sides of equal length as opposed to three?",
    answers: ["True", "False", "Cannot Say"],
    correct: "True",
    questionId: "1174157",
    type:"commerce"
  },
  {
    question: "What is the the degree of polynomial P: P(x) = 2x - 2?",
    answers: ["1", "0", "Not Defined"],
    correct: "1",
    questionId: "1226535",
    type:"commerce"
  },
  {
    question: "This refers to the way something feels, or looks as if they might feel like something.",
    answers: ["Line", " Space", "Value", "Texture"],
    correct: "Texture",
    questionId: "1310938",
    type:"arts"
  },
  {
    question: "When lines meet to form an enclosed area this is formed.?",
    answers: ["Line", " Space", "Value", "Texture"],
    correct: "Shape",
    questionId: "1436875",
    type:"arts"
  },
  {
    question: "The Indian independence Act, 1947 came into effect on ?",
    answers: ["14 August 1947", "18 July 1947", "26 January 1947"],
    correct: "18 July 1947",
    questionId: "1515110",
    type:"arts"
  },
  {
    question: "When lines meet to form an enclosed area this is formed.?",
    answers: ["Line", " Space", "Value", "Texture"],
    correct: "Shape",
    questionId: "1436873",
    type:"arts"
  },
  {
    question: "which one may be defined as a method of measuring individuals social behavior?",
    answers: ["Sociometry", " Sample method","Verstehen method","Interview method"],
    correct: "Sociometry",
    questionId: "1515124",
    type:"Social Service"
  },
  {
    question: "Research is",
    answers: ["Searching again and again", " Finding solution to any problem","Working in a scientific way to search for truth of any problem","None of the above"],
    correct: "Working in a scientific way to search for truth of any problem",
    questionId: "1515121",
    type:"Social Service"
  },
  {
    question: "The scope and prevalence of social problems (population needs) are determined by:",
    answers: ["Sociometry", " Sample method","Verstehen method","Interview method"],
    correct: "Sociometry",
    questionId: "1515119",
    type:"Social Service"
  },

  {
    question: "What is the collection of terms or records in MARC called?",
    answers: ["System", "Network","Website","Database"],
    correct: "Database",
    questionId: "1515118",
    type:"Social Service"
  },
  {
    question: "Methodology could best be described as:",
    answers: ["The science of knowing", "The science of finding out","The discovery of reality through agreement","All of the above"],
    correct: "All of the above",
    questionId: "1515117",
    type:"Social Service"
  },

  {
    question: "Winning is EVERYTHING. Nothing else matters.",
    answers: ["True", "False"],
    correct: "True",
    questionId: "1515116",
    type:"Sports"
  },

  {
    question: "Jake's opponent continues to trash talk Jake and his teammates throughout the basketball game. Jake's response should be:",
    answers: ["Tell him the opponent that he plays like a girl", "Trip him the next time he is near","Ignore him and play harder"],
    correct: "Ignore him and play harder",
    questionId: "1515115",
    type:"Sports"
  },

  {
    question: "You are playing golf and you hit the ball into the woods behind a tree and nobody can see you. It is ok to move the ball away from the tree so you can have a better shot at the next hit.",
    answers: ["True", "False"],
    correct: "False",
    questionId: "1515114",
    type:"Sports"
  },

  {
    question: "A player in any sport other than boxing who throws a punch at an opponent will be ejected.",
    answers: ["True", "False"],
    correct: "True",
    questionId: "1515113",
    type:"Sports"
  },

  {
    question: "A player or coach who cheats once is more likely to cheat a 2nd time.",
    answers: ["True", "False"],
    correct: "True",
    questionId: "1515112",
    type:"Sports"
  },

   
   
  ];
  
  export default (n = 25) =>
    Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
  