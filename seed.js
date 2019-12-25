const mongoose = require("mongoose");
const Assignment = require("./models/assignmentsModel");

let data = [
    {
        branch: 'comps',
        year: 2,
        division: 'A',
        title: 'Maths 3 tutorial 1'
    },
    
    {
        branch: "comps",
        year: 2,
        division: "A",
        title: "ECCF Assignment 1"
    },
    
    {
        branch: "comps",
        year: 2,
        division: "B",
        title: "DLDA Assignment 6"
    },
    
    {
        branch: "comps",
        year: 2,
        division: "C",
        title: "DS Assignment 5"
    }, 
    
    {
        branch: "electronics",
        year: 2,
        division: "A",
        title: "sample"
    },
    
    {
        branch: "extc",
        year: 2,
        division: "B",
        title: "sample"
    }
];

function seedDB() {
    Assignment.remove({}, function(err) {
        if(err) {
            console.log(err);
        } 
    });
    console.log("Removed Assignments");
    
    data.forEach(function(seed) {
        Assignment.create(seed, function(err,assignment) {
            if(err) {
                console.log(err);
            } else {
                console.log("Assignment Added");
            }
        });
    });
}

module.exports = seedDB;