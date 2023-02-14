//1
    var n1 = 5
    var n2 = 5
    if(n1 === n2){
        console.log('BOOM');
    } else
        console.log('TRY AGAIN') ;
//2
    var schum = n1 + n2
    console.log(schum) ;
//3
    var machpela = n1 * n2 
    console.log(machpela);
//4
    var Wday = 5
    var greeting = Wday === 1 ?  'Good Week' : (Wday > 1 && Wday < 5) ? 'Good Day' : (Wday >= 5 && Wday <= 7) ? 'Happy Weekend!' :  'Day is not aplicable';
    console.log(greeting);
//5
    var Mday = 10 
    if (Mday === 1){
        console.log('Good Month');
    } else if(Mday > 1 && Mday < 10){
                console.log('Start Work');
            } else if(Mday === 10){
                        console.log('Get Salary');
                    }
    if(Mday >= 11 && Mday < 20){
        console.log('Be Happy');
    } else if(Mday >= 20 && Mday <= 30){
                console.log('The End');
            }
    if(Mday === 31){
        console.log('BOOM BOOM');
    }
//6
    var holiday = 'suckot'

    if(typeof holiday === 'string'){
        if(holiday === 'purim'){
            console.log('Happy Purim');
        } else if(holiday === 'passover'){
                    console.log('clear home');
                }
        else if(holiday === 'shavoout'){
                console.log('eat Milk');
                }
        else if(holiday === 'suckot'){
                console.log('build Sucka');
                }   
    } else 
        console.log('not a holiday');
//7
    var player1_name = 'Shlomi'
    var player1_score = 120
    var player2_name = 'Nati'
    var player2_score = 240

    if(player1_score > player2_score){
        console.log(player1_name , player1_score);
    } else
        console.log(player2_name , player2_score) ;
//8
    var number = 6
    if(number % 2 == 0){
        console.log('Even')
    } else
        console.log('Uneven')
//9
    var bigger_n1 = 10
    var bigger_n2 = 8

    if(bigger_n1 > bigger_n2){
        console.log(bigger_n1)
    } else 
        console.log(bigger_n2);
//10
    var avg_n1 = 1
    var avg_n2 = 2
    var avg_n3 = 3
    var avg_n4 = 4
    var avg_n5 = 5
    var avg_n6 = 6
    var avg_n7 = 7
        var avg_result = (avg_n1+avg_n2+avg_n3+avg_n4+avg_n5+avg_n6+avg_n7)/7;
        console.log(avg_result);
//11
    var name = 'Ravid';
    var age = 26;
    var running_km = 35
    if(age >= 30 && age <= 50){
        if(running_km > 30 && running_km <=50){
            console.log(name , age , 'אתה בכושר מעולה')
        } else if(running_km >= 10 && running_km <= 30){
            console.log(name , age , 'אתה בכושר טוב')
        }
        else if(running_km > 0 && running_km < 10){
            console.log(name , age , 'חייב להשתפר')
        }
    }
    if(age >= 18 && age <= 30){
        if(running_km >= 25 && running_km <=50){
            console.log(name , age , 'אתה בכושר מעולה')
        } else if(running_km < 25){
                    console.log(name , age , 'יש מקום לשיפור')
                }
    }
//12 
    var hour = 20
    if(hour >= 5 && hour < 24){
        if(hour >=5 && hour <=11){
            console.log('בוקר טוב');
        } else if(hour >= 12 && hour <= 17){
                    console.log('צהריים טובים');
                }
                else if(hour >= 18 && hour <= 23){
                        console.log('ערב טוב');
                    }
    }  else
        console.log('Please enter Time between 5-23');





