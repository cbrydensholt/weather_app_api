

        $(document).ready(function () { //sørger for at siden er loaded ordentligt før der kan ske noget
        $("#submitWeather").click(function () { //når vi klikker på vores knap hvis id er submitWeather

            var city = $("#city").val(); //en variabel af vores input i vores city input.
            console.log(city)
            if(city != ""){ //hvis vores input i city er tomt.


                $.ajax({ //bruger ajax til at hente data fra anden hjemmeside
                    //den præcise opsætning af URL findes på hjemmesiden.
                    url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&APPID=257318c4e56a8a96dc8b3fdf914211ab", //du opretter en API på den hjemmeside du bruger.
                    TYPE: "GET",
                    dataType: "jsonp",
                    success: function(data){//hvad skal vi gøre når vi har fået fat i vores data? Data er dog en array som vores information indeholdes i.
                        console.log(data)
                        var widget = show(data);

                        $("#show").html(widget) //vi bruger dette til at vise vores widget (som er vores data variabel)


                    }

                })


            } else{
                alert("Error, enter a city please")
            }
        })

            function show(data){
            return "<h2><strong>City</strong>: "+ data.name +"</h2>" +
                "<h2><strong>Weather</strong>: "+ data.weather[0].main  +"</h2>" +
                "<h2><strong>Weather Description</strong>: "+ data.weather[0].description  +"</h2>" +
                "<h2><strong>Temperature</strong>: "+ data.main.temp  +"</h2>" +
                "<h2><strong>Wind</strong>: "+ data.wind.speed  +"</h2>" +
                "<h2><strong>Direction</strong>: "+ data.cod  +"</h2>" +
                "<h2><strong>Latitude</strong>: "+ data.coord.lat + "</h2>" +
                "<h2><strong>Longtitude</strong>: "+ data.coord.lon + "</h2>"








            }


})