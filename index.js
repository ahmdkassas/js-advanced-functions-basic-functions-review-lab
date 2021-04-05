
function saturdayFun(activity){
    if(activity === undefined){
        return "This Saturday, I want to roller-skate!";
    }

    return "This Saturday, I want to " + activity + "!";
    
}

function mondayWork(activity){
    if(activity === undefined){
        return "This Monday, I will go to the office.";
    }

    return "This Monday, I will " + activity + ".";
}

function wrapAdjective(sign){
    return function(adjective){
        if(sign === undefined){
            sign = "*"
        }
    return "You are " + sign + adjective + sign + "!";
    }
}
let Calculator = {
    add : function(num1,num2) {return num1+num2 },
    subtract :function (num1,num2) {
        return num1 - num2
    },
    multiply: function (num1, num2) {
        return num1*num2
    },
    divide: function (num1,num2) {
        return num1/num2
    }

} ;

function actionApplyer(intStart,  [...arrayofFuns]) {
    let result = intStart;
    
    for(let i =0; i < arrayofFuns.length; i++){
      result = arrayofFuns[i](result);
    }
    return result;
  }

