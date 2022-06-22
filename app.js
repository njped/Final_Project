// Hard Code the Comment "Trying to decide a career path? Programming is the move. Change my mind"
// Make sure to have the users name above the comment in a smaller font
// Make a form with a display name and comment area for user to but info in
// Have a submit button next to it
// Position absolute the form for submitting a comment
// Prepend comments and display name
// Make sure to have the comment be the same format as the hard coded format
// When user submits comment make sure to have an edit and a delete button for each specific comment
// When user hits delete do this.remove()
// When user hits edit grab what is inside the comment and let the user edit their input
// Make sure to have delete and edit be on the same line as the users name

const container = $('#userCommentContainer');
const userName = $('.createName');
const userComment = $('.createComment');
const submitName = $('#submitName');

// When submitName is submitted
submitName.click(createContainer);

function createContainer() {
        // put data inside of the container div
        container.show();
        // create <div class = "commentContainer">
        const commentContainer = $(`<div class = "commentContainer"></div>`)
        // append this into commentContainer-->
        /* <h3 class = "userName">`${userName}`</h3> <span class = 'edit'>Edit</span> <span class = 'delete'>Delete</span>
            <h1 class = "userComment">`${userComment}` </h1>
            <form class = "editComment">
                <input type = 'text' value = `${userComment}`>
                <button type = "submit" class = "submitEdit">Submit</button>
            </form>
            $('editComment').hide()*/
        commentContainer.append(`
            <h3 id = "userName">${userName.val()}</h3>
            <nav id = "nav">
            <span class = 'edit'>Edit </span> <span class = 'deleteContainer'> Delete</span>
            </nav>
            <h1 class = "userComment">${userComment.val()} </h1>
            <form class = "editComment">
                <input class ="editText "type = 'text' value = ${userComment.val()}>
                <button type = "submit" class = "submitEdit">Submit</button>
            </form>
    `);
    
        let editComment = $('.editComment');
        // prepend commentContainer into container
        container.prepend(commentContainer);
    
        // When the edit class is selected ( edit.click )
        const edit =  $('.edit');
        edit.click(function () {
            const form = $(this).parent().next().next();
            form.show();
            const currentValue = $(this).parent().next().text();
            const editInput = $(this).parent().next().next().children() [0];
            editInput.value = currentValue;

        });
        const submitValue = $('.submitEdit');
        submitValue.click(function (e) {
            e.preventDefault();
            const newValue = $(this).siblings() [0].value;
            // go to my h1
            const currentComment = $(this).parent().prev() [0];
            // update h1 value with newValue
            currentComment.innerText = newValue;
            // hide editComment form
            const hideForm = $(this).parent().hide();
            
        });
            // toggle editComment
            // when user submits change userComment.val() ( userComment = $(this).val )
            
            // userComment = userEdit.val();
            // toggle editComment
            // editComment.toggle();
        
    
        // When the delete class is selected ( delete.click )
        const deleteContainer =  $('.deleteContainer');
        deleteContainer.on('click', commentContainer, function () {
            $(this).closest(commentContainer).remove();
        })
    
    
    }
// Problems to fix
    // when clicking submit
        // does not clear the name and the textbox after you click submit
    // hide edit textbox
        // doesn't hide the text box
    // edit text box doesn't get the value of userComment
    // edit does not give the value to userComment
    // delete a specific container
        // only deletes the word "delete"

    // CSS positioning of created container
        // commentContainer is under the mainForm
        // edit and delete at the far right
        // Saved text should be under the user name
        // edit text box should be under the previously saved text
        // edit text box width to fit inside of the container
