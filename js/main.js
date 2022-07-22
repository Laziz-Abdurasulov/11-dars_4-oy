$(function(){
    let input = $('#city'),
    inpVal = input.val();
    
    $('.select').on('change', function(){
        input.val(inpVal + $(this).val());
    });
});

$('#cityB').on('click', function(){
    $('#tablo').css('display','flex');
    
    var city=$('#city').val();
    
    var apiURI2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d93601caf3e76402b1cfe02d79dfa2be`;
    console.log("success getWeather2");
    console.log(apiURI2);
    $.ajax({
        url: apiURI2,
        dataType: "jsonp",
        type: "GET",
        async: "true",
        timeout : 500,
        success : function(data) {
            console.log("Success");
        },
        
        done : function(e) {
            console.log("DONE");
        },  
    }).done(dataHandler3);
    $('#cityC').text(city);	 
    function dataHandler3(data) {
        dataString = JSON.stringify(data);
        var now = new Date();
        let h = now.getHours();
        var num = 8-(Math.floor(h/3));
        
        document.getElementById("demo6").innerHTML = data.list[num+3].dt_txt;
        document.getElementById("demo4").innerHTML = "Max." + " " + Math.floor((data.list[num+3].main["temp"])-273,15)+"°C";
        document.getElementById("demo7").innerHTML = data.list[num].dt_txt;
        document.getElementById("demo5").innerHTML = "Мin." +  " " + Math.floor((data.list[num].main["temp"])-273,15)+"°C";
        var imgURL = "https://openweathermap.org/img/w/" + data.list[num+3].weather[0].icon + ".png";
        $("#tmp4").attr("src", imgURL);  
    }
    
});

function showDateTime() {
    var d = new Date();
    var n1, n2, n3, n4;
    var weekday = new Array(7);
    weekday[0] = "Воскресенье";
    weekday[1] = "Понедельник";
    weekday[2] = "Вторник";
    weekday[3] = "Среда";
    weekday[4] = "Четверг";
    weekday[5] = "Пятница";
    weekday[6] = "Суббота";
    
    if(d.getDay() >= 3){
        n1 = weekday[(d.getDay()+1)];
        n2 = weekday[(d.getDay()+2)];
        n3 = weekday[(d.getDay()+3)];
        n4 = weekday[7-(d.getDay()+4)];} if(d.getDay() >= 4)
        {
            n1 = weekday[(d.getDay()+1)];
            n2 = weekday[(d.getDay()+2)];
            n3 = weekday[7-(d.getDay()+3)];
            n4 = weekday[9-(d.getDay()+4)];} if(d.getDay() >= 5)
            {
                n1 = weekday[(d.getDay()+1)];
                n2 = weekday[7-(d.getDay()+2)];
                n3 = weekday[9-(d.getDay()+3)];
                n4 = weekday[11-(d.getDay()+4)];} if(d.getDay() >= 6)
                {
                    n1 = weekday[7-(d.getDay()+1)];
                    n2 = weekday[9-(d.getDay()+2)];
                    n3 = weekday[11-(d.getDay()+3)];
                    n4 = weekday[13-(d.getDay()+4)];}  if(d.getDay() < 3) 
                    {
                        n1 = weekday[(d.getDay()+1)];
                        n2 = weekday[(d.getDay()+2)];
                        n3 = weekday[(d.getDay()+3)];
                        n4 = weekday[(d.getDay()+4)];
                        
                    }
                    document.getElementById("day1").innerHTML = n1;
                    document.getElementById("day2").innerHTML = n2;
                    document.getElementById("day3").innerHTML = n3;
                    document.getElementById("day4").innerHTML = n4;								
                }
                showDateTime(); 