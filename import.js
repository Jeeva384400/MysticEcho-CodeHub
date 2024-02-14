//console.log(" import file + export file");
// import {expFun,expValue,expArray} from './export.js'
// console.log(" expValue : ",expValue);
// expFun(10)
// import defaultFunction,{} from './export.js'
// import* as allImport from './export.js'
// allImport.expFun(10);
// let newArray = allImport.expArray;
// console.log("newArray : ",newArray);
// defaultFunction(5,10)

// function apiCallOut(){
//     fetch("https://reqres.in/api/users" ,
//     {

//     }).then((response) => {
//         const jsonArray = response.json();
//         console.log("response : ",jsonArray);

//     }).catch((error) => {
//         console.log(" Error : ",error)
//     })
// }
// apiCallOut()

function fetchAPICallout(){
    //return  fetch("https://reqres.in/api/users", { });
    const response = fetch("https://api.thecatapi.com/v1/images/search",{})
    console.log(" fetch response : ",response);
  }
  
  async function asyncApiCallout(){
      try{
        const response =  await fetch("https://api.thecatapi.com/v1/images/search",{});
      //const { page, per_page, total, total_pages,  data } = await response.json()
      const jsonResponse  = await response.json();
      console.log("jsonResponse : ",jsonResponse[0].url);
      let imageTag = document.querySelector(".catImageClass");
      imageTag.src = jsonResponse[0].url;
      //let jsonData = response.json();
    
  
  }catch(error){
      console.log("error : ",error);
      }
  }
  function callAscyncFunction(){
      
   setTimeout(() => {
  asyncApiCallout()
   },1000)
  }
  