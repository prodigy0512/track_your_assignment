const express    = require("express"),
      router     = express.Router(),
      Assignment = require("../models/assignmentsModel"); 

//=================================
//  ROUTES FOR SELECTING DIVISON 
//=================================
router.get("/electronics/2", (req,res) => {
    let info = {
        branch: "Electronics Engineering",
        year: 2,
        baseUrl: "electronics"
    };
    res.render("select_division", {info: info}); 
});

router.get("/electronics/3", (req,res) => {
    let info = {
        branch: "Electronics Engineering",
        year: 3,
        baseUrl: "electronics"
    };
    res.render("select_division", {info: info}); 
});

router.get("/electronics/4", (req,res) => {
    let info = {
        branch: "Electronics Engineering",
        year: 4,
        baseUrl: "electronics"
    };
    res.render("select_division", {info: info}); 
});

//===================================
//  ROUTES FOR SHOWING ASSIGNMENTS
//===================================
router.get("/electronics/2/assignments", (req,res) => {
    if(req.query.div) {
        let info = {
            branch: "electronics",
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
        res.redirect("/electronics/2");
    }
});

router.get("/electronics/3/assignments", (req,res) => {
    if(req.query.div) {
        let info = {
            branch: "electronics",
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
        res.redirect("/electronics/3");
    }
});

router.get("/electronics/4/assignments", (req,res) => {
    if(req.query.div) {
        let info = {
            branch: "electronics",
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
        res.redirect("/electronics/4");
    }
});

module.exports = router;