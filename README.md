The Social Post app project was created to learn how to handle form input and use the .map method in React.

FUNCTIONALITY: Allow the user to add or delete thought entries to the e-journal.


Contributions: Logan A.

SOCIAL POSTS FILE: The social posts file is what displays first on the load of the application. Here the user can see the name of the application, a button to add new thoughts,
and pre-loaded entries. Within the file also sits the PostForm and PostInList components to handle the data. The data for the pre-loaded posts are hard coded and stored with a 
hook variable. In the return we can map through the array of posts. The .map method in this example allows us to create a PostInList component for each post
in the array.

POST IN LIST FILE:  In the SocialPosts File we pass a prop of post to the PostInList file. Now we can break down how we want to display the post since the data now lives in our
file. We display the data in JSX tags (still HTML tags ) and apply styles to them using CSS like normal.

POST FORM FILE: The PostForm file, as you could have guessed it, holds the form. The forms function is to take the input from the user (title & thought) and add it the array so
that a post can be created and displayed. The first thing we need to do to collect the input data is create hooks to hold it in a variable. Next for the input fields we need to
add value and onChange attributes. The value attribute needs to hold the varible that corresponds with the input. (Title input needs the value of the title variable ). Next we set
the onChange to update the varible once the input gets data from the user in real time. 

In order to submit the form we need to set up a function of onSubmit. The onSubmit function is passed as a prop from SocialPost. The onSubmit needs a parameter of a post so that
it has something to submit later. The next step is setting up a function that the onSubmit can handle (handleFromSubmit). In the handleFromSubmit I created newPost variable with
the type of Post. That allows me to set the title and thoughts to the values of the matching hook variables. In the same handleFormSubmit function I call the onSubmit function and
give it the newPost variable.

Back in the PostInList file we make handlePostFormSubmit function that has a parameter of post. In this function we can add the post to the array using the spread opperator
because React has immutable arrays. Now we pass this function to the onSubmit prop. 

EXTRAS: The submission form for a new post is set up as a Modal. I set a hook with a variable of hidden with a useState of true. I then set a ternary if statement to only display
the form if the hidden is set to false. The New Thought button uses the setHidden function to change the variable to false and the addPost button changes the varible back to true.
