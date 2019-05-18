$('form').on('submit', function(event){
    event.preventDefault();
    
})

axios.get(" http://statenweb.mockable.io/conversions/")
    .then(function(response){
        console.log(response.data);
        
        $('#first-btn').click(function(){
            var input1 = $("#inches").val();
            var centimetersInInch = response.data.centimetersInInch;
            if(input1 != null)
            {
                return $('#result').append('<p> Conversion to centimeters is: ' + input1 * centimetersInInch + '</p>');
            }
            
        });
        $('#sec-btn').click(function(){
            var input2 = $("#centimeters").val();
            var inchesInCm = response.data.inchesInCm;
                if(input2 != null)
                {
                    return $('#result').append('<p> Conversion to inches is: ' + input2 * inchesInCm + '</p>');
                }
            
        });
    })

/*$(document).ready(function(){
    axios.get(" http://statenweb.mockable.io/conversions/")
    .then(function(response){
    console.log(response);
    $('.btn').click(function(){
    
        var input1 = $("#inches").val();
        var ratesHTML = response.data.map(function(rate){
            return $('#result').append('<p> Conversion to centimeters is: ' + input1 * rate.InchesInCm + '</p>');
        });
    });
    
    //var input2 = $("#centimeters").val();

    })

})*/