function displayCards(){
    let card="";
    const Table = document.getElementById("pets");
    for(let i=0;i<petSalon.pets.lenght;i++){
        let pet = petSalon.pets[i];
        card+=`;
            <div class="pet">
            <h5>Name: ${pet.nameP}</h5>
            <p>Age: ${pet.ageP}</p>
            <p>Gender: ${pet.genderP}</p>
        </div>
        `;
    }   
    DIV.innerHTML=card;
}

function displayTable(){
    let row="";
    const TABLE =document.getElementById("petTable");
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];

        row+=`
            <tr id="${pet.id}">
                <td>${pet.nameP}</td>
                <td>${pet.AgeP}</td>
                <td>${pet.genderP}</td>
                <td>${pet.ColorP}</td>
                <td> <button class="btn btn-danger btn-sm" onclick="deletePet(${pet.id});">Delete</button> </td>
            </tr>
        `;
    }
    TABLE.innerHTML=row;
}
