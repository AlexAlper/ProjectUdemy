'use strict';

   var money =  +prompt("Ваш бюджет в месяц?");
   var time =  prompt("Введите дату в формате YYYY-MM-DD");
   var questionOne = prompt("Введите обязательную статью расходов в этом месяце");
   var answerOne = +prompt("“Во сколько обойдется?”");
   var questionTwo = prompt("Введите обязательную статью расходов в этом месяце");
   var answerTwo = +prompt("“Во сколько обойдется?”");

   var appData = {
        money: money,
        timeData: time,
        expenses: {
             questionOne: answerOne,
             questionTwo: answerTwo
        },
        optionalExpenses: 0,
        income: 0,
        saving: false
   }
   var a = appData.money - appData.expenses.questionOne - appData.expenses.questionTwo;
     
    alert("Бюджет на 1 день: " + a/30);