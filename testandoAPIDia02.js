function loadpk(){
   nome = document.getElementById('caixa').value;
   
    let url=`https://pokeapi.co/api/v2/pokemon/${nome}`;
    
    fetch(url)
    .then((response) => {
       return response.json();

      })
    .then((data) => {
      // o que vamos fazer com os dados em formato json 
      console.clear();
      console.log(data);
      let img = data['sprites']['front_default'];
      document.getElementById('nome').innerHTML = data['name'];
      document.getElementById('numero').innerHTML = data['id'];
      document.getElementById('pic').setAttribute('src',img);

     })

    .catch((error)  => {
        console.log("erro "+ error);
      });
    }

document.getElementById('btn1').onclick = loadpk;