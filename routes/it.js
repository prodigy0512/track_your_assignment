const express    = require("express"),
      router     = express.Router(),
      Assignment = require("../models/assignmentsModel"); 

//=================================
//  ROUTES FOR SELECTING DIVISON 
//=================================
router.get("/it/2", (req,res) => {
    let info = {
        branch: "Information Technology",
        year: 2,
        baseUrl: "it"
    };
    res.render("select_division", {info: info}); 
});

router.get("/it/3", (req,res) => {
    let info = {
        branch: "Information Technology",
        year: 3,
        baseUrl: "it"
    };
    res.render("select_division", {info: info}); 
});

router.get("/it/4", (req,res) => {
    let info = {
        branch: "Information Technology",
        year: 4,
        baseUrl: "it"
    };
    res.render("select_division", {info: info}); 
});

//===================================
//  ROUTES FOR SHOWING ASSIGNMENTS
//===================================
router.get("/it/2/assignments", (req,res) => {
    if(req.query.div) {
        let info = {
            branch: "it",
            year: 2,
            division: req.query.div
        };
        
        Assignment.find(
            {
                branch: info.branch,
                year: info.year,
                division: info.division
            }, function(err,assignments) {
                if(err) {
                    console.log(err);
                } else {
                    res.render("assignments", {assignments: assignments});
                }
            });
        
    } else {
        res.redirect("/it/2");
    }
});

router.get("/it/3/assignments", (req,res) => {
    if(req.query.div) {
        let info = {
            branch: "it",
            year: 3,
            division: req.query.div
        };
        
        Assignment.find(
            {
                branch: info.branch,
                year: info.year,
                division: info.division
            }, function(err,assignments) {
                if(err) {
                    console.log(err);
                } else {
                    res.render("assignments", {assignments: assignments});
                }
            });
        
    } else {
        res.redirect("/it/3");
    }
});

router.get("/it/4/assignments", (req,res) => {
    if(req.query.div) {
        let info = {
            branch: "it",
            year: 4,
            division: req.query.div
        };
        
        Assignment.find(
            {
                branch: info.branch,
                year: info.year,
                division: info.division
            }, function(err,assignments) {
                if(err) {
                    console.log(err);
                } else {
                    res.render("assignments", {assignments: assignments});
                }
            });
        
    } else {
        res.redirect("/it/4");
    }
});

module.exports = router;