console.log('js sourced');

$(document).ready(start);
//configuring request
function start(){
    //event listeners
    $('#addNewGift').on('click', addNewGift);
    // canSantaFly();
} //end start function

function addNewGift() {
    console.log('adding new gift');
    let newGift = $('#giftName').val();
    console.log('adding new gift', newGift);

    $.ajax({
        method: 'POST',
        url: '/gifts',
        data: { newGiftProperty: newGift},//expects an object 
        success: function(response){
            console.log('added new gift', response);   
        },//end ajax

        error: function(response){
            console.log('error adding gift', response);
            
        }//end error
     });
    
    //calling input and getting the input off of that value

}//end add gift function 

function canSantaFly(){
    $.ajax({
        method: 'GET',
        url: '/santa',
        // request went to the server...
        success: function(response){
            //res.send becomes response 
            console.log('get /santa response', response);
            getGifts();
        }//end success function 
    }) //end ajax method
}//end santa can fly function 

function getGifts(){
    $.ajax({
        method: 'GET',
        url: '/gifts',
        // request went to the server...
        success: function(response){
            //res.send becomes response 
            console.log('get /gifts response', response);  
        }//end success function 
    }) //end ajax method
}//end get gifts function 
