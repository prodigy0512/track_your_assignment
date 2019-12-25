const express    = require("express"),
      router     = express.Router(),
      Assignment = require("../models/assignmentsModel"); 

//=================================
//  ROUTES FOR SELECTING DIVISON 
//=================================
router.get("/instru/2", (req,res) => {
    let info = {
        branch: "Instrumentation Engineering",
        year: 2,
        baseUrl: "instru"
    };
    res.render("select_division", {info: info}); 
});

router.get("/instru/3", (req,res) => {
    let info = {
        branch: "Instrumentation Engineering",
        year: 3,
        baseUrl: "instru"
    };
    res.render("select_division", {info: info}); 
});

router.get("/instru/4", (req,res) => {
    let info = {
        branch: "Instrumentation Engineering",
        year: 4,
        baseUrl: "instru"
    };
    res.render("select_division", {info: info}); 
});

//===================================
//  ROUTES FOR SHOWING ASSIGNMENTS
//===================================
router.get("/instru/2/assignments", (req,res) => {
    if(req.query.div) {
        let info = {
            branch: "instru",
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
        res.redirect("/instru/2");
    }
});

router.get("/instru/3/assignments", (req,res) => {
    if(req.query.div) {
        let info = {
            branch: "instru",
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
        res.redirect("/instru/3");
    }
});

router.get("/instru/4/assignments", (req,res) => {
    if(req.query.div) {
        let info = {
            branch: "instru",
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
        res.redirect("/instru/4");
    }
});

module.exports = router;

