let nums = [1,2,2,3]
// Lets remove duplicate

console.log([...new Set(nums)])

// immediately invoke expression functions
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE#:~:text=An%20IIFE%20(Immediately%20Invoked%20Function,soon%20as%20it%20is%20defined.
// The primary reason to use an IIFE is to obtain data privacy. Because JavaScript's var scopes variables to their containing function, 
// any variables declared within the IIFE cannot be accessed by the outside world.

//  Immediately Invoked Function Expression is a good way at protecting the scope of your function and the variables within it. 
//  The term ‘scope’ might also be a bit fancier than it needs to be — it basically just means where it can be accessed from.
 
//  You will often (but not always) see IIFEs used in frameworks/libraries such as jQuery. 
//  They will often wrap all of the code for their framework/library inside of an IIFE in 
//  order to protect the scope of its variables and also to make sure that everything is executed without the user having to do anything.

Anyway, let’s look at a quick example of a function and why it may be useful to turn it into an IIFE:
// Normal function
function addTogether() {
 var x = 20;
 var y = 20;
 var answer = x + y;
 console.log(answer);
 }
addTogether();
So here we have a function that simply adds together the values of var x and var y. We then call the function shortly after. From this point, we can call the addTogether function as many times as we like.
But maybe this isn’t desirable, and we simply want to call a function in order to get an output, but that’s it — we’ll never want to use it again and don’t want our program to ever be able to accidentally access it.
Now the first thing to mention here is that, in the above example, our variables are safe — safe insofar that they are immutable (which is just a fancy, technical term for saying that they cannot be changed in the future).
So that’s great, our variables cannot be accessed, but how do we make it so that our function also cannot be accessed.
That’s where IIFE’s come in.
So the first thing we do is wrap our entire addTogether function in brackets, like so:
(function addTogether() {
 var x = 20;
 var y = 20;
 var answer = x + y;
 console.log(answer);
 });
This is actually the first part of creating what is known as a function expression. Now at the moment, it’s not quite your typical function expression, in that function expressions will usually be anonymous. What we have here is called a named function expression. How many more times do you think we can say function expression in the space of a minute? Function expression, function expression, function expression.
Function Expression!
Anyway, so because we are creating one of those function expression things that I just said about ten times, we don’t actually need to give the function a name anymore, because the plan is that once we’ve created an IIFE, we have no intention of calling the function again. So let’s get rid of the name:
(function() {
 var x = 20;
 var y = 20;
 var answer = x + y;
 console.log(answer);
 });
Okay, we’re nearly there.
Finally we need a way to be able to call this function, but how do we do that now given that we don’t have a name to refer to? Well, we simply add a pair of brackets at the end of the function (but just before the semi-colon), like so:
(function() {
 var x = 20;
 var y = 20;
 var answer = x + y;
 console.log(answer);
 })();
And there you have it, your very own IIFE!
So now no longer any need to feel iffy about using IIFE’s.
