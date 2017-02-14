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

var projects = {
    "projects" : [
        {
            "title" : "Sample Project",
            "dates" : "2017",
            "description" : "Who moved my cheese cheesy feet cauliflower cheese.",
            "images" : [
                'http://blog.lansa.com/wp-content/uploads/json-featured.jpg',
                'http://daoinsights.com/wp-content/uploads/2015/08/json-logo.png'
            ]
        }
    ]
}