#Basic Backbone
I have provided you with the skeleton for a basic backbone app. You will be using
cross-domain requests so that you don't have to setup your own server. 
This is a little unusual, so I have taken care of this for you.
I have also provided the router (and names for your collection and model classes).

##Instructions:
1. Write a collection that gets its data from 'http://www.jengascript.org/data/'
2. Write a view (and Template) that displays basic info from all the models in this collection with links to an individual view
3. Write this individual view that displays a form for updating an individual model
3. Make that form update the correct property on the correct model when an input in the form is changed.
4. Add a save button that saves the correct individual model (with the properties properly changes per step 2).
5. This save will fail every time. Handle the error with a message - you MAY NOT use alert().
6. Make this error message dismissable in some way.
7. BONUS: Add some CSS to make it look not horrible.
