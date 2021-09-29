# Keto Diet
## Screenshot

![index page screenshot](assets/images/index-screenshot.png)

link to live page [here](https://jogorska.github.io/Keto-diet/calculator.html)



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
4. Contact page to request contact with dietitian

5. Initial wireframes can be found [here](assets/images/Wireframe2.pdf) The general design followed the wireframes, though content has been modified from initial version. 

## Features

1. On loading the page user is given a few questions to interact with and spark curiosity
2. Next user is given the calculator form to fill in
3. The user is given the option:
    * ask when he can acheve the target weight
    * how much weight he can loose until his chosen target date
4. The caluclator form allows typing in gender by hand, for inclusivenes.
5. The calculator allows to choose between using imperial mesures and metric
6. Once the form is filled in the user is taken to results page. This page displays in simple cards each aspect of the data we have colected
    * calculates current BMI
    * if current weight BMI is within normal range - the user is adviced that he doesn't need to loose weight
    * otherwise user is given a few cards to familiarise with keto, intermediate fasting, calorie couting and excercise
7. Each card gives user link to contact dietitian, to be let through keto diet by proffesional
    * the button dietitian opens additional window, the query is pre - filled with the data coming from URL of the user's result
    * user can add more comments or just upload the form as it is.
8. The contact form (both from contact form link and from button click from results) are uploaded to Formspree and go directly to my email.


## Styling
The general style of the website is light and airy, images used are light and colors are chosen in light spectrum. As a contrast for user interactions I use green as refference to avocado and red as a warning or as a sign of negative reaction. Since I used Bootstrap's classess to style the whole page my intervention in css was not needed in most places. It would also be very difficult to over ride Boootstrap's classess as they use !Important. I have decided to have minimal intervenction in the styling due to this difficulty. 



1. Bootstrap provided me with clear responsive design, nice to look at and easy to interact with for the user. 
2. Bootswatch - Morph - modified Bootstrap's style, adding those big buttons with a shadow.
3. following the style of those buttons I created nav bar
4. Fonts 
    - headers I have chosen a few fonts to test on the live website. I wanted them to reflect the style of the buttons that I have from Bootswatch Morph.  The fonts are rounded and 
        * font-family: 'Aclonica', sans-serif;
        * font-family: 'Baumans', cursive;
        * font-family: 'Gochi Hand', cursive;
        * font-family: 'Knewave', cursive;
        * font-family: 'Kodchasan', sans-serif;
        * font-family: 'Nova Mono', monospace;
        * font-family: 'Permanent Marker', cursive;
        * font-family: 'Rock Salt', cursive;
        * font-family: 'Ruslan Display', cursive;

    - My final decision is to go for Baumans for Heading and any big lettering
    - Plain text will be Kodchasan font as it is clearer when is used for small fonts


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
Forms copied from Bootstrap had classess using kebab-casing and id using camelCases. Due to complexity of the form, I decided to unify conventions. 

I reaserched for HTML naming conventions fount and [this article](https://courses.cs.washington.edu/courses/cse154/17au/styleguide/html-css/naming-conventions-html.html). After further reaserch I have found that W3schools use camel casing, examples of this are shown in [this article](https://www.w3schools.com/html/html_id.asp). Further reading provided [this article](https://stackoverflow.com/questions/6028211/what-is-the-standard-naming-convention-for-html-css-ids-and-classes) in stackoverflow.

Throught all articles one imporant message is repeated - is to be consistent within the document. The choise of convention can be personal prefference or prefference of the employer or cooworkers. The consistency is the key. 

I corrected all ID to follow kebab-casing convention mentioned in [this article](https://courses.cs.washington.edu/courses/cse154/17au/styleguide/html-css/naming-conventions-html.html).

3. After the two above decisions have been implemented the script.js required to be re done in calculator form part of this file. The new event listeners will target the input fields directly, which would make JavaScript code easier to read and maintain, without having to look through multiple loops.

4. Validation on input

    - initial idea taken from [this page](https://html.form.guide/snippets/javascript-form-validation-using-regular-expression/), unfortunately it was validating any field, not the field with said id. I could not get it to work correctly. This code was written when the html structure of the page was different, therefore it reffers to id that no longer exists.
```
        document.getElementById("main-container").addEventListener("input", function(event){
        if(event.target.matches("#inputName")) {
            console.log(`${event.target.value}`)
            let inputName = event.target.value
            var AZRegex = /^[a-zA-Z.,'/ -/]*$/;
            var inputNameResult = AZRegex.test(inputName);
            if (inputNameResult == false) {
            console.log("function validating on input for input name field")
            return false;
            };
        } else if (event.target.matches("#inputDiet"))
        console.log(`${event.target.value}`)
        let inputName = event.target.value
        var AZRegex = /^[a-zA-Z.,'/ -/]*$/;
        var inputNameResult = AZRegex.test(inputName);
        if (inputNameResult == false) {
            console.log("function validating on input for input diet field")
            return false;
        };

        });
```
5. When validating contact form using bootstrap's classess to display error message, for some reason error message was showing under each field, even if only one field failed validation. Resolved problem by adding my-invisible class to each field and removing aria-describedby. This way the div would be invisible for screen readers, this would only apear after error occurs. Failing validation removes my-invisible class and adds aria-describedby. 

6. Problem with validating if the date is month ahead of today. 
    - I tried to convert both dates - today and target date to miliseconds from 1970 but the html input "targetDate" was not converting to miliseconds as it only displays date without time
    - I tired to change both dates to string of numbers without seperators, this was working fine, untill you try to compare the dates from the end and begginng of the following year. 
    - Different browsers will give me a different input on html date input field, so if I found solution to converting target Date it might not work on various browsers
    - I managed to find two different functionalities that was converting both dates to miliseconds from 1.01.1970. This enabled me to compare values of current date and target date.

7. Problem with varialbes current weight Stone and current weight stone help displaying as undefined. This was due to persistant typo wieght instead of weight in various parts of calculator.html and calculator.js. All typos found and corrected.

8. Problem with function showing and hiding cards depending on user's BMI didn't seem to work. The "my-invisible" class was applied to wrong div, assigned ID to correct div, which rectified the problem

9. After managed to calculate the date when the target weight can be acheved I had a date in miliseconds. After converting it into something resembling javascript date, I could not use getDate(), getMont() or getYear() as it was returning taht getDate() is not a function. I suspect that the result of the calculation was not actual javascript date, so I changed the result of calculation to a string and I got the date, month and year off the string.

10. Bug not allowing the user input more than 100 kg for current weight resolved by passing integer when comparing the value of current weight and target weight. Similar but respectively found in imperial measures - resolved by parseInt().

11. Waist line was displaying as undefined or NaN. The bug was generated by the fact that waist line input field in calculator.html had "name" attribute value as "name" instead of actual waist-cm or waist-inches. Replaced "name" with appropriate content and this resolved problem.

12. Results page - when viewing on dev tools a vertical line was apearing generated by the main container div that holds all the content of the page. After navigating in and out of this page - the vertical line disapeared. In the same time all cards were shifted to the right. Than the line apeared again when changed the screen width to larger size and than back to smaller and cards have shifted themselves to the middle. I wasn't sure what is generating this and tested on a small and large mobile. Investigated futher on dev tools and found that bootstrap's link to cover.css has been implementing a gradient on top of the body element. Cleared gradient with targeting by ID.

13. Massive problem with Nav bar. HTML copied from bootstrap examples and pasted to each page and it displayed diferently. I needed to analyse the padding, margins and general HTML structure of each page to unify the look of the nav bar. Further problem with visibility, resolved by adding fw-bold and the font chosen for heading. Unfortunately I had to compromize on green color that was previously in the Nav bar as the letters were not very clear against this white background. Opted for black for better user experience.

## Validation
1. Imperial measures validation
- add validation for those fields is so that one or both of the fields are filled.
- add validation to compare value stone + pounds with current weight stone + pounds
- stones input field 
    - I can't validate it if it is empty, as some people might choose to put pounds only (in US it customary not to use Stone, just pounds)
    - I'd rather not to validate maximum value as I hope the calculator to be inclusive
    - I'd rather nto to validate minimum value for the same reason
- pounds input field
    - I can't validate it if it is empty, as someone might have exact weight in Stone
    - I can't validate maximum value as 14 pounds (stone) as someone might choose to put their full weight in lbs instead of stone and lbs
- feet and inches for height
    - similarly as above I do not want to set maximum or minimum value


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
    Both of those points are accomodated by adding radio button in calculator form, to add target weight or target date.

3. As a returning user I want to be able to access the calculator from the main page.
    This is accomodated by nav bar that is on the home page. The user can interact with the questions to get to calculator link or go directly using nav bar.

4. As a user I want to know if the calculations are reliable. How did you come up with the numbers.
    This is accomodated by embeding various videos on keto. One of the videos explains exactly where the numbers come from.

5. As a user if I want to contact dietitian, I don't want to input all my data again.
    This is accomodated by creating a window and making javascript inject user's URL to the contact form. 


## Technologies used
- HTML
- CSS
- JavaScript
- Bootstrap 5
- Bootswatch


## Thanks to
1. Cover design used for index.html
Downloaded from Bootstrap examples. Authors Mark Otto, Jacob Thornton, and Bootstrap contributors. 
2. Webinar for javascript - Sean Young, 22/07/2021
Radio Buttons event listener and functions to make divs disapear, to display requested content in the form
code from [code pen](https://codepen.io/seanyoung247/pen/qBmbZQK), explained by Sean Young
3. Webinar for git hub
4. Unsplash for images
5. Youtube for embeded videos
6. Formspree for form dump
4. Brian and David for advice during hackaton on branches and pull requests
3. Mentor Felipe Souza


        