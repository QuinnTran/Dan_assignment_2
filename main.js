function myFunction(obj) {
    var showContent = obj.parentNode.getElementsByTagName("div")[0];
    if (showContent.style.display == "none")
        showContent.style.display = "";
    else
        showContent.style.display = "none";
}

// alert('working!')
$('.button').hover(
    //mouse enter
    function () {
        // $('.popup').css('opacity', '1');
        $id = $(this).attr('data-id');

        //A variable for an individial movie 
        //[] = a list of sth
        $teacherId = data[$id];
        // using '.' is only get name out of movie
        $teacher = $teacherId.teacher;
        $availability = $teacherId.availability;

        $('.teacher').text($teacher)
        $('.availability').text($availability)
    },
    //mouse exits
    function () {
        $('.teacher').text('');
        $('.availability').text('');
        // $('.popup').css('opacity', '0');
    }
);

// // when i click on the button, change the text inside the popup to the movie 
$('.button').click(function () {
    // 
});
