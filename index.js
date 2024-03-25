// code your solution here
const records = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

const superbowlWin = records.find((record) => {
    return record.result == "W"
})

console.log(superbowlWin);