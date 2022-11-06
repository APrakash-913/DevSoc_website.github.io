var restaurants=
 
     [
        ["Smartpind",
            "White Sauce pasta", "red sauce pasta", "cheese pasta", "Whole Wheat Pasta", "Che-mato pasta", "Curried beans pasta", "Tomato pasta"
        ] ,
        ["PFC",
            "Chicken Popcorn", "Amritsari Chicken Masala", "Teekha Murg", "Murg Malaiwala", "Kerala Chicken Roast", "Chicken Chettinad", "Spicy Tangy Kadhai Chicken", "Masaledar Chicken Lollipop"
        ] ,
        ["HJB Canteen",
            "Aloo Paratha", "Paneer Paratha", "Cheese Paratha", "Gobi Paratha", "Methi Paratha", "Onion Paratha", "Green Pea Paratha"
        ] ,
        ["Sahara",
            "Veg roll", "Egg roll", "Chicken roll", "Veg Paneer Roll", "Chicken Egg roll", "Double Egg Roll", "Double Chicken Roll", "Special Roll"
        ] ,
        ["CCD",
            "Americano", "Cortado", "Macchiato", "Café au Lait", "Flat White", "Cappuccino"
        ] ,
        ["Veggies",
            "Dal tadka", "shahi paneer", "Misal", "Pulihora", "dal makhani", "Pav bhaji", "Palak paneer", "chana masala", "Vada pav", "Dal"
        ] ,
        ["JCB Canteen",
            "Maggi", "Cheese Maggi", "Egg Maggi", "Chicken Maggi", "Masala Maggi", "Fry Maggi", "Egg Fry Maggi", "Masala Fry Maggi", "Chicken Fry Maggi"
        ] ,
        ["Mio more",
            "Vanilla Cake", "Black Forest Cake", "Pineapple Cake", "Butterscotch Cake", "Red velvet Cake", "Fruit cake", "Rasmalai Cake", "Chocolate Cake", "Cheese Cake", "Strawberry Cake"
        ] ,
        ["Heritage",
            "Pav Bhaji", "Pizza", "Burger", "Masala Dosa", "Pakora", "Appam", "Pani Puri", "Chaat", "Samosa"
        ] ,
        ["Tikka",
            "Plain Dosa", "Onion Dosa", "Cheese Masala Dosa", "Paneer masala Dosa", "Butter Masala Dosa","Schezwan Masala Dosa", "Schezwan Butter masala Dosa", "Schezwan cheese butter masala Dosa"
        ],

    ]




var left= document.getElementById("left");
var left_heading= document.getElementById("left_heading");

var right= document.getElementById("right");


function change(name){

    left.innerHTML="";

    left.innerHTML+= "<b>" + name+ "</b>";
    left.innerHTML+= "<hr>";
   
for(var i=0; i<restaurants.length;i++){
  if(restaurants[i][0]===name)
{  
    var image= "url('" + name+ ".jpeg')"; 
    right.style.backgroundImage = image;
    right.style.backgroundRepeat="no-repeat";
    right.style.backgroundPosition = "center";
    right.style.backgroundSize = "cover";
    // right.style.a;

    for(var j=1; j<restaurants[i].length; j++){
        left.innerHTML+= "<li>"+ restaurants[i][j]+ "</li>";
    }

    left.innerHTML+= "</br>";
}
}
}

// function render(){
//     console.log("bebhebw");
//     var html= "<div class='commentBox'> <div class='left'></div></div>";
//     $('#container').append(html);
// }



// $(document).ready(function(){
//     var comment=[
//         {"hotel": "smartpind", "comment" : "nice"}
//     ];

//     if(!localStorage.commentData){
//         localStorage.commentData=[];
//     }

//     else{
//         comment=JSON.parse(localStorage.commentData);
//     }

   

//     for(var i=0; i<comment.length; i++){
//         render(comment[i]);
//     }

//     $('#addComment').click(function(){
//         var Obj={
//             "hotel": $('#hotel').val(),
//             "comment": $('#bodyText').val()
//         };

//         comment.push(addObj);
//         localStorage.commentData=JSON.stringify(comment);
//         render(addObj);
//         $('#hotel').val('');
//         $('#bodyText').val('');
//     });
// });



 function commentadd(){
     var name=document.getElementById("name");
     var comment= document.getElementById("comment");
     

     var opinion= documetn.getElementById("bodyText").value;
     var hotel= document.getElementById("hotel").value;

     name.innerHTML=hotel;
     comment.innerHTML=opinion;
     
 }



