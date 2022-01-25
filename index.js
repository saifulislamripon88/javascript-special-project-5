const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const buttons = document.getElementById("btn");
const bookList = document.getElementById("bookList");


btn.addEventListener("click", function(e){
    e.preventDefault();
   

    //condition start here

    if(title.value == "" && author.value == "" && year.value == ""){
        alert("please philaph all details and try again!")
    }else{
        const newRow = document.createElement("tr");
       
        const newTitle = document.createElement("th");
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);
        // console.log(newTitle)



        const newAuthor = document.createElement("th");
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);
        // console.log(newAuthor)



        const newYear = document.createElement("th");
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);
        // console.log(newYear)

       
      
        //booklist ke appenchild hobe tr er sathe

        bookList.appendChild(newRow);

    }

})