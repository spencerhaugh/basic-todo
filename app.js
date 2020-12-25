$(() => {

const doneTask = () => {
        // On click, changes ID to completed id, moves/appends to complete column, changes button text
    $('button.markComplete').on('click', (event) => {
        $(event.currentTarget).attr('class', 'completed').text("Remove");
        $(event.target).parent().attr('class','completed');
        $(event.target).parent().appendTo('#completed');

        removeTask();
    });
    
};

// on completed button click:
const removeTask = () => {
    //remove div from the complete list
    $('button.completed').on('click', (event) => {
        console.log(event.currentTarget)
        // console.log(event.target)
        $(event.currentTarget).attr('class', 'none');
        $(event.target).parent().attr('class', 'none');
        // $(event.currentTarget).attr('class', 'none');
    });
}

// on click:

        $('#submit').on('click', (event) => { 
        const value = $('#input-box').val();

        const $listItem = $('<div>').attr('class', 'to-do').text(value);
        const $button = $('<button>').attr('class', 'markComplete').text("Mark Complete").appendTo($listItem);
        $('#to-do-list').append($listItem);
        

        $('#input-box').val(''); 
        $(event.currentTarget).trigger('reset');
        event.preventDefault();

        doneTask();
        

    });




})