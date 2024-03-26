/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = 
{
    name: "Ezequiel Albarracin",
    photo: "images/eze.png.jpg",
    favoriteFoods: ['Pizza','Burguer','Asado'],
    hobbies: ['Surf','Programming Arduino','Watch'],
    placesLived :[]
};




/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Mar del Plata, BA',
        length: '20 years'
    }
);
myProfile.placesLived.push(
    {
        place: 'Miramar, BA',
        length: '3 years'
    }
);
myProfile.placesLived.push(
    {
        place: 'Lima, PERU',
        length: '2 years'
    }
);

/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);

myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });

myProfile.placesLived.forEach(places => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = places.place;
    dd.textContent = places.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });  


/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


