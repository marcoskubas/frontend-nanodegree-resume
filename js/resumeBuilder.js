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