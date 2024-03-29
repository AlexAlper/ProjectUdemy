window.addEventListener('DOMContentLoaded', function(){

    'use strict'

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

        function hideTabContent(a){
            for(let i = a; i < tabContent.length; i++){
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

        hideTabContent(1);

        function showTabContent(a){
            if(tabContent[a].classList.contains('hide')){
                tabContent[a].classList.remove('hide');
                tabContent[a].classList.add('show');
            }
        }

        info.addEventListener('click', function(e){
            let target = e.target;
            if(target && target.classList.contains('info-header-tab')){
                for(let i = 0; i < tab.length; i++){
                    if(target == tab[i]){
                        hideTabContent(0);
                        showTabContent(i);
                    }
                }
            }
        });

        //Timer

        let deadline = '2019-07-15T14:55:50.417';

        function getTimeRemaining(endTime){
            let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000)%60),
            minutes = Math.floor((t/1000/60)%60),
            hours = Math.floor(t/1000/60/60);

            return {
                'total': t,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }

        function setClock(id, endTime){
            let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval =  setInterval(updateClock, 1000);

            function updateClock(){
                let t = getTimeRemaining(endTime);
                console.log(t.hours.toString().length );
                hours.textContent = t.hours.toString().length == 1 ? '0' + t.hours : t.hours;
                minutes.textContent = t.minutes.toString().length == 1 ? '0' + t.minutes : t.minutes;
                seconds.textContent = t.seconds.toString().length == 1 ? '0' + t.seconds : t.seconds;

                if(t.total < 0){
                    hours.textContent = '00';
                    minutes.textContent ='00';
                    seconds.textContent = '00';
                    clearInterval(timeInterval);
                }
            }
        }

        setClock('timer', deadline);

});