

let  news  = async (value)=>{

    try{
        let res  =await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`)
        let data = await res.json();
        console.group(data)
    }catch(err){
        console.log(err)
    }
}

let append=(data,results)=>{
    data.forEach(({urlToImage,title,description})=>{
        let newdiv= document.createElement("div");
        let img= document.createElement("img")
        let p1= document.createElement("p");
        let p2 = document.createElement("p")

        img.src=urlToImage;
        p1.innerText=title;
        p2.innerText=description

        newdiv.append(img,p1,p2)
        document.querySelector("results").append(newdiv)
    })
}

export { news,append}




