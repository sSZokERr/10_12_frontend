let totalCal = 0;
function init(){
    document.getElementById('reset').addEventListener('click', () => {
    var element = document.getElementsByTagName("li"), index;

    for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
    document.getElementById('cal').textContent = "Kalória: 0"
}
    })

    document.getElementById('bud').addEventListener('click', () => {
        totalCal += 300;
        document.getElementById('cal').innerHTML = "Kalória: " + totalCal;
        let lista = document.getElementById('lista');
        let liElem = document.createElement('li');
        let elso = document.createElement('span');
        let masodik = document.createElement('i');
        
        masodik.textContent = "300";
        elso.textContent = "Bud light ";
        
        liElem.appendChild(elso)
        liElem.appendChild(masodik)
        lista.appendChild(liElem)
    });
    document.getElementById('piz').addEventListener('click', () => {
        totalCal += 500;
        document.getElementById('cal').innerHTML = "Kalória: " + totalCal;
        let lista = document.getElementById('lista');
        let liElem = document.createElement('li');
        let elso = document.createElement('span');
        let masodik = document.createElement('i');
        
        masodik.textContent = "500";
        elso.textContent = "Pizza ";
        
        liElem.appendChild(elso)
        liElem.appendChild(masodik)
        lista.appendChild(liElem)
    });
    document.getElementById('stero').addEventListener('click', () => {
        totalCal += -300;
        document.getElementById('cal').innerHTML = "Kalória: " + totalCal;
        let lista = document.getElementById('lista');
        let liElem = document.createElement('li');
        let elso = document.createElement('span');
        let masodik = document.createElement('i');
        
        masodik.textContent = "-300";
        elso.textContent = "Szteroid";

        liElem.appendChild(elso)
        liElem.appendChild(masodik)
        lista.appendChild(liElem)
    });

    
    
    
}





document.addEventListener('DOMContentLoaded', init)