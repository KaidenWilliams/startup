Local Tour Guide


We all have times where we sit around, bored,
thinking there's absolutely nothing to do. I've 
felt it, we'be all felt it. Well now there's a
quick and easy way to find local activities 
through the Local tour guide app. Using it,
you can quickly find activities around you by
looking at user submissions of places and 
activities posted from fellow community members,
meaning they will be revalent to you. You can also
filter activities by category so you only 
find what you are looking for.

![CA9DA1CF-25DE-4B87-B095-89C4595ADC31](https://user-images.githubusercontent.com/123617877/215238229-4cd7ea4f-07bf-4570-bafe-e2741f53f3de.jpeg) 


Features:

Ability to login with username to community securely through https 

Location determined by your real life location or what you select

Displayed map with a figure to show where you are on map

Activities shown as dots in real life location on map

If you click on activities it gives a description of them

Filter activities by category they are listed under

Add new activities yourself by pressing location on mapand writing description

.

.

Potential ideas: Geocaching/Google maps thing, Stock market ticker display (if live updates that way count as webservices), Notes app with collaborative editing with others

.

.

AWS Assignment:

Was a lot more complicated setting up website than I thought it would be, overwhelming amount of information and specification options, I would be very lost without the assignment guide.

I didn't think my website would have preloaded content, I guess it is automatically loaded in when connecting to CS server

IP adress: 18.116.166.104

Still not completely sure how to use SSH and development vs production environments, have to figure that out

.

.


DNS: smartprogramming.click

Easier to navigate through the route 53 page than it was to initially set up server.

Cool how you can put anyword in front of root and it still works, http://chicken.smartprogramming.click/ is still completely valid
.

.

It's cool how caddy does all the heavy lifting for you, I do want to dig a little deeper into how it works though

D to resolve changes with .swp files in vi

.

.

HTML is comprised of a bunch of tags that dictate the layout of your website/how it is organized, containers in containers.

Tags normally go <x> </x>, if just one tag <br/>.

Seems like it's impossible to remember everything, just remember what is possible and then if you want to do it look it up on internet.

Multiple different types of headers

Classes and id's don't really do anything with solely HTML, they are very useful when used with CSS and Javascript though because then you can define the behaviors of those classes.

Inline vs block elements, block takes up all space available and automatically makes new line, inline does not make a new line and only takes up as much space as neccesary, also cannot contain a block element while vice versa is true. Block is like <p> or <div>, inline is like <span> or <a>.
  
Interesting to see how many different types of elements there are, I don't completely get the differences between all of them for example <nav> vs. <main>, seems like all the different elements are for all the different possible kinds of content you could include in a website.
  
All the input get's stored inside the form element, used to be absolutely essential to submit everything but now with Javascript everything can dynamically update, still common practice to put everything in form.
  
Form: action: defines where the information is sent. Method: Specifies how to send form data, get and post are most common, get: appends data into url, less secure, better used for stuff that can be bookmarked and not too private like Google search queries. Post: Appends form data into body of url request, more secure, has no size limitations.
  
For input can have validation through regex pattern matching.
  
Many different kinds of inputs, different things you can do with each one, for example can allow user to select multiple different options you specify. Strange how you don't have to do anything with file uploads your computer just knows to pull up file explorer.
  
Crazy how meter willl change colors just by setting low and high values
  
Either use relative of full path for external media, relative if media stored same place HTML is and full path if not, want to make relative relative as possible.
  
For video and audio you can choose if you want them to autoplay, also can let user control them.
  
Can make your own media using svg and canvas.
.

.

For my HTML assingment, my photo at first was far too large so I had to make it a lot smaller. Also, I was impressed with how fast the deployment script worked,
my website updated instantly.

.

.

My Simon Project:

I figured out what the simon code did, wrote it all out, did my commits, and ran the script to deploy it. However when I try to access the website I get the error Error: ENOENT: no such file or directory, stat '/home/ubuntu/services/simon/public/index.html', which I have not been able to solve. I do not know why it is doing it, but I will try to fix it tomorrow.

Besides that, I thought the HTML was interesting. I assumed the Simon toy would be an image, but it was actually a graph with SVG and a button in it.

It was cool how most of the code was reused for the 4 web pages except the main element, where everything was different.
  
Well I realized today that the problem was the fact that I renamed my index.html file to home.html, so the computer didn't know what page to route itself to. I fixed that and everything should be working now.
  
-index.html file has a purpose, it is the default page
  
 When you have an error check discord, high likelihood someone else had it too.

.

.

CSS:

I did not realize how hard it was to make something look good until I did this assignment

There is a difference between defining behavior for an element for example p{} vs. .p{}, the second makes a class that needs to be added later on like <p class = "p">

.

.

Flex rating: How much of the screen the flex box will try to take up/move (I think). @media takes in screen size as input and can call changes on css for output.

Seems like you have to really add layers to your html to be able to more easily do what you want with flex.

Default turn the margins and everything to zero so you can manually do it later.

Read through the w3schools css stuff, experiment with froggy.

.

.

CSS is inline with html for Bootstrap, figure out what all the different class options do.

.

.

The CSS was very nice when making the Simon project, it cut down on a lot of code when making tables and visuals for the play and scores files

The css bootstrap names for things were interesting, such as bg-dark text-dark text-muted.

.

.

Javascript reminds me of Python but has curly brackets and Semicolons.

Strange how for arrays you need to use for of instead of for in loops.

Classes make sense, objects seem like mix between classes and dictionaries.

.

.

Startup Notes -
  
CSS is very trial and error, you have to throw things out and see what works.
  
Found it works best for me to get general html layout, then focus on specific fine-tuned CSS and HTML one section at a time.
  
For classes I need to work on making things more reusable, also taking advantage of more selectors like applying a style to all child elements of an element, I also need to use less inline CSS declarations.
  
Set all box sizing to border box, makes life easier. Padding pushes out to make more space, margin pushes in away.
  
Using rem for font size made my life easier, put px for header and footer sizes.
  
Almost always use align-items center for flex, stretch is also good for putting things in middle.
  
Still don't quite get space-between vs. space-around for flex justify-content, also don't get relative vs absolute alignment.
  
CSS tricks, W3schools, Stackoverflow, and developer tools are all super helpful.
  
.
  
.
  
ReGex + others:
  
To get input from html document, can use document.queryselector (any CSS selector) document.getlementbyid (only ids)
  
//: JS regex starts and end with backslashes, (): Capturing group, (?:): Non-capturing group, (?=): look-ahead group, \n: captures same characters captured in group n, ^: matches start of string, $: captures end of string.
  
Match valid Phone number: /^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/
  
/d: any digit, /w: any word, /s: whitespace, /S: any non-whitespace character
  
.addeventlistener(type (string of event), listener (object or function that recieves notifcation and does something), options (multiple possible specifications) : Does something when something happens, similar to .onclick.
  
` `: backticks, used to enclose strings that also have stuff you want to be evaluated like variables or functions.
  
.textcontent: defines what the text inside a element will be. .value: accesses the value passed into an element.
  
Rest and spread are basically reciprocals of each other, one passed into function as parameter and other put while intially declaring function.
  
Deconstructing is similar to tuple unpacking in Python, you need to use same type of brackets as thing you are unpacking.
  
Use exceptions sparingly, utilize fallbakcks where you try to do thing in ideal way but if that doesn't work do it in non-ideal way.
  
Can use prompt() function or capture input on form element.
  
Dom: Document object model, name for API's that together can modify hmtl, document is root for DOM
  
&nbsp: non-breaking space, makes space every time consistently for html, string representation is "\u00A0",  very useful, multiple " " in a row will just be interpreted as one break.
  
Adding spaces when joining arrays was giving me trouble, fixing that fixed my problems.
  
& is not greedy, evaluates everything, && is greedy an short circuits. 
.

.

Promise, async, await: 
.

.

Simon JS: Form can be completely replaced by JS, no longer need HMTL element to submit button click when you can use addeventlistener or onclick instead.

localStorage: object in web browser that allows developers to store key-value pairs in web browser, can store data even if page is closed. Data stored as string, setItem makes item, getItem removes item, removeItem removes item.

Window Object: current tab or window, top level object in JS hierarchy. Window.location: Used to change Url to move to new browser. Window.localstorage: Provides access to browsers local storage. Windows.document: Provides access to DoM. Windows.alert, Windows.prompt.

Mostly just main that is changing with JS, most other thigs staying pretty much the same.

Onclick = "function", function has to be surrounded in quotes.

<script tag more commonly placed in bottom of html because it allows everything else to load first.


MiDTERM:

Record type to point to another DNS record: CNAME, but we need to know A, not SOA or txt 
DOM textContent: Sets child text for the an element
CNAME: Canonical Name, maps a hostname to another hostname, does not have to be in same zone, "www CNAME web" would map "www.reddit.com" to "web.reddit.com". Likewise "www CNAME www.google.com." would map "www.reddit.com" to "www.google.com"
A: Adress record, maps hostname to IP address, "www A 72.246.43.82" means that "www.reddit.com" can be found at the IP address 72.246.43.82. Note that you can have multiple A records (IP addresses) for the same hostname.
Can use CSS to load fonts from Google, look up what that syntax is
Valid Json: {???x???:3], always has key value in double quotes for JSON, undefined not valid value for JSON object
Valid Javascript object: {x:3}
To turn BYU text blue: div.header {color: blue}
<Javascript> </Javascript> Not valid to include Javascript in HTML
/A|f/i: /i means not case sensitive, regular expression that will match an a or f
Function f(x) = {}: Not a valid function. Arrow functions are valid though.
Padding: Puts space around content of selected documents, Pals before marriage
Margin, border, padding, content, from outside in of box
Reduce: Takes array and makes it into one item, map:  map: Takes array and applies some sort of function to each item, maps function onto every value in array, filter: Pass in array, returns array with values that match criteria, sum:
<ul>: HTML unordered list, <li>: Item in a list, <ol>: ordered list
<a href: valid link
Dns subdomain: c260.cs.byu.edu
Chmod +x deploy.sh: Command to change file permissions of deploy.sh, chmod: change mode which allows you to modify file, +x adds execute permissions to file, means it can be executed as a program.
Ls ??? la deploy.sh: list details about deploy.sh, ls stands for list and shows content, la is ls option used to display additional information
Sudo deploy.sh: runs deploy.sh with priveleges, sudo: superuser do, executes commands with administrative or root-level permissions
Ssh deploy.sh: Not a valid command, ssh is used to establish a secure shell connection to server.

   
   
Startup Javascript: Submit is used for form, click is used for when button is not in form.

I know it's not good to use inline CSS and I should try to make everything reusable and modular but it is just so quick and easy to use inline.

My thoughts about async, await, and promises were that they were only meant to be used when doing something that would take a while, such as making a request to get something from a server

.createElement(element) creates html element, .classlist.add(class) adds class definition and CSS styling to newly created class. Also, setattribute().

.style.left, .style.right, .style.top and.style.bottom used to choose position of something on screen.

I don't know if I should use classes while using Javascript, but I have items I want to group together but don't know how to.
