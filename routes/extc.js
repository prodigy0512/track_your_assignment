const express    = require("express"),
      router     = express.Router(),
      Assignment = require("../models/assignmentsModel"); 

//=================================
//  ROUTES FOR SELECTING DIVISON 
//=================================
router.get("/extc/2", (req,res) => {
    let info = {
        branch: "Electronics and Telecommunication Engineering",
        year: 2,
        baseUrl: "extc"
    };
    res.render("select_division", {info: info}); 
});

router.get("/extc/3", (req,res) => {
    let info = {
        branch: "Electronics and Telecommunication Engineering",
        year: 3,
        baseUrl: "extc"
    };
    res.render("select_division", {info: info}); 
});

router.get("/extc/4", (req,res) => {
    let info = {
        branch: "Electronics and Telecommunication Engineering",
        year: 4,
        baseUrl: "extc"
    };
    res.render("select_division", {info: info}); 
});

//===================================
//  ROUTES FOR SHOWING ASSIGNMENTS
//===================================
router.get("/extc/2/assignments", (req,res) => {
    if(req.query.div) {
        let info = {
            branch: "extc",
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
        res.redirect("/extc/2");
    }
});

router.get("/extc/3/assignments", (req,res) => {
    if(req.query.div) {
        let info = {
            branch: "extc",
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
        res.redirect("/extc/3");
    }
});

router.get("/extc/4/assignments", (req,res) => {
    if(req.query.div) {
        let info = {
            branch: "extc",
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
        res.redirect("/extc/4");
    }
});

module.exports = router;

