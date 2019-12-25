const express    = require("express"),
      router     = express.Router(),
      Assignment = require("../models/assignmentsModel"); 

//=================================
//  ROUTES FOR SELECTING DIVISON 
//=================================
router.get("/comps/2", (req,res) => {
    let info = {
        branch: "Computer Engineering",
        year: 2,
        baseUrl: "comps"
    };
    res.render("select_division", {info: info}); 
});

router.get("/comps/3", (req,res) => {
    let info = {
        branch: "Computer Engineering",
        year: 3,
        baseUrl: "comps"
    };
    res.render("select_division", {info: info}); 
});

router.get("/comps/4", (req,res) => {
    let info = {
        branch: "Computer Engineering",
        year: 4,
        baseUrl: "comps"
    };
    res.render("select_division", {info: info}); 
});

//===================================
//  ROUTES FOR SHOWING ASSIGNMENTS
//===================================
router.get("/comps/2/assignments", (req,res) => {
    if(req.query.div) {
        let info = {
            branch: "comps",
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
        res.redirect("/comps/2");
    }
});

router.get("/comps/3/assignments", (req,res) => {
    if(req.query.div) {
        let info = {
            branch: "comps",
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
        res.redirect("/comps/3");
    }
});

router.get("/comps/4/assignments", (req,res) => {
    if(req.query.div) {
        let info = {
            branch: "comps",
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
        res.redirect("/comps/4");
    }
});

module.exports = router;

