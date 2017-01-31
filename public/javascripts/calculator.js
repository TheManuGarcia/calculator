/**
 * Created by manugarciav2 on 10/8/15.
 */
$(document).ready(function(){
    $('#addition, #subtraction, #multiplication, #division').on('click', function(){
       $('#addition, #subtraction, #multiplication, #division').removeClass('selected');
        $(this).addClass('selected');


    });





    //Display Result (use .html instead of append, otherwise it will keep appending
// next to the result.

    $('.equals').on('click', function(){

        var calculateData = {'firstNumber': $('#firstNumber').val(),
                            'secondNumber': $('#secondNumber').val(),
                            'operator': $('.selected').attr('id')};
    console.log(calculateData);

        $.ajax({
            type:'POST',
            url: '/calculate',
            data: calculateData,
            success: function(response){
                $('.finalResult').html(response);

            }


        })




        });


});



//
//event.preventDefault();
//var formData = $("#assignmentsForm").serialize();
//$.ajax({
//    type: "POST",
//    url: "/assignments/add",
//    data: formData,
//    success: function(response) {
//        console.log('VICTORY!');
//        //getAssignments();
//    }
//});













//USELESS //

//$('#firstNumber').keyup(function(){
//    alert($('#firstNumber').val());


//var firstNumberFieldValue = $('#firstNumber').val();
////$('#firstNumber').val('firstNumberFieldValue');
//
//var secondNumberFieldValue = $('#secondNumber').val();
//$('#secondNumber').val('secondNumberFieldValue');


