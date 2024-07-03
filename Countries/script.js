const countryContainer = document.querySelector(".country-container")
const filterByRegion = document.querySelector(".filter-by-region")
const searchInput = document.querySelector(".search-content input")
const changeTheme = document.querySelector(".change-theme")
let allCountriesData;


fetch("https://restcountries.com/v3.1/all")
.then((res)=>{
    return res.json()
}).then((data)=>{
    countries(data)
    allCountriesData =data

})

filterByRegion.addEventListener("change",(e)=>{
    fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
    .then((res)=>res.json())
    .then(countries)
})

function countries(data){
    countryContainer.innerHTML = ""
data.forEach((country)=>{      
    const countryContainer = document.querySelector(".country-container")
    const countryContent = document.createElement("a")
    countryContent.classList.add("country-content")
    countryContent.href = `/country.html?name=${country.name.common}`

    countryContent.innerHTML =`<img src="${country.flags.svg}" alt="flag">
                                     <div class="country-data">
                                      <h4 class="title">${country.name.common}</h4>
                                      <p><b>Population: </b>${country.population.toLocaleString("en-In")}</p>
                                      <p><b>Resion: </b>${country.region}</p>
                                      <p><b>Capital: </b>${country.capital}</p>
                                    </div>`
    countryContainer.append(countryContent);
})
}

searchInput.addEventListener("input",(e)=>{
    const filteredCountries = allCountriesData.filter((country)=>
     country.name.common.toLowerCase().includes(e.target.value.toLowerCase())  )
    countries(filteredCountries)
})

changeTheme.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
})

