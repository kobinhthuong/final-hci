// function deleteUser(this) {
//     var option = confirm("Do you want to delete this user?");
//     if (option == true) {
//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("user-t").deleteRow(i);
//     }
// }

$(document).ready(function(){
    $("#exampleModal").hide();
});

// $(function() {
//     $(".deleteRow").click(function(){
//         var $row = $(this).parents('tr');
//         $( "#exampleModal" ).dialog({
//             buttons: {
//                 "Yes": function() {
//                     $row.remove();
//                     $( this ).dialog( "close" );
//                 },
//                 Cancel: function() {
//                     $( this ).dialog( "close" );
//                 }
//             }
//         });     
// });
// });

$(function() {
    $(".deleteRow").click(function(){
        $('#delete').click(function(){
            // var $row = $(this).parents('tr');
            // $row.remove;
            $('#delete').remove;
        });     
});
});