const searchUser = document.querySelector("#search")
let users = [
    {id : 1, titre : "Iphone 13", couleur : "rouge"},
    {id : 2, titre : "Iphone 16", couleur : "bleu"},
    {id : 3, titre : "Samsung 13", couleur : "rouge"}
]


//const rougesProducts = produits.filter(produit => produit.couleur === "rouge" )

 
//for (const element of tabTest) {
//console.log(tabTest);
//}

searchUser.addEventListener("input", e => {
  const element = e.target.value.toLowerCase()
  const newUser = users.filter(user =>
    user.login.toLowerCase().includes(element)
  )

  showUsers(newUser)
})