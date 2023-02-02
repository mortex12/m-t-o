let lat;
let long;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } 
}

function showPosition(position) {
    lat= position.coords.latitude;
    long= position.coords.longitude;
    btnsearch();
}
function btnsearch(){ 
            function del(){
                document.getElementById('card').innerHTML=""
                document.getElementById('image').innerHTML=""
            }
            del();
        
            
            let input = document.getElementById('searchBar').value
            input = input.toLowerCase()
            let urlModified ;
            if (input=="") {
                urlModified = 'https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+long+'&units=metric&lang=fr&appid=9d63106b0003583259d7d973d5addfa9';
            } else {
                urlModified = 'https://api.openweathermap.org/data/2.5/forecast?q='+input+'&units=metric&lang=fr&appid=9d63106b0003583259d7d973d5addfa9';
            } 
            
            
        fetch(urlModified)
        .then(function(response) {
            return response.json();
        
        })
        .then(function(json) {
        
            let ville=json.city.name
            let date
            let temperature
            let prevision
            let icone
            let country=json.city.country
            let vent
            let humidite
            let densiter
        
            for(i=0;i<json.list.length;i++){
                
                date=json.list[i].dt_txt
                temperature=json.list[i].main.temp
                prevision=json.list[i].weather[0].description
                icone='http://openweathermap.org/img/wn/'+json.list[i].weather[0].icon+'@2x.png';
                vent=json.list[i].wind.speed
                humidite=json.list[i].main.humidity
                densiter=json.list[i].clouds.all
        
                let div1=document.createElement('div')
                let img=document.createElement('img')
                let div=document.createElement('div')
                let h5=document.createElement('h5')
                let ul=document.createElement('ul')
                let li1=document.createElement('li')
                let li2=document.createElement('li')
                let li3=document.createElement('li')
                let li4=document.createElement('li')
                let li5=document.createElement('li')
                let li6=document.createElement('li')
        
                let dates=document.createTextNode(date)
                let temperatures=document.createTextNode(temperature+'°C')
                let previsions=document.createTextNode(prevision)
                let nation=document.createTextNode(country)
                let speed=document.createTextNode('vitesse du vent: '+vent)
                let humi=document.createTextNode('Humidité: '+humidite)
                let nuage=document.createTextNode('Densité des nuages: '+densiter)
        
                div1.setAttribute('class','card  m-1')
                div1.setAttribute('style','width: 18rem')
                img.setAttribute('class','card-img-top')
                img.setAttribute('src',icone)
                div.setAttribute('class','card-body')
                h5.setAttribute('class','card-title')
                ul.setAttribute('class','list-group list-group-flush')
                li1.setAttribute('class','list-group-item')
                li2.setAttribute('class','list-group-item')
                li3.setAttribute('class','list-group-item')
                li4.setAttribute('class','list-group-item')
                li5.setAttribute('class','list-group-item')
                li6.setAttribute('class','list-group-item')
        
                h5.appendChild(dates)
                li1.appendChild(temperatures)
                li2.appendChild(previsions)
                li3.appendChild(nation)
                li4.appendChild(speed)
                li5.appendChild(humi)
                li6.appendChild(nuage)
        
                div1.appendChild(img)
                div1.appendChild(div)
                div1.appendChild(ul)
                div.appendChild(h5)
                ul.appendChild(li1)
                ul.appendChild(li2)
                ul.appendChild(li3)
                ul.appendChild(li4)
                ul.appendChild(li5)
                ul.appendChild(li6)
        
        
                document.getElementById('card').appendChild(div1)
        
            }
        
        
            
        
        
            let imag=document.createElement('img')
            imag.setAttribute('src',icone)
            imag.setAttribute('class','rounded mx-auto d-block m-auto w-')
            document.getElementById('image').appendChild(imag)
            
            document.getElementById('ville').innerHTML=ville
            document.getElementById('temperature').innerHTML=temperature+"°C"
            document.getElementById('prevision').innerHTML=prevision
        
            
        });
        }

document.getElementById('searchBar').addEventListener('keydown',function(event) { if(event.key === 'Enter'){ btnsearch()}})



