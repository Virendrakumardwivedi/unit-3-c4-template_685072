// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
let v= document.getElementById("navbar")
v.innerHTML=navbar();


// const api= `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${sidebar}`

// async function getnews(){
//     try{
//     let res = await fetch(api)
//     let data = await res.json();
//     console.log(data)
//     }catch(err){
//         console.log(err)
//     }
// }

// // const sidebar = document.getElementById("sidebar").children

// // let search=(e)=>{
// //     if(e.key=="Enter"){
// //         let value=document.getElementById("search_input").value;
// //         SearchNeaws(api,value).then((data)=>{
// //             let result =document.getElementById("result")
// //             append(data.status,result)
// //         })
// //     }
// // }




