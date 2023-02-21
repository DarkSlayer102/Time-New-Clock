import { testing,zero,one_five } from "./vars.js"
/* importings variables from another javascript files */



/* logging an output to check if the file working properly*/

console.log(testing);

/* Define a function for getting current time*/

function getTime(){

    /* creating variables 

    */

    let date =  new Date();  /* Date  Object Stored in a variable called date*/
    let hh = date.getHours(); /* getting Hours of date*/
    let ss = date.getSeconds(); /* getting Seconds of date*/
    let mm = date.getMinutes(); /* getting Mins of date*/
    let ses = "AM";

    /* Conditions */

    if (hh > 12){
        hh -= 12;
        ses = "PM";
    }

    if (hh == 0){
        hh = 12;
        ses = "AM";
    }

    

    if (hh < 10){
        "0" + hh
    } 

    if (mm < 10){
        "0" + mm
    }

    if (ss < 10){
        "0" + ss
    }



    /* comments of this ternary operators because no needed useage*/
    /*
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    */


    /* getting the current time and putting in a variable*/

    let currenttime = `${hh} : ${mm} : ${ss} ${ses}`; 

    const currentT = document.getElementById("clock")
    currentT.innerHTML = currenttime;
    const repeating = setTimeout(() => getTime(),1000);


    

}


getTime();

/* calling the function */



/* define a function */

/* function to get Date */


function getDate(){
    
    /* setting variables */

    /* Date  Object Stored in a variable called date*/
    const currentDate = new Date();

    /*  getting years  */
    const cYear = currentDate.getFullYear();

     /*  getting Month  */
    const cMonth = currentDate.getMonth();

     /*  getting Date  */
    const cDay = currentDate.getDate();

     /*  converting date to string like mon 13 2023 also slicing it to remove time part  */
    const newCDate =  currentDate.toString().slice(zero,one_five)

     /*  creating a variable for cDate div element and getting the ID  */
    const cD = document.getElementById("cDate")
    cD.innerHTML = newCDate;
}


getDate();
 /*  calling the function  */

