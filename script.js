let main

document.addEventListener("DOMContentLoaded", () => {
//There must be a div with the class name main in your index.html file. All components will be appended to this div
  main = document.querySelector(".main")
  
  //Replace the url in the fetch with the url your google docs csv url
fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vS9C6UGqjFpIk7To1NwB-zj7OOVCQrpmrt1LN22BYMiVKXk9-pEQgYf-cqMP_mH9L703j8sy5WLbjZI/pub?gid=0&single=true&output=csv")
    .then(response => response.text())
    .then(csvData => {
      Papa.parse(csvData, {
        header: true, // Treat the first row as column headers
        skipEmptyLines: true, // Ignore empty rows
        complete: function(results) {
          results.data.forEach(row => {
            displayComponent(row);
          });
        }
      });
    });
});

function displayComponent(row){
  console.log(row)
  let component = document.createElement("div")
  component.classList.add("foodcomponent")

let name=document.createElement("p")
name.textContent=row.DishName
name.classList.add("name")

let country=document.createElement("p")
country.textContent=row.OriginCountry
country.classList.add("country")

let desc=document.createElement("p")
desc.textContent=row.DishDescription
desc.classList.add("description")

let flavour=document.createElement("p")
flavour.textContent=row.Flavour
flavour.classList.add("flavour")

let dietary=document.createElement("p")
dietary.textContent=row.Dietary
dietary.classList.add("dietary")

let temperature=document.createElement("p")
temperature.textContent=row.Temperature
temperature.classList.add("temperature")

// let image=document.createElement("img")
// image.src=row.Image
// image.classList.add("image")

component.append(name)
// component.append(image)
component.append(country)
component.append(desc)
component.append(flavour)
component.append(dietary)
component.append(temperature)

  main.append(component)
}















// let allData = []; // Global variable to store fetched data

// document.addEventListener("DOMContentLoaded", () => {
//     fetchGoogleSheet();
// });

// function fetchGoogleSheet() {
//     const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS9C6UGqjFpIk7To1NwB-zj7OOVCQrpmrt1LN22BYMiVKXk9-pEQgYf-cqMP_mH9L703j8sy5WLbjZI/pub?output=csv"; // Replace with correct CSV link
    
//     fetch(sheetURL)
//         .then(response => response.text())
//         .then(csvData => {
//             Papa.parse(csvData, {
//                 header: true,
//                 skipEmptyLines: true,
//                 complete: function(results) {
//                     allData = results.data; // Store all data globally
//                     populateData(allData);
//                     populateFilters(allData);
//                 }
//             });
//         })
//         .catch(error => console.error("Error fetching data:", error));
// }

// function populateData(data) {
//     const foodList = document.getElementById("foodList");
//     foodList.innerHTML = ""; // Clear list before adding new items

//     data.forEach(row => {
//         let item = document.createElement("div");
//         item.classList.add("food-item");
//         item.innerHTML = `
//             <h3>${row["Name of Dish"]} (${row["Country of origin"]})</h3>
//             <p>${row["Dish Description"]}</p>
//             <p>Temperature: ${row["Temperature"]}</p>
//             <p>Flavor: ${row["Flavor"]}</p>
//             <p>Dietary: ${row["Dietary Restrictions"]}</p>
//         `;
//         foodList.appendChild(item);
//     });
// }

// function populateFilters(data) {
//     const countryFilter = document.getElementById("countryFilter");
//     const temperatureFilter = document.getElementById("temperatureFilter");
//     const flavorFilter = document.getElementById("flavorFilter");

//     // Reset filters
//     countryFilter.innerHTML = '<option value="">Choose Country</option>';
//     temperatureFilter.innerHTML = '<option value="">Choose Temperature</option>';
//     flavorFilter.innerHTML = '<option value="">Choose Flavor</option>';

//     let countries = new Set();
//     let temperatures = new Set();
//     let flavors = new Set();

//     data.forEach(row => {
//         if (row["Country of origin"]) countries.add(row["Country of origin"]);
//         if (row["Temperature"]) temperatures.add(row["Temperature"]);
//         if (row["Flavor"]) flavors.add(row["Flavor"]);
//     });

//     populateFilterOptions(countryFilter, countries);
//     populateFilterOptions(temperatureFilter, temperatures);
//     populateFilterOptions(flavorFilter, flavors);

//     countryFilter.addEventListener("change", filterData);
//     temperatureFilter.addEventListener("change", filterData);
//     flavorFilter.addEventListener("change", filterData);
// }

// function populateFilterOptions(selectElement, dataSet) {
//     dataSet.forEach(value => {
//         let option = document.createElement("option");
//         option.value = value;
//         option.textContent = value;
//         selectElement.appendChild(option);
//     });
// }

// function filterData() {
//     let selectedCountry = document.getElementById("countryFilter").value;
//     let selectedTemperature = document.getElementById("temperatureFilter").value;
//     let selectedFlavor = document.getElementById("flavorFilter").value;

//     let filteredData = allData.filter(row => {
//         return (selectedCountry === "" || row["Country of origin"] === selectedCountry) &&
//                (selectedTemperature === "" || row["Temperature"] === selectedTemperature) &&
//                (selectedFlavor === "" || row["Flavor"] === selectedFlavor);
//     });

//     populateData(filteredData); // Update list with filtered results
// }
