// utilizando for in
//const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];
 //for (let i in maioresPaises ) {
   //  console.log (`${Number(i)+1} - ${maioresPaises[i]}`)
 //}

 // utilizando for off
 const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];
 let contagem = 1
     for (let pais of maioresPaises) {
       let ranking = `${contagem} ${pais}` 
       console.log (ranking)
       contagem += 1
     }