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
	savings: false
};



chooseExpenses();
chooseOptExpenses();
detectDayBudget();
detectLevel();

function chooseExpenses(){
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
}

function chooseOptExpenses(){
     for(let i = 0; i < 3; i++){
          let  a = prompt("Статья необязательных расходов?");
               if(typeof(a) === 'string' && typeof(a) != null  && a!= ''&& a.length < 50){
                    console.log('done');
                    appData.optionalExpenses[i] = a;
               } else {
                    i--;
               }
               
     }
}

function detectDayBudget(){
     appData.moneyPerDay = appData.budget/30;
     alert(appData.moneyPerDay);
}

function detectLevel(){
     if(appData.moneyPerDay < 100) {
          console.log('Минимальный')
     } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000){
          console.log('Normal');
     } else if (appData.moneyPerDay > 1000){
          console.log('Big');
     } else {
          console.log('error');
     }
}





