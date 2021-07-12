// Code your solution here
// function findMatching(drivers) {
//     drivers.filter(name => {
//         console.log(name)
//         return name
//     })
// }


function findMatching(drivers) {
    drivers.filter(object => {
        console.log(object)
        return object.name
    })
}

function fuzzyMatch(drivers, string){
    drivers.filter(object => {
        // return object.name.includes?(string)
    })
}

function matchName() {

}