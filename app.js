const express    = require("express"),
      app        = express(),
      mongoose   = require("mongoose"),
      Assignment = require("./models/assignmentsModel"),
      formidable = require('formidable'),
    //   seedDB     = require("./seed"),
      fs         = require("fs");

let downloadFileName;

//Connecting to DB and seeding
mongoose.connect("mongodb://localhost/assignmentsDB");
// seedDB();

//IMPORTING THE ROUTES
const compsRoutes      = require("./routes/comps.js"),
      electronicRoutes = require("./routes/electronics.js"),
      itRoutes         = require("./routes/it.js"),
      extcRoutes       = require("./routes/extc.js"),
      instruRoutes     = require("./routes/instru.js");

app.use(express.static("public"));
app.use(compsRoutes);
app.use(electronicRoutes);
app.use(itRoutes);
app.use(extcRoutes);
app.use(instruRoutes);
app.set('view engine', 'ejs');

//ROUTES GO BELOW!!
app.get("/", (req,res) => {
    res.render("index");
});

//================
// UPLOAD
//================
app.get("/upload", (req,res) =>{
    res.render("upload"); 
});

app.post("/uploadFile", (req,res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err,fields,files) => {
        if(err) {
            console.log(err);
        } else if(files.file.type != "application/pdf") {
            res.send("Only PDF!");
        } else {
            let fileName = fields.assignment_name.replace(/\s/g,'') + ".pdf";
            let oldPath = files.file.path;
            let newPath = `files/${fields.branch}/${fields.year}/${fields.division}/${fileName}`;
            fs.rename(oldPath,newPath);
            
            //Adding the assignment to the DB
            Assignment.create({
                branch: fields.branch,
                year: parseInt(fields.year,10),
                division: fields.division,
                title: fields.assignment_name,
                path: newPath
            });
            res.send("Successful!");
        }
    });
});

//============================
// ROUTE TO DOWNLOAD FILE
//============================
app.get("/download/:id", (req,res) => {
    Assignment.find({_id:req.params.id}, (err,assignment) => {
        if(err) {
            console.log(err);
        } else {
            res.download(assignment[0].path);
            // downloadFileName = assignment[0].title
            // res.redirect("/downloadfile");
        }
    });
});

// app.get("/downloadfile", (req,res) => {
//     if(downloadFileName != null) {
//         res.download("files/" + downloadFileName.replace(/\s/g, "") + ".pdf");
//     } else {
//         res.redirect("/");
//     }
//     downloadFileName = null;
// });

// STARTING THE SERVER
app.listen(process.env.PORT,process.env.IP, () => {
    console.log("Server is running...");
});