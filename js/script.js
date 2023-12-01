// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.



  
  const listName = document.getElementById('list-name');
  const listRuolo = document.getElementById('list-ruolo');
  const listImg = document.getElementById('list-img');

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.


const team = [

    {
        "name": "Wayne Barnett",
        "role": "Founder & CEO",
        "img": "wayne-barnett-founder-ceo.png"
    },

    {
        "name": "Angela Caroll",
        "role": "Chief Editor",
        "img": "angela-caroll-chief-editor.jpg"
    },

    {
        "name": "Walter Gordon",
        "role": "Office Manager",
        "img": "walter-gordon-office-manager.jpg"
    },

    {
        "name": "Angela Lopez",
        "role": "Social Media Manager",
        "img": "angela-lopez-social-media-manager.jpg"
    },

    {
        "name": "Scott Estrada",
        "role": "Developer",
        "img": "scott-estrada-developer.jpg"
    },

    {
        "name": "Barbara Ramos",
        "role": "Graphic Designer",
        "img": "barbara-ramos-graphic-designer.jpg"
    }
];



// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto


for(let i = 0; i < team.length; i++){

     teamIesimo = team[i];

    //  console.log(teamIesimo);


     for(let key in teamIesimo){
        console.log(key + " = " + teamIesimo[key]);         
     }

      //// MILESTONE 2:
        // Stampare le stesse informazioni su DOM sotto forma di stringhe

     const nameUser = document.createElement('li');
     nameUser.innerHTML = teamIesimo.name;
     listName.append(nameUser);


     const ruoloUser = document.createElement('li');
     ruoloUser.innerHTML = teamIesimo.role;
     listRuolo.append(ruoloUser);

     const imgUser = document.createElement('li');
     imgUser.innerHTML = teamIesimo.img;
     listImg.append(imgUser);
      
}




