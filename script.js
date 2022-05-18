const allcircle = document.querySelectorAll('.circle');
const circle1=document.getElementById("circle1");
const circle2=document.getElementById("circle2");
const circle3=document.getElementById("circle3");
const circle4=document.getElementById("circle4");
const circle5=document.getElementById("circle5");
var rattingstat=document.getElementById("ratingstat");
var button=document.getElementById("buttonn");






allcircle.forEach((circle,i) =>{
    circle.onclick = function(){
        let current_circle_level=i+1;
        
        
    
       
        


        if(current_circle_level===1){
            circle1.style.backgroundColor="#fc7613";
            circle2.style.backgroundColor="#262f38";
            circle3.style.backgroundColor="#262f38";
            circle4.style.backgroundColor="#262f38";
            circle5.style.backgroundColor="#262f38";

            circle1.style.color="white";
            circle2.style.color="#808992";
            circle3.style.color="#808992";
            circle4.style.color="#808992";
            circle5.style.color="#808992";
            
        
            
            



        }else if(current_circle_level===2){
            circle1.style.backgroundColor="#262f38";
            circle2.style.backgroundColor="#fc7613";
            circle3.style.backgroundColor="#262f38";
            circle4.style.backgroundColor="#262f38";
            circle5.style.backgroundColor="#262f38";


            circle1.style.color="#808992";
            circle2.style.color="white";
            circle3.style.color="#808992";
            circle4.style.color="#808992";
            circle5.style.color="#808992";
            
            
        }

        else if(current_circle_level===3){
            circle1.style.backgroundColor="#262f38";
            circle2.style.backgroundColor="#262f38";
            circle3.style.backgroundColor="#fc7613";
            circle4.style.backgroundColor="#262f38";
            circle5.style.backgroundColor="#262f38";


            circle1.style.color="#808992";
            circle2.style.color="#808992";
            circle3.style.color="white";
            circle4.style.color="#808992";
            circle5.style.color="#808992";
            
            
        }

        else if(current_circle_level===4){
            circle1.style.backgroundColor="#262f38";
            circle2.style.backgroundColor="#262f38";
            circle3.style.backgroundColor="#262f38";
            circle4.style.backgroundColor="#fc7613";
            circle5.style.backgroundColor="#262f38";


            circle1.style.color="#808992";
            circle2.style.color="#808992";
            circle3.style.color="#808992";
            circle4.style.color="white";
            circle5.style.color="#808992";
            
            
        }

        else if(current_circle_level===5){
            circle1.style.backgroundColor="#262f38";
            circle2.style.backgroundColor="#262f38";
            circle3.style.backgroundColor="#262f38";
            circle4.style.backgroundColor="#262f38";
            circle5.style.backgroundColor="#fc7613";


            circle1.style.color="#808992";
            circle2.style.color="#808992";
            circle3.style.color="#808992";
            circle4.style.color="#808992";
            circle5.style.color="white";
            
            
        }









         function passvalue(){
        var passablevalue=current_circle_level;
        localStorage.setItem("textvalue",passablevalue);
        
        
    }
    button.onclick=passvalue()
    


   

    
    
    







        
       
    }
    
    
        
        

        


       
        
        
        
        
             
        
        
        

        
        
   

    
})







