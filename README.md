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
