/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*$('#main').append('Marcos Kubas');

var awesomeThoughts = "I am Marcos Kubas and I am AWESOME";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace('AWESOME', 'FUN');
$('#main').append('<p>' + funThoughts + '</p>');*/

var role = 'Web Developer';
var formattedRole = HTMLheaderRole.replace("%data%", role);
$('#header').prepend(formattedRole);

var name = 'Marcos Kubas';
var formattedName = HTMLheaderName.replace("%data%", name);
$('#header').prepend(formattedName);

var skills = ['PHP', 'Javascript', 'Python'];

var bio = {
    "name" : "Marcos Kubas",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "+55 51 99929.7876",
        "email" : "marcosarobed@gmail.com",
        "github" : "https://github.com/marcoskubas",
        "twitter" : "https://twitter.com/marcoskubas",
        "location" : "Brazil"
    },
    "picture_url" : "https://media.licdn.com/media/p/2/005/009/3ad/1d8cfcb.jpg",
    "welcome_message" : "Lorem Ipsun bla, bla, bla",
    "skills" : skills
}

bio['city'] = "Guaíba/RS";

// $("#main").append(bio.name);

$("#main").append(bio['city']);

var work = {}
work.position = "Web developer";
work.employer = "Ruá start";
work.years    = "Seven years";

var education = {};
education["school"] = 'Ulbra';
education["years"]  = "Nine years"
education["city"]   = "Guaíba/RS"

$("#main").append(work['position']);
$("#main").append(education.school);

/*var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
    var lastPosition = _array[2] + 1;
     _array.pop();
     _array.push(lastPosition);
     newArray = _array;
    
    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));*/