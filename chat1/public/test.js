// Token acquisition:
// Using libemojidex
Emojidex::Service::User user;
user.login("MyUser", "my-password");
// Using the emojidex-web-client
emojidex = new EmojidexClient();
emojidex.User.login({'authtype': 'plain', 'username': 'MeMeMe', 'password': '******'});
// Token confirmation:
// Using libemojidex
Emojidex::Service::User user;
user.authorize("MyUser", "0123456789abcdef");
// Using the emojidex-web-client
// coming soon
// When authentication / confirmation succeeds something like the following JSON is returned:
{"auth_status":"verified","auth_user":"MyUserName","auth_token":"0123456789abcdef",
  "pro":false,"pro_exp":null,"premium":true,"premium_exp":"2016-10-22T15:18:33.926+00:00", "r18":false}
// When authentication fails the follwing JSON is returned:
{"auth_status":"unverified","auth_token":null}
// Token utilization example:
// the emojidex web client will automatically insert auth keys for you

// DO NOT store a users password. ALWAYS use an auth token. ONLY pass the password to the API when you are obtaining an auth token. Store auth tokens as securely as possible!
//emoji Seeds / Static Collections
//Get all UTF [standrd] emoji
// Using libemojidex
Get all emojidex brand Extended emoji
Get all UTF [standard] emoji with Japanese codes
Get all emojidex brand Extended emoji with Japanese codes
Get moji code indexes
// The returned data contains three major indexes.
/* ... indicates truncation, the actual data does not have a ... */
{
  /* useful for REGEX checking/filtering */
  "moji_string":"⛲⛳⛺⛽✅✉✌〽️...",
  /* useful for manual scanning */
  "moji_array":["️1️⃣","️2️⃣","️3️⃣","️4️⃣","️5️⃣","️6️⃣","️7️⃣","️8️⃣", ...],
  /* useful for mapping characters to short codes or for a very basic index */
  "moji_index":{"⛲":"fountain","⛳":"golf","⛺":"tent","⛽":"fuelpump", ...}
}

GET /emoji/sushi
// Information about the “sushi” emoji is retruned:
{"code":"sushi","moji":"������","unicode":"1f363","category":"food","tags":[]}
// To get information about a particular emoji simply query they /emoji/(emoji code) endpoint, replacing (emoji code) with the emoji code you want the information about.

// emoji Index
GET /emoji
emojidex.Indexes.index();
GET /emoji detailed=true
emojidex.Indexes.index(null, {'detailed': true});
GET /emoji limit=50 page=2
emojidex.Indexes.index(null, {'page': 2, 'limit': 50});
//Gets a general index of emoji, sorted by score.
// This index is ordered by a combination of registration date and popularity. Newer and more popular emoji will show up first.

// Newest emoji
GET /newest
emojidex.Indexes.newest();
// Gets a general index of emoji sorted by registration date.

// Popular emoji
// GET /popular
emojidex.Indexes.popular();
//Gets a general index of emoji sorted by popularity (times favorited).

//GET /categories
// categories should be pre-cached
emojidex.Categories.all()
// you can actively obtain categories from the server
emojidex.Categories.get();
Returns category info
{"categories":[{"name":"Abstract","code":"abstract","emoji_count":967},
{"name":"Cosmos","code":"cosmos","emoji_count":110},
{"name":"Faces","code":"faces","emoji_count":1702},
{"name":"Food","code":"food","emoji_count":448},
{"name":"Gestures","code":"gestures","emoji_count":657},
{"name":"Nature","code":"nature","emoji_count":833},
{"name":"Objects","code":"objects","emoji_count":1848},
{"name":"People","code":"people","emoji_count":997},
{"name":"Places","code":"places","emoji_count":163},
{"name":"Symbols","code":"symbols","emoji_count":1572},
{"name":"Tools","code":"tools","emoji_count":79},
{"name":"Transportation","code":"transportation","emoji_count":277}],
"meta":{"count":12,"total_count":12,"page":1}}
GET /categories locale=ja
emojidex.Categories.get('ja');
//Gets a list of categoires, including category codes (used in searching) and [localized] titles.
// While the categories endpoint can take limit and page parameters, there are currently not enough categories that you’d need to use them. The defaults will give you a full list of categories.

//Search for emoji
//Search for emoji with code containing “heart”
emojidex.Search.search("heart");
//Search for emoji with code starting with “heart”
emojidex.Search.starting("heart");
//Search for emoji with code ending with “heart”
emojidex.Search.ending("heart");
//Search for emoji with codes containing “heart” in the category “faces”
emojidex.Search.advanced("heart", [], ['faces']);
//Search for emoji with codes containing “heart” in either the category “faces” or “abstract”
emojidex.Search.advanced("heart", [], ['faces', 'abstract']);
//Search for emoji with tag “weapon”
emojidex.Search.tags(["weapon"]);
//Search for emoji where code contains “rifle”, has the tag “weapon”, and is in category “tools”
emojidex.Search.advanced("rifle", ['weapon'], ['tools']);
//The basis for emoji searches is search by emoji code. Searches can be performed for codes that contain a term, start with a term, or end with a term. Alternatively, you can serch for tags, or you can combine a code search with tags to restrict search results to emoji containging the term which also have the tags specified. Additionally, searches can be restricted to one or more categories, where results will only be emoji present in the categories specified. In general, more tags specified means a more specific search with fewer results. And, in general, the more categories specified the more generalized the search and therefore more results. When no categories or tags are specified the search will not be restricted to any categories or tags and will return all results for the term specified.

// The API endpoint for searches is /search/emoji.

//User emoji
//Get emoji for the user “Zero”
emojidex.Index.user("Zero");
//Get emoji for the user “絵文字”
emojidex.Index.user("絵文字");
Returns a collection
{"emoji":[{"code":"幻","moji":null,"unicode":null,"category":"abstract","tags":[],"link":null,
"base":"幻","variants":["幻","幻(白)"],"score":0},{"code":"pink poo","moji":null,
"unicode":null,"category":"abstract","tags":[],"link":null,"base":"pink_poo",
"variants":["pink_poo"],"score":340}],"meta":{"count":2,"total_count":2,"page":1}}
//You can get all emoji registered by a specific user.
//Some special user accounts exist from which you can get the current UTF index, emojidex original extended emoji, etc. These accounts are as follows:

//Get favorites:
// favorites should be pre-cached on login/initialization
emojidex.User.Favorites.all()
// you can actively obtain favorites from the server
emojidex.User.Favorites.get();
{"emoji":[{"code":"falafel","moji":null,"unicode":null,"category":"food","tags":[],"link":null,
"base":"falafel","variants":["falafel"],"score":100}],
"meta":{"count":1,"total_count":1,"page":1}}
Add an emoji to favorites:
emojidex.User.Favorites.set("zebra");
{"code":"falafel","moji":null,"unicode":null,"category":"food","tags":[],"link":null,
"base":"falafel","variants":["falafel"],"score":106}
Remove an emoji from favorites:
emojidex.User.Favorites.unset("zebra");
{"code":"falafel","moji":null,"unicode":null,"category":"food","tags":[],"link":null,
"base":"falafel","variants":["falafel"],"score":6}
Favorites can only be accessed with a token. This resource requires authentication.



// history is pre-cached on login/initialization
emojidex.User.History.all()
// you can active obtain history from the server
emojidex.User.History.get();
A successful request will return a history array and meta info.
{"history":[{"emoji_code":"falafel","times_used":6,"last_used":"2015-12-21T14:16:58.603+00:00"},
{"emoji_code":"sushi","times_used":4,"last_used":"2015-12-21T14:16:49.708+00:00"}],
"meta":{"count":2,"total_count":2,"page":1}}
Add an emoji to history:
emoji.User.History.set("zebra");
A successful registration will return the updated history entry:
{"emoji_code":"zebra","times_used":1,"last_used":"2015-11-30T04:18:23.647+00:00"}
History can only be accessed with a token. This resource requires authentication.

http://cdn.emojidex.com
https://github.com/emojidex/emojidex-converter) 
http://assets.emojidex.com/emoji/px32/blush.png
http://assets.emojidex.com/emoji/blush.svg

function generateColor( Username ){
    // this is NOT a great hash but serves as an example
    var sum = 0;
    for (var i = 0; i < Username.length; i++){
        sum += Username .charAt(i);
    } //end of for
    return sum % colours.length;
} // end of function

console.log( colors[generateColor( "Steve" )] );
messageObect.color = generateColor( messageObject.username);