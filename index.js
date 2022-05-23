// Code your solution in this file!
const returnFirstTwoDrivers = function(driversArray) {
    let drivers = [...driversArray.slice(0, 2)];
    return drivers;
}
const returnLastTwoDrivers = function(driversArray){
    let drivers = [...driversArray.slice(driversArray.length - 2)];
    return drivers;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    return function (fare){
        return fare*int;
    }
}
const fareDoubler = function (fare){
    return createFareMultiplier(fare)(2);
}
const fareTripler = function (fare){
    return createFareMultiplier(fare)(3);
}
function selectDifferentDrivers(driversArray, another) {
    return another(driversArray);
}
