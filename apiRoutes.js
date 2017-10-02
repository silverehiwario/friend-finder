 var mysql = require("mysql");
 var express = require("express");
 var app = express();
 var PORT = 8080;




var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sophia01*",
  database: "projectgroupfinderdb"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


// ==============================================================================
// ROUTING
// ===============================================================================

 module.exports = function(app) {

       
       
 app.post("/ta", function(req, res) {

    if (req.body.Position === "TA"){
        connection.query('INSERT INTO tas_md5 ( Name, Email, TAPass, Username, Position, Class) VALUES ( ?, ?, ?, ?,?,?);', [req.body.Name, req.body.Email, req.body.Password, req.body.Username, req.body.Position,req.body.Class], function(error, results, fields){
      // var query = connection.query("INSERT tas_md5 SET ?,?,?,?,?,?",  [req.body.Name, req.body.Email, req.body.Password, req.body.Username, req.body.Position,req.body.Class], function(error, results, fields){
      if(error) throw error;

       if(error) {
        
        throw error;

        }
           else 
               {
                 res.send('Inserted Successfully!')
               }
        });     

          } 
            else if (req.body.Position === "Instructor"){
             
              connection.query('INSERT INTO instructors_md5 ( Name, Email, InstPass, Username, Position, Class) VALUES ( ?, ?, ?, ?,?,?);', [req.body.Name, req.body.Email, req.body.Password, req.body.Username, req.body.Position,req.body.Class], function(error, results, fields){
            // var query = connection.query("INSERT tas_md5 SET ?,?,?,?,?,?",  [req.body.Name, req.body.Email, req.body.Password, req.body.Username, req.body.Position,req.body.Class], function(error, results, fields){
            if(error) throw error;

            if(error) {
        
            throw error;

            }
           else 
               {
                 res.send('Inserted Successfully!')
               }
             });     




          } else {

                    connection.query('INSERT INTO student_md5 ( Name, Email, StudentPass, Username, Class) VALUES ( ?, ?, ?, ?,?);', [req.body.Name, req.body.Email, req.body.Password, req.body.Username, req.body.Class], function(error, results, fields){
            // var query = connection.query("INSERT tas_md5 SET ?,?,?,?,?,?",  [req.body.Name, req.body.Email, req.body.Password, req.body.Username, req.body.Position,req.body.Class], function(error, results, fields){
            if(error) throw error;

            if(error) {
        
            throw error;

            }
           else 
               {
                 res.send('Inserted Successfully!')
               }
             });     
                   // connection.end();




          }
 

      });


    app.post("/page", function(req, res) {

         if (req.body.Position === "TA"){

        connection.query("SELECT TAPass FROM tas_md5 ",  function(err, results1){
        if(err) throw err;
         console.log(results1);
         for (var i =0; i< results1.length; i++){

        console.log((results1[i].TAPass === req.body.Password));
        if (results1[i].TAPass === req.body.Password){
         
         res.send("/TAview");} else { console.log("signup");
                                  }

       }
       
        });


          
          

          } else if (req.body.Position === "Instructor"){

            connection.query("SELECT InstPass FROM instructors_md5 ",  function(err, results2){
           if(err) throw err;
            console.log(results2);
           for (var i =0; i< results2.length; i++){

            if (results2[i].InstPass === req.body.Password){
         
              res.send("/instructorview");} else { console.log("signup");
                                  }
            }
           
              });
       

         }else {

           connection.query("SELECT StudentPass FROM student_md5 WHERE StudentPass = ?", req.body.Password, function(err, results3){
           if(err) throw err;
           console.log(results3);

          for (var i =0; i< results3.length; i++){
           console.log((req.body.Password === results3[0].StudentPass));


          // console.log(results3.StudentPass);

           if (req.body.Password === results3[0].StudentPass){

           connection.query('INSERT INTO student_skillset_md5 ( COMMANDLINE, HTMLCSS, BOOTSTRAP, JAVASCRIPT, JQUERY, API, AJAX, FIREBASE, NODEJS, CONS, OOP, MYSQL, EXPRESS, NODESERV, HANDLE,MANGODB, MERN, REACTJS, C, ALGORITHMS, StudentPass) VALUES ( ?, ?, ?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);', [0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, results3[0].StudentPass], function(error, results, fields){

           if (error){
            throw error;
           } else { res.send("/studentview")}
           })
  
          
           }else{console.log('Signup')}
       
          }
      
      });
         }

       });



     app.post("/survey", function(req, res) {

//connection.query('UPDATE student_skillset_md5  SET  (COMMANDLINE, HTMLCSS, BOOTSTRAP, JAVASCRIPT, JQUERY, API, AJAX, FIREBASE, NODEJS, CONS, OOP, MYSQL, EXPRESS, NODESERV, HANDLE,MANGODB, MERN, REACTJS, C, ALGORITHMS )VALUES ( ?, ?, ?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) WHERE VALUES ( ?, ?, ?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ;', [req.body.question1, req.body.question2, req.body.question3,req.body.question4,req.body.question5, req.body.question6,req.body.question7,req.body.question8,req.body.question9,req.body.question10,req.body.question11,req.body.question12,req.body.question13,req.body.question14,req.body.question15,req.body.question16,req.body.question17,req.body.question18,req.body.question19,req.body.question20][0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], function(error, results, fields){
connection.query('UPDATE student_skillset_md5 SET COMMANDLINE= ? WHERE COMMANDLINE = ?', [req.body.question1 , 0],function (error, results, fields) {
  if (error) {throw error;}
});
connection.query('UPDATE student_skillset_md5 SET HTMLCSS= ? WHERE HTMLCSS = ?', [req.body.question2 , 0], function (error, results, fields) {
   if (error) {throw error;}
});
connection.query('UPDATE student_skillset_md5 SET BOOTSTRAP= ? WHERE BOOTSTRAP = ?', [req.body.question3 , 0], function (error, results, fields) {
   if (error) {throw error;}
});
connection.query('UPDATE student_skillset_md5 SET JAVASCRIPT= ? WHERE JAVASCRIPT = ?', [req.body.question4, 0], function (error, results, fields) {
   if (error) {throw error;}
});
connection.query('UPDATE student_skillset_md5 SET JQUERY= ? WHERE JQUERY = ?', [req.body.question5 , 0], function (error, results, fields) {
   if (error) {throw error;}
});
connection.query('UPDATE student_skillset_md5 SET API= ? WHERE API = ?', [req.body.question6 , 0], function (error, results, fields) {
   if (error) {throw error;}
});
connection.query('UPDATE student_skillset_md5 SET AJAX= ? WHERE AJAX = ?', [req.body.question7 , 0], function (error, results, fields) {
   if (error) {throw error;}
});
connection.query('UPDATE student_skillset_md5 SET FIREBASE= ? WHERE FIREBASE = ?', [req.body.question8 , 0], function (error, results, fields) {
   if (error) {throw error;}
});
connection.query('UPDATE student_skillset_md5 SET NODEJS= ? WHERE NODEJS = ?', [req.body.question9 , 0], function (error, results, fields) {
   if (error) {throw error;}
});
connection.query('UPDATE student_skillset_md5 SET CONS= ? WHERE CONS = ?', [req.body.question10 , 0], function (error, results, fields) {
   if (error) {throw error;}
});
connection.query('UPDATE student_skillset_md5 SET OOP= ? WHERE OOP = ?', [req.body.question11 , 0],function (error, results, fields) {
   if (error) {throw error;}
});
connection.query('UPDATE student_skillset_md5 SET MYSQL= ? WHERE MYSQL = ?', [req.body.question12 , 0], function (error, results, fields) {
   if (error) {throw error;}
});
connection.query('UPDATE student_skillset_md5 SET EXPRESS= ? WHERE EXPRESS = ?', [req.body.question13 , 0], function (error, results, fields) {
   if (error) {throw error;}
});
connection.query('UPDATE student_skillset_md5 SET NODESERV= ? WHERE NODESERV = ?', [req.body.question14 , 0], function (error, results, fields) {
 if (error) {throw error;}
});
connection.query('UPDATE student_skillset_md5 SET HANDLE= ? WHERE HANDLE = ?', [req.body.question15 , 0], function (error, results, fields) {
   if (error) {throw error;}
});
connection.query('UPDATE student_skillset_md5 SET MANGODB= ? WHERE MANGODB = ?', [req.body.question16 , 0], function (error, results, fields) {
  if (error) {throw error;}
});
connection.query('UPDATE student_skillset_md5 SET MERN= ? WHERE MERN = ?', [req.body.question17 , 0], function (error, results, fields) {
  if (error) {throw error;}
});
connection.query('UPDATE student_skillset_md5 SET REACTJS= ? WHERE REACTJS = ?', [req.body.question18 , 0], function (error, results, fields) {
  if (error) {throw error;}
});
connection.query('UPDATE student_skillset_md5 SET C = ? WHERE C  = ?', [req.body.question19 , 0], function (error, results, fields) {
  if (error) {throw error;}
});
connection.query('UPDATE student_skillset_md5 SET ALGORITHMS= ? WHERE ALGORITHMS= ?', [req.body.question20 , 0], function (error, results, fields) {

 if (error) {
   throw error;


        }
           else 
               {
                 res.send('Skillset Successfully Added!')
               }
        });  

     });


     app.get("/api/total", function(req, res) {

    connection.query("SELECT student_md5.Name, student_md5.Email, student_md5.Username, student_md5.Class FROM student_md5", function(err, results){
      res.json(results);
    });

    //res.json(tableData);
     });


    // app.post("/api/tasurvey", function(req, res) {
    // 

     //});





     app.post("/api/tasurvey", function(req, res) {

    
    var query1 = "SELECT student_md5.Name, (COMMANDLINE+ HTMLCSS+BOOTSTRAP+JAVASCRIPT + JQUERY+ API+AJAX + FIREBASE+ CONS+OOP)AS FRONTEND, (API+AJAX+ NODEJS+ FIREBASE+ CONS+OOP+ MYSQL+ EXPRESS+ NODESERV+HANDLE+MANGODB+MERN+ REACTJS+ C+ ALGORITHMS ) AS BACKEND"; 
          query1+= " FROM student_md5 INNER JOIN student_skillset_md5 ON (student_md5.StudentPass = student_skillset_md5.StudentPass) WHERE (COMMANDLINE+ HTMLCSS+BOOTSTRAP+JAVASCRIPT + JQUERY+ API+AJAX + FIREBASE+ CONS+OOP) < (API+AJAX+ NODEJS+ FIREBASE+ CONS+OOP+ MYSQL+ EXPRESS+ NODESERV+HANDLE+MANGODB+MERN+ REACTJS+ C+ ALGORITHMS )";
          query1+= " GROUP BY Name LIMIT ?";

         
        connection.query(query1,[2] , function(err, results1,fields){
            if (err) throw err;

           // for(var i = 0; i< results1.length; i++){
           res.json(results1);
           console.log(results1);
            //     }
                  });
      });


          app.post("/api/tasurvey", function(req, res) {

    
         var query2 = "SELECT student_md5.Name, (COMMANDLINE+ HTMLCSS+BOOTSTRAP+JAVASCRIPT + JQUERY+ API+AJAX + FIREBASE+ CONS+OOP)AS FRONTEND, (API+AJAX+ NODEJS+ FIREBASE+ CONS+OOP+ MYSQL+ EXPRESS+ NODESERV+HANDLE+MANGODB+MERN+ REACTJS+ C+ ALGORITHMS ) AS BACKEND"; 
          query2+= " FROM student_md5 INNER JOIN student_skillset_md5 ON (student_md5.StudentPass = student_skillset_md5.StudentPass) WHERE (COMMANDLINE+ HTMLCSS+BOOTSTRAP+JAVASCRIPT + JQUERY+ API+AJAX + FIREBASE+ CONS+OOP) > (API+AJAX+ NODEJS+ FIREBASE+ CONS+OOP+ MYSQL+ EXPRESS+ NODESERV+HANDLE+MANGODB+MERN+ REACTJS+ C+ ALGORITHMS )";
          query2+= " GROUP BY Name LIMIT ?";


         
        connection.query(query2,[2] , function(err, results2,fields){
            if (err) throw err;
           res.json(results2);
           console.log(results2);
                 
                  });
      });


        app.post("/api/tasurvey", function(req, res) {

    
         var query3 = "SELECT student_md5.Name, (COMMANDLINE+ HTMLCSS+BOOTSTRAP+JAVASCRIPT + JQUERY+ API+AJAX + FIREBASE+ CONS+OOP)AS FRONTEND, (API+AJAX+ NODEJS+ FIREBASE+ CONS+OOP+ MYSQL+ EXPRESS+ NODESERV+HANDLE+MANGODB+MERN+ REACTJS+ C+ ALGORITHMS ) AS BACKEND"; 
          query3+= " FROM student_md5 INNER JOIN student_skillset_md5 ON (student_md5.StudentPass = student_skillset_md5.StudentPass) WHERE (((COMMANDLINE+ HTMLCSS+BOOTSTRAP+JAVASCRIPT + JQUERY+ API+AJAX + FIREBASE+ CONS+OOP) + (API+AJAX+ NODEJS+ FIREBASE+ CONS+OOP+ MYSQL+ EXPRESS+ NODESERV+HANDLE+MANGODB+MERN+ REACTJS+ C+ ALGORITHMS ))/2)>65";
          query3+= " GROUP BY Name LIMIT ?";
        

         
        connection.query(query3,[2] , function(err, results3,fields){
            if (err) throw err;
           res.json(results3);
           console.log(results3);
                 
                  });
      });
   

    

        

//});
          
          

}