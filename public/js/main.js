
const cityName= document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name= document.getElementById('city_name');
const temp_status= document.getElementById('temp_status');
const temp_real_val= document.getElementById('temp_real_val');

const datahide= document.querySelector('.middle_layer');


const getInfo=async (event)=>{
    event.preventDefault();
    let cityval=cityName.value;
    if(cityval === ""){
        city_name.innerText=`Please write name before you search`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=f2a22d88aaad250963f008030d7a4c20`;
            const response= await fetch(url);
            const data= await response.json();
            const arr =[data];


            city_name.innerText=`${arr[0].name} ${arr[0].sys.country}`;
            temp_real_val.innerText= arr[0].main.temp;
            const tempMood= arr[0].weather[0].main;


            if (tempMood == "Clear") { 
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>"; 
            } else if (tempMood =="Clouds") { 
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood =="Rain") {  
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style= color: #a4b0be;'></i>";
            }else{
                temp_status.innerHTML ="<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
            datahide.classList.remove('data_hide');
        }
        catch{
            city_name.innerText=`Please enter cityname properly`;
            datahide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click',getInfo);