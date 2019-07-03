let menu = document.querySelectorAll('.menu-item');
    mainMenu = document.querySelector('.menu');
    tmpMenu = menu[2].cloneNode(true);
    li = document.createElement('li');
    title = document.querySelector('.title');
    adv = document.querySelector('.adv');
    colum = document.querySelectorAll('.column');
    answ = document.querySelector('.prompt');

    document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

    title.textContent = ' Мы продаем только подлинную технику Apple';
    li.classList.add('menu-item');  
    li.textContent = 'Пятый пункт';
    colum[1].removeChild(adv);
    console.log(menu[0]);
    console.log(mainMenu);

    
   // document.body.repl
     mainMenu.replaceChild(menu[1], menu[2]);
     mainMenu.insertBefore(tmpMenu, menu[1]);
    mainMenu.appendChild(li);

    let answer = prompt("Как вы относитесь к технике Apple?");
    answ.textContent = answer;