$(document).ready(function(){
    getQ()
})

$(".hint").hide()
 $(".answer").hide()
 $(".question").show()
 let i =0
 
function getQ(data) {
    
    $.ajax({
        type: 'GET',
        url: '/newCard',
        success: function(data) {
            console.log(data)
            if (i <= data.length) {
                i++
            }
            if (i >= data.length) {
                i=0
            } 
            $(".question").html(data[i].question)
            $(".hint").html(data[i].hint)   
            $(".answer").html(data[i].answer)
        },
        
        
    })
    
}

            
           
    
    $("#answerOnClick").click(function () {
            $(".cardfront").slideUp(-100)
            $(".cardback").slideDown(300)
            $(".answer").show()
        })
        
        
        
   
$('#addNew').click(function(){
    $('#addNewCard').show()
})

$("").click(function(){
    $(".cardfront").hide()
    $(".cardback").show()
})

$("#next").click(function(){
    getQ()
})

$("#hint").click(function(){
    $(".hint").show()
})

$("#flipback").click(function(){
    $(".cardfront").show()
    $(".cardback").hide()
})