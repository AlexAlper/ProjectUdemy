let money, time;


function start() {
     money = +prompt("Ваш бюджет на месяц?", '');
     time = prompt('Введите дату в формате YYYY-MM-DD', '');
     
     while(isNaN(money) || money == null || money == ""){
          money = +prompt("Ваш бюджет на месяц?", '');
     }
}

start();

let appData = {
	budget: money,
     expenses: {},
     optionalExpenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
     savings: true,
     chooseExpenses: function(){
          for(let i = 0; i < 2; i++){
               let  a = prompt("Введите обязательную статью расходов в этом месяце"),
                    b = +prompt("Во сколько обойдется?");
                    if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a!= '' && b!= '' && a.length < 50){
                         console.log('done');
                         appData.expenses[a] = b;
                    } else {
                         i--;
                    }
                    
          }
     },
     chooseOptExpenses: function(){
          
          for(let i = 0; i < 3; i++){
               let  a = prompt("Статья необязательных расходов?");
                    if(typeof(a) === 'string' && typeof(a) != null  && a!= ''&& a.length < 50){
                         console.log('done');
                         appData.optionalExpenses[i] = a;
                    } else {
                         i--;
                    }
                    
          }
     },
     detectDayBudget: function(){
          appData.moneyPerDay = appData.budget/30;
          alert(appData.moneyPerDay);
     },
     detectLevel: function() {
          if(appData.moneyPerDay < 100) {
               console.log('Минимальный')
          } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000){
               console.log('Normal');
          } else if (appData.moneyPerDay > 1000){
               console.log('Big');
          } else {
               console.log('error');
          }
     },
     checkSavings: function(){
          if(appData.savings){
               let save = +prompt('Сумма накопленний'),
                   percent = +prompt('Под какой процент?');

                   appData.monthIncome = save/100/12*percent;
                   alert('Доход с вложения: ' + appData.monthIncome);
          }
     },
     chooseIncome: function() {
          let items = prompt('Что принесет доп. доход? (через запятую)');
          while(typeof(items) != "string" || items == null || items == ''){
               items = prompt('Что принесет доп. доход? (через запятую)');
          }
          appData.income = items.split(", ");
          appData.income.forEach(function(item, key){
               alert(key+1 + " :" + item);
          }
               
          );
     },
     allAppData: function() {
          for(let prop in appData){
               console.log(prop + " : " + appData[prop]);
          }
     }
};

appData.allAppData();






