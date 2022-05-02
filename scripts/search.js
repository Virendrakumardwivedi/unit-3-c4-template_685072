// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
let v= document.getElementById("navbar")
v.innerHTML=navbar();


import {search, append} from "./fatch.js"