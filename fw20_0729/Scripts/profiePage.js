 
 
 // days
 let day= document.getElementById("b-day")
 
 for (let i = 1; i <= 30; i++) {
     let option=document.createElement("option")
     option.innerText=i
     day.append(option)
 }

 // months
 let months= document.getElementById("b-month")

 let Months=["January","February","March","April","March","April","May","June","July","August","September","October","November","December"]
 for (let i = 1; i <= 12; i++) {
     let option=document.createElement("option")
     option.innerText=Months[i]
     months.append(option)
 }

 // years
 let years= document.getElementById("b-year")

 for (let i = 1; i <= 150; i++) {
     let option=document.createElement("option")
     let year=2023
     option.innerText=year-i
     years.append(option)
 }