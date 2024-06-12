
// Declare an empty array;
let emptyArr = []
console.log("Empty array:"+emptyArr)
// Declare an array with more than 5 number of elements
let filledArr = Array(6).fill(0)
console.log("Array with more than 5 elements:" + filledArr)

// Find the length of your array
let arr = ['first','second','third','forth','fifth','sixth']
// Get the first item, the middle item and the last item of the array
console.log(arr[0])
console.log(arr[(arr.length - 0 )/ 2])
console.log(arr[arr.length-1])

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [['arrElem1','arrElem2'],1,2.2,"text",{dict:1}]
console.log(mixedDataTypes)
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// Print the array using console.log()
// Print the number of companies in the array
// Print the first company, middle and last company
// Print out each company
let itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log("itCompanies:"+ itCompanies)
console.log("Number of companies:"+itCompanies.length)
console.log(itCompanies[0])
console.log(itCompanies[Math.floor((itCompanies.length - 0) /2)])
console.log(itCompanies[itCompanies.length -1])
// Change each company name to uppercase one by one and print them out
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
itCompanies.forEach((company)   => console.log(company.toUpperCase()))
for ( let i =0 ; i< itCompanies.length; i++){
    console.log("index "+ i+":"+ itCompanies[i])
}

console.log(itCompanies.join(", "))


// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
function findCompany(companyName){
    if (itCompanies.includes(companyName)) {
        return companyName;
    } else {
        return "Company not found"
    }
}
console.log(findCompany("Google"))
console.log(findCompany("Didi"))
// Filter out companies which have more than one 'o' without the filter method
function countOccurrences(str,char) {
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i].toLowerCase() ==char.toLowerCase()){
            count++
        }
    }
    return count
}
let filtered = []
for(let i =0; i< itCompanies.length; i++){
    if (countOccurrences(itCompanies[i],'o') <=1){
        filtered.push(itCompanies[i])
    }
}
console.log(filtered)

// Sort the array using sort() method
itCompanies.sort();
console.log(itCompanies)
// Reverse the array using reverse() method
itCompanies.reverse();
console.log(itCompanies)
// Slice out the first 3 companies from the array
console.log(itCompanies.slice(3))

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3))
// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(Math.floor((itCompanies.length)/2),Math.floor((itCompanies.length)/2)+1))
// Remove the first IT company from the array
console.log(itCompanies)
itCompanies.shift()
console.log(itCompanies)
// Remove the middle IT company or companies from the array
itCompanies.splice(Math.floor(itCompanies.length/2),1)
console.log(itCompanies)
// Remove the last IT company from the array
itCompanies.pop()
console.log(itCompanies)
// Remove all IT companies
itCompanies = []
console.log(itCompanies)