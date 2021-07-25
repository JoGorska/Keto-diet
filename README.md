# Keto Diet
## Aim of the website
I hope to explain what Keto diet is about and show how effective and pleasurable it can be. I aim to encourage more people to try it. I am not a dietitian, but I have read a lot about Keto. I am on Keto 7 months and I want to share me experience. 

## Structure of the website
1. Cover page for the user to interact with the questions
2. Calculator
    - Option 1 - Target - deadline - calculate how much I can loose untill the deadline
    - Option 2 - Target - weight  - calculate when I will acheve that
3. Accomodatig different measures
    - imperial measures
    - kg / m 
4. Contact page to request contact with dietitian / life coach

## Styling
The general style of the website is light and airy, images used are light and colors are chosen in light spectrum. As a contrast for user interactions I use green as refference to avocado and red as a warning or as a sign of negative reaction. Since I used Bootstrap's classess to style the whole page my intervention in css was not needed in most places. It would also be very difficult to over ride Boootstrap's classess as they use !Important. I have decided to have minimal intervenction in the styling due to this difficulty. 



1. Bootstrap provided me with clear responsive design, nice to look at and easy to interact with for the user. 
2. Bootswatch - Morph - modified Bootstrap's style, adding those big buttons with a shadow.
3. following the style of those buttons I created nav bar
4. Fonts 
    - headers I have chosen a few fonts to test. I wanted them to reflect the style of the buttons that I have from Bootswatch Morph.  
    - plain text - simple font easy to read

To be used later - choose later

Initial prefference: Baumans,  Nova Mono, Kodchasan


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Aclonica&family=Baumans&family=Gochi+Hand&family=Knewave&family=Kodchasan:wght@200&family=Nova+Mono&family=Permanent+Marker&family=Rock+Salt&family=Ruslan+Display&display=swap" rel="stylesheet">
CSS rules to specify families

font-family: 'Aclonica', sans-serif;
font-family: 'Baumans', cursive;
font-family: 'Gochi Hand', cursive;
font-family: 'Knewave', cursive;
font-family: 'Kodchasan', sans-serif;
font-family: 'Nova Mono', monospace;
font-family: 'Permanent Marker', cursive;
font-family: 'Rock Salt', cursive;
font-family: 'Ruslan Display', cursive;

## Bugs
1. Problem with editing Calculator Form

I started with creating calculator.html as a page holding calculator form with the intention (once the form is completed) to copy the code into script.js. 

My Initial idea was to create whole calculator form with JavaScript, this was as a result of a click of a button on nav bar or in welcome questions. This gave great control to what goes into the form. I have managed to create two independent versions of the form. 

Unfortunately having a hudge block of html inside script.js was causing difficulty. 
    - If I decided to make changes to some part of calcualtor form - I had to edit both versions of the calculator
    - when it came to editing html inside script.js I had to remove back ticks every time so I see HTML correctly in color and it did not have emmet abbreviations inside script.js. I often ended up writing the code in calculator.html and transfering it inside script.js.
    - upon suggestion of my mentor Felippe I have removed the main calculator form from script.js and restored links to oryginal
Many of the event listeners were created with the thought of calculator coming from javascript, since they still worked for calculator.html. They will be edited and simplified if time allows before submitting the project. ????

2. Naming conventions (id in html)
Forms copied from Bootstrap had classess using "-" and id using camel cases. Due to complexity of the form, I decided to unify conventions. 

I reaserched for HTML naming conventions fount and [this article](https://courses.cs.washington.edu/courses/cse154/17au/styleguide/html-css/naming-conventions-html.html). After further reaserch I have found that W3schools use camel casing, examples of this are shown in [this article](https://www.w3schools.com/html/html_id.asp). Further reading provided [this article](https://stackoverflow.com/questions/6028211/what-is-the-standard-naming-convention-for-html-css-ids-and-classes) in stackoverflow.

Throught all articles one imporant message is repeated - is to be consistent within the document. The choise of convention can be personal prefference or prefference of the employer or cooworkers. The consistency is the key. 

I corrected all ID to follow W3schools convention with camel casing. 

## Previous project (to be deleted)

1. Results, what I have acheved being on Keto Diet
2. How it works - Recipe for success
3. Authorities - people that speak about Keto
4. How to start on Keto
5. Keto flu
6. Am I in Keto - how to measure if you are in Ketosis
7. Suplements
8. Contact page - leave your contact details for dietitian to get back to you

## Further developement the website

1. Add your Keto recipe - form for users to add their recipe
2. Add your Keto success story - form for users to add their achevements
3. Links to websites or youtube videos on Keto
4. Shop for suplements and / or for Services from dietitians and coaches
5. Flip cards with keto foods - with minus points
6. Quiz to guest the sugar or carbohydrates content of the shown food item
7. Register for users 
8. Keto corner for people that DON'T want to loose weight - other benefits of keto 

## User stories
1. I know the target weight I want to acheve. I want to know how quickly I can loose weight. 
2. I have a very important event to attend in a few months. I want to know how much weight I can loose untill than.
3. As a returning user I want to be able to access the calculator from the main page.
4. As a user I want to know if the calculations are reliable. How did you come up with the numbers.
5. As a user I want to know if I can sustain this weight loss.
6. I'm not yet convinced to go Keto, but I want to learn more about sugar content and how to choose products with lower sugar content. 

## Technologies used
- bootstrap 5 

## Thanks to
1. Cover design used for index.html
Downloaded from Bootstrap examples. Authors Mark Otto, Jacob Thornton, and Bootstrap contributors. 
2. Webinar ??? for javascript
3. Webinar for git hub
4. Brian and David for advice during hackaton on branches and pull requests
3. Mentor


## Joanna - remember to find all ??? signs in all files (readme as well)

        