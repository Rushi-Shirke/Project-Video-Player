// $(function(){
//     $("#btn1").click(function(){
//      $("#nav_div").css("background-color","gray");
//         $("#nav_div").css("background-color","white");
//    });
//    $("#btn1").click(function(){
//     $("#side_list").slideToggel(2000);
//    })
// });

// $("#btn1").click(function()
// {
//    $("#side_list").css("background-color","black");
//    $("#side_list").css("color","white");
//    console.log("done")
// });
// $("#btn1").dblclick(function()
// {
//    $("#side_list").css("background-color","white");
//    $("#side_list").css("color","black");
//    console.log("too done")
// })

// $(document).ready(function () {
//    $("#btn1").click(function()
//    {
//       $("body").css("background-color","grey");
//       $("#btn1").html("Light");
//    })
// })

$(document).ready(function () {
   var c =0;
     $("#btn1").click(function()
   {
      c++;
      console.log(c);

      if(c%2==1)
      {
         $("body").css("background-color","black");
         $("body").css("color","white");
       
      $("#btn1").html("Light");
      }

      else if(c%2==0)
      {
         $("body").css("background-color","white");
         $("body").css("color","black");
         
      $("#btn1").html("Dark");
      }

   });

     var video=new Array
     (
      'Armaan Malik - Tu-You (Performance Video).mp4',
      'Coke Studio - Season 14 - Pasoori - Ali Sethi x Shae Gill.mp4',
      'Deva Deva - Lyric Video-Brahmāstra-Amitabh B, Ranbir, Alia-Pritam, Arijit, Jonita.mp4',
      'Full Song- Pehla Pyaar - Kabir Singh - Shahid Kapoor, Kiara Advani - Armaan Malik - Vishal Mishra.mp4',
      'Halamithi Habibo (Hindi) - Video Song - Beast - Thalapathy Vijay - Sun Pictures - Nelson - Anirudh.mp4',
      'Main Agar Kahoon-Bol Do Na Zara - T-Series Mixtape - Armaan Malik & Jonita Gandhi  - Bhushan Kumar.mp4',
      'Master - Vaathi Coming Video - Thalapathy Vijay - Anirudh Ravichander - Lokesh Kanagaraj.mp4',
      'O Re Piya & Dil Diyan Gallan - Medley - Armaan Malik - Unacademy Unwind With MTV.mp4',
      'Sulthan Video Song (Hindi) - KGF Chapter 2 - Rocking Star Yash -Prashanth Neel -Ravi Basrur -Hombale.mp4',
      );
     var name=new Array
     (
      'Armaan Malik - Tu-You',
      'Coke Studio - Season 14 - Pasoori - Ali Sethi x Shae Gill',
      'Deva Deva - Lyric Video-Brahmāstra-Amitabh B, Ranbir, Alia-Pritam, Arijit, Jonita',
      'Full Song- Pehla Pyaar - Kabir Singh - Shahid Kapoor, Kiara Advani - Armaan Malik - Vishal Mishra',
      'Halamithi Habibo (Hindi) - Video Song - Beast - Thalapathy Vijay - Sun Pictures - Nelson - Anirudh',
      'Main Agar Kahoon-Bol Do Na Zara - T-Series Mixtape - Armaan Malik & Jonita Gandhi  - Bhushan Kumar',
      'Master - Vaathi Coming Video - Thalapathy Vijay - Anirudh Ravichander - Lokesh Kanagaraj',
      'O Re Piya & Dil Diyan Gallan - Medley - Armaan Malik - Unacademy Unwind With MTV',
      'Sulthan Video Song (Hindi) - KGF Chapter 2 - Rocking Star Yash -Prashanth Neel -Ravi Basrur -Hombale'
      );

     $("img").click(function(){
      var id=$(this).attr('id');
      // alert(id);
      $("#text1").html("<b> "+name[id]+"</b>");
      $("#pvid").attr('src',video[id]);
      $("#pvid").attr('controls','controls');
      $("#pvid").attr('autoplay','autoplay');
     });

   
   
  
})

