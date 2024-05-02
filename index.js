// fetch("https://api.tvmaze.com/shows/1")
// .then(res=>res.json())
// .then(res=>{
//     console.log(res);
    
    
//     let img=new Image()
//     img.src=res.image.medium
//     document.querySelector("body").appendChild(img)
// })

let list=document.getElementById("list")
axios("https://api.tvmaze.com/shows")
.then(res=>{
for (let index = 0; index < res.data.length; index++) {
    list.innerHTML += `<div class="card me-5  mb-5 ms-4 col-lg-4"   style="width: 18rem;">
    <img src="${res.data[index].image.medium}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">"${res.data[index].name}"</h5>
        <p class="card-text">Follow the link and watch the movie.</p>
        <a href="#" class="btn btn-primary">MOVIE LINK</a>
    </div>
</div>`;
}
})

 
