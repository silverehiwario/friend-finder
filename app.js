
$(document).ready(function() {



  $("#lock").on("click", function(event) {
      event.preventDefault();
      // Here we grab the form elements
      var newlogin = {
        Position: $("#exampleFormControlSelect1").val().trim(),
        Password: $("#exampleInputPassword1").val().trim(),
        Class: $("#exampleInputName2").val().trim()
        };
       console.log(newlogin);
      // This line is the magic. It"s very similar to the standard ajax function we used.
      // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
      // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
      // depending on if a tables is available or not.
        $.post("/page", newlogin,
         function(data) {
          // If a table is available... tell user they are booked.
          if (data) {
            console.log("data");
            window.location.href = (data);
            alert(" Hurray !");

          }
          // If a table is available... tell user they on the waiting list.
          
          // Clear the form when submitting
          
          $("#exampleFormControlSelect1").val("");
          $("#exampleInputPassword1").val("");
          $("#exampleInputName2").val("");
          
          

          });
       
    });



   $("#third").on("click", function(event) {
      event.preventDefault();
      // Here we grab the form elements

      var newsurvey = {
        question1: $('input:radio[name="inlineRadioOptions0"]:checked').val().trim(),
        question2: $('input:radio[name="inlineRadioOptions1"]:checked').val().trim(),
        question3: $('input:radio[name="inlineRadioOptions3"]:checked').val().trim(),
        question4: $('input:radio[name="inlineRadioOptions4"]:checked').val().trim(),
        question5: $('input:radio[name="inlineRadioOptions5"]:checked').val().trim(),
        question6: $('input:radio[name="inlineRadioOptions6"]:checked').val().trim(),
        question7: $('input:radio[name="inlineRadioOptions7"]:checked').val().trim(),
        question8: $('input:radio[name="inlineRadioOptions8"]:checked').val().trim(),
        question9: $('input:radio[name="inlineRadioOptions9"]:checked').val().trim(),
        question10: $('input:radio[name="inlineRadioOptions10"]:checked').val().trim(),
        question11: $('input:radio[name="inlineRadioOptions11"]:checked').val().trim(),
        question12: $('input:radio[name="inlineRadioOptions12"]:checked').val().trim(),
        question13: $('input:radio[name="inlineRadioOptions13"]:checked').val().trim(),
        question14: $('input:radio[name="inlineRadioOptions14"]:checked').val().trim(),
        question15: $('input:radio[name="inlineRadioOptions15"]:checked').val().trim(),
        question16: $('input:radio[name="inlineRadioOptions16"]:checked').val().trim(),
        question17: $('input:radio[name="inlineRadioOptions17"]:checked').val().trim(),
        question18: $('input:radio[name="inlineRadioOptions18"]:checked').val().trim(),
        question19: $('input:radio[name="inlineRadioOptions19"]:checked').val().trim(),
        question20: $('input:radio[name="inlineRadioOptions20"]:checked').val().trim(),

        };
       
       console.log(newsurvey);
      // This line is the magic. It"s very similar to the standard ajax function we used.
      // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
      // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
      // depending on if a tables is available or not.
        $.post("/survey", newsurvey,
         function(data) {
          // If a table is available... tell user they are booked.
          if (data) {
            alert(" Thanks for taking our skill set survey! Check for your Project Group later");
          }

          // clearing radio buttons

          $('input:radio[name="inlineRadioOptions0"]').removeAttr('checked');
          $('input:radio[name="inlineRadioOptions1"]').removeAttr('checked');
          $('input:radio[name="inlineRadioOptions3"]').removeAttr('checked');
          $('input:radio[name="inlineRadioOptions4"]').removeAttr('checked');
          $('input:radio[name="inlineRadioOptions5"]').removeAttr('checked');
          $('input:radio[name="inlineRadioOptions6"]').removeAttr('checked');
          $('input:radio[name="inlineRadioOptions7"]').removeAttr('checked');
          $('input:radio[name="inlineRadioOptions8"]').removeAttr('checked');
          $('input:radio[name="inlineRadioOptions9"]').removeAttr('checked');
          $('input:radio[name="inlineRadioOptions10"]').removeAttr('checked');
          $('input:radio[name="inlineRadioOptions11"]').removeAttr('checked');
          $('input:radio[name="inlineRadioOptions12"]').removeAttr('checked');
          $('input:radio[name="inlineRadioOptions13"]').removeAttr('checked');
          $('input:radio[name="inlineRadioOptions14"]').removeAttr('checked');
          $('input:radio[name="inlineRadioOptions15"]').removeAttr('checked');
          $('input:radio[name="inlineRadioOptions16"]').removeAttr('checked');
          $('input:radio[name="inlineRadioOptions17"]').removeAttr('checked');
          $('input:radio[name="inlineRadioOptions18"]').removeAttr('checked');
          $('input:radio[name="inlineRadioOptions19"]').removeAttr('checked');
          $('input:radio[name="inlineRadioOptions20"]').removeAttr('checked');

                   });
        });

 $("#first").on("click", function(event) {
      event.preventDefault();
      // Here we grab the form elements
      var newtas = {
        Name: $("#exampleInputName1").val().trim(),
        Email: $("#exampleInputEmail1").val().trim(),
        Password: $("#exampleInputPassword1").val().trim(),
        Username: $("#exampleInputName2").val().trim(),
        Position: $("#exampleFormControlSelect1").val().trim(),
        Class: $("#exampleInputName3").val().trim()
        };
       
       var confirmPass = $("#exampleInputPassword2").val().trim()
       console.log(newtas);
      // This line is the magic. It"s very similar to the standard ajax function we used.
      // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
      // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
      // depending on if a tables is available or not.
        if (newtas.Password === confirmPass ) {
        $.post("/ta", newtas,
         function(data) {
          // If a table is available... tell user they are booked.
          if (data) {
            alert(" Officially added !");
          }
          // If a table is available... tell user they on the waiting list.
          
          // Clear the form when submitting
          $("#exampleInputName1").val("");
          $("#exampleInputEmail1").val("");
          $("#exampleInputPassword1").val("");
          $("#exampleInputPassword2").val("");
          $("#exampleInputName2").val("");
          $("#exampleFormControlSelect1").val("");
          $("#exampleInputName3").val("");
          

          });
      } else {
          alert("Password does not match");
      }
    });



  $("#look").on("click", function(event) {
      event.preventDefault();
      // Here we grab the form elements
      var newreq = {
        GroupNum: parseInt($("#exampleInputNumber1").val().trim()),
        FrontEnd:parseInt($("#exampleInputNumber2").val().trim()),
        BackEnd:parseInt ($("#exampleInputNumber3").val().trim()),
        Both: parseInt($("#exampleInputNumber4").val().trim()),
        
        };


        //module.exports = newreq;
         Total = (newreq.FrontEnd)+ (newreq.BackEnd)+(newreq.Both);

         $("#group").html(Total);
         $("#show").html(newreq.GroupNum);

       
       console.log(newreq);

     /* $.post("/api/tasurvey", newreq,
         function(req) {
          // If a table is available... tell user they are booked.
          if (req) {
            console.log(req);
           
          }
          // If a table is available... tell user they on the waiting list.
          
          
          
          
          

          });

      */
       
    
      function runTableQuery2() {
      // Here we get the location of the root page.
      // We use this instead of explicitly saying the URL is localhost:3001 because the url will change when we deploy.
      var currentURL = window.location.origin;
      // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
      $.ajax({ url: currentURL + "/api/tasurvey", data: {newreq} , method: "POST" })
      .done(function(datareq) {
        // Here we are logging the URL so we have access to it for troubleshooting
        
        if (datareq) {
          /*for (var i=0 ; i< datareq.length; i++){
            console.log(datareq);
            var row = $("<div>");
           row.addClass("res");

         row.append("<p id = name>" + datareq[i].Name + "</p>");
           row.append('<button id="up">' + "YES" + '</button><button id="down">' + "NO" + '</button>');*/
       for (var i = 0; i < datareq.length; i++) {
          // Create the HTML Well (Section) and Add the table content for each reserved table
          var tableSection = $("<div>");
          tableSection.addClass("well");
          tableSection.attr("id", "tableWell-" + i + 1);
        $("#show1").append(tableSection);
          var tableNumber = i + 1;
          // Then display the remaining fields in the HTML (Section Name, Date, URL)
          $("#tableWell-" + i + 1).append("<h2><span class='label label-primary'>" + tableNumber + "</span> | " + datareq[i].Name + "</h2>");




          $("#exampleInputNumber2").val("");
          $("#exampleInputNumber3").val("");
          $("#exampleInputNumber4").val("");


           
               }

         $("#show2").prepend('<button id="up">' + "YES" + '</button><button id="down">' + "NO" + '</button>');

             $("#up").on("click", function(event) {

              $("#show1").hide();
              $("#down").hide();
              $("#up").hide();
              $("#show").hide();

              window.location.reload(true);
  

            });

        }

        });


        



    }
    runTableQuery2(); 

  });


  function runTableQuery() {
      // Here we get the location of the root page.
      // We use this instead of explicitly saying the URL is localhost:3001 because the url will change when we deploy.
      var currentURL = window.location.origin;
      // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
      $.ajax({ url: currentURL + "/api/total", method: "GET" })
      .done(function(tableData) {
        // Here we are logging the URL so we have access to it for troubleshooting
        
     // Here we then log the NYTData to console, where it will show up as an object.
        console.log(tableData);
        console.log("------------------------------------");
        // Loop through and display each of the customers


        


        for (var i = 0; i < tableData.length; i++) {
          // Create the HTML Well (Section) and Add the table content for each reserved table
          var tableSection = $("<div>");
          tableSection.addClass("well");
          tableSection.attr("id", "tableWell-" + i + 1);
          $("#total").append(tableSection);
          var tableNumber = i + 1;
          // Then display the remaining fields in the HTML (Section Name, Date, URL)
          $("#tableWell-" + i + 1).append("<h2><span class='label label-primary'>" + tableNumber + "</span> | " + tableData[i].Name +tableData[i].Email + "</h2>");


        }
      });
    }
    runTableQuery();


});