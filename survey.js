let answers = ["Tampon!","Pad!","Menstrual Cup!"];
let score = 0;

//     if(englishInput == "Mon") {
//       // display this text if the answer is correct
//       $(".englishMessage").text("Correct!");
//       $(".englishMessage").css("color", "green");
//       $(".englishMessage").css("background-color", "#FFDF94");
//     }
    
//     else {
//     // display this text if the answer is incorrect
//     $(".englishMessage").text("Wrong! Try again."); 
//     $(".englishMessage").css("color", "red");
//     $(".englishMessage").css("background-color", "#CCC262");
//     }

  $(".myCheckbox1_1").click(function(){
    score+=1;
  });
   $(".myCheckbox1_2").click(function(){
    score+=2;
  });
   $(".myCheckbox1_3").click(function(){
    score+=3;
  });
   $(".myCheckbox1_4").click(function(){
    score+=4;
  });



  $(".myCheckbox2_1").click(function(){
    score+=1;
  });
   $(".myCheckbox2_2").click(function(){
    score+=2;
  });
   $(".myCheckbox2_3").click(function(){
    score+=3;
  });
   $(".myCheckbox2_4").click(function(){
    score+=4;
  });




  $(".myCheckbox3_1").click(function(){
    score+=1;
  });
   $(".myCheckbox3_2").click(function(){
    score+=2;
  });
   $(".myCheckbox3_3").click(function(){
    score+=3;
  });
   $(".myCheckbox4_4").click(function(){
    score+=4;
  });



  $(".myCheckbox5_1").click(function(){
    score+=1;
  });
   $(".myCheckbox5_2").click(function(){
    score+=2;
  });
   $(".myCheckbox5_3").click(function(){
    score+=3;
  });
   $(".myCheckbox5_4").click(function(){
    score+=4;
  });



$(".myCheckbox6_1").click(function(){
    score+=1;
  });
   $(".myCheckbox6_2").click(function(){
    score+=2;
  });
   $(".myCheckbox6_3").click(function(){
    score+=3;
  });
   $(".myCheckbox6_4").click(function(){
    score+=4;
  });
 

  // if(score <= 7){
  //   $(".home").css("background-image","url('https://images.summitmedia-digital.com/cosmo/images/2019/03/13/tampon-1552437581.jpg')");
  //   $(".home").text("Congrats! Youre a tampon!");
  // }
  


function check(){
  console.log(score);


  $(".submition").click(function(){
  $("header").css("text-align","center");
  $("header").css("background-size","fit");
  $("header").css("height","450px");
  $("header").css("width","100%");
  $("header").css("color","red");
  $("header").css("padding-top","100px");
  $("header").css("font-size","100px");


  if(score <= 7){
    a
  }

    if(score > 7 && score <=13){
    $("header").css("background-image","url('https://www.irishtimes.com/polopoly_fs/1.3674210.1540391444!/image/image.jpg_gen/derivatives/box_620_330/image.jpg')");
    $("header").text("Congrats! Youre a menstrual cup!");
  }

  if(score > 13 && score <=20){
    $("header").css("background-image","url('https://cdn.vox-cdn.com/thumbor/h2N2hgfgEqiMxWH1FEGcn5I1-8M=/0x0:1500x996/1200x800/filters:focal(626x259:866x499)/cdn.vox-cdn.com/uploads/chorus_image/image/62803973/Reports_RestaurantsFeminineProducts.0.jpg')");
    $("header").text("Congrats! Youre a pad!!");
  }
  
     window.location.href = "#herelads";
    });

 

}

