function ButtonSearch() {
    const search = document.getElementById('search-text').value
    var appid = `http://api.weatherapi.com/v1/current.json?key=b634ccb0a4ac47f58f8125924230703&q=${search}&aqi=no`;
    fetch(appid).then(
    function (response) {
        if(response.status != 200 ) {
            console.log("404! sorry" + response.status)
            return
        }
        response.json().then(function(data) {
            console.log(data.location)
            var location = data.location
                provin = location.region
                country = location.country
                current = data.current
                update = current.last_updated
                temp = current.temp_c
                condition = current.condition
                icon = condition.icon
                textcondition = condition.text
            
            console.log(location,provin,country);
            console.log(current);
            document.getElementById("output-weather").insertAdjacentHTML('beforeend',
            `            
            <h3>${provin,country}</h3>
            <h1>${update,temp}c</h1>
            <img src="${icon}">
            <h3 style="font-size:120px; ">${textcondition}</h3>`)

        })
    }
)
}