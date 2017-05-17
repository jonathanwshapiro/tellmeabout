// The main slapper
exports.tellMe = function(topic){
    var topicList = [
	//topics
	"coop",
	"plagueis",
	"shane",
	"snakes",
	"veganism",
	"sonic",
	"sophie",
	"baseball",
	"kink",
	"avengers",
	"space",
	"politics",
	"games",
	"mtg",
	"fashion",
	"realfashion",
	"music",
	"art"
	];

    var infoList = [
	//information
	"who?",
	"Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.",
	"a hero, taken before his time",
	"We're the TUNNEL SNAKES. That's US. And we RULE.",
	"Just don't take your advice from Jon",
	"gotta go FAST",
	"ooh not sure I want to go there...",
	"the only sport where the defense controls the ball",
	"hey man it's cool with me as long as it's not too rapey",
	"captain america and iron man are pretty evenly matched",
	"it's big, man. I'll give it that",
	"The two-party system is disastrous. Sad.",
	"consoles are a great way to play games for an affordable price",
	"take it to the splinter chat, Jon",
	"spendin everything on alexander wang",
	"you can dere-LICK my balls",
	"their older stuff was better",
	"if it doesn't have a prehensile black dick don't even bother"
	];
	
    var index = topicList.indexOf(topic);
    if(index < 0){
        return "Why the fuck would I know anything about that";
    } else {
        return infoList[index];
    };
};

// run
exports.run = function(api, event) {
    // Obtain the topic
    var query = event.arguments_body;

    // get the info
    var result = exports.tellMe(query);

    // Send to facebook
    api.sendMessage(result, event.thread_id);
};
