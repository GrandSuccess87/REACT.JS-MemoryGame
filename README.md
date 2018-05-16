# REACT.JS-MemoryGame
A memory game app that uses ReactJS. 
This project was bootstrapped with Create React App (https://github.com/facebook/create-react-app)

Application's UI in components, component state is managed, and responds to user events.

Components
Card: The card component is where the puppy images are displayed.
Score: The score component is where the score and updated win/lose status is displayed. 
Wrapper: The Wrapper component wraps the card component.

Below you will find some information on how to perform common tasks.
You can find the most recent version of this guide here [https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md]. 

This application renders different images to the screen. Each image listens for click events.

This application keeps track of the user's score. The user's score should is incremented when clicking an image for the first time. The user's score is reset to 0 if you click the same image more than once. Every time an image is clicked, the images rendered to the page shuffle themselves in a random order.

Once the user's score is reset after an incorrect guess, the game restarts.
