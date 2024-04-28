 document.getElementById('birthdate').valueAsDate = new Date();
 document.getElementById('currentdate').valueAsDate = new Date();

 function getAge()
 {
    var bdate = document.getElementById('birthdate').valueAsDate;
    var bday =  bdate.getDate();
    var bmonth = bdate.getMonth();
    var byear =  bdate.getFullYear();
    
    var cdate = document.getElementById('currentdate').valueAsDate;
    var cday =  cdate.getDate();
    var cmonth = cdate.getMonth();
    var cyear =  cdate.getFullYear();
    
    var Wish;
    Wish = document.getElementById('wish');
    var Age;
    Age = document.getElementById('age');
    
    year = cyear - byear;
      
    if((year<0)||(byear<1990)){
        alert("Please enter the correct birth date");
        Age.innerHTML=  "   ";
        Wish.innerHTML = " ";
    }
    else if(year==0)
     {
        Age.innerHTML= 0 + " years";
        Wish.innerHTML = " ";
     }
    else if(cmonth>bmonth)
    {
        Age.innerHTML = year + 1 + " years";
        Wish.innerHTML = " ";
    }
    else if(cmonth<bmonth)
    {
        Age.innerHTML= year + " years";
        Wish.innerHTML = " ";
    }
    else
    {
        if(cday>bday)
        {
           Age.innerHTML = year + 1 + " years";
           Wish.innerHTML = " ";
        }
        else if(cday<bday)
        {
            Age.innerHTML = year + " years";
            Wish.innerHTML = " ";
            if(year==1)
            {
            Age.innerHTML = 0 + " years";
            Wish.innerHTML = " ";
            }
        }
        else
        {
           Age.innerHTML = year + " years";
            if(year>0)
            {
                Wish.innerHTML="Happy Birthday🎂";
            }
        }
    }
   
 }