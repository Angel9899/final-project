function makeMealPlan(){
   

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var goal = document.getElementById('goal').value;

    if (!validateEmail){
        alert('email is invaild');
        return;
    }

    var mealplan = '<h2>This meal plan is for' + name + '</h2>';
    mealplan += '<p>email: ' + email + '</p>';
    mealplan += '<p>goal:'+ goal +'</p>';
    mealplan += '<h3>Weekly meal plan</h3>'
    mealplan += '<ul>';
    mealplan += '<li><strong> Monday:</strong> Breakfeast:' + document.getElementById('mondayBreakfast').value  + ', Snack: ' + document.getElementById('mondaySnack').value + ', Lunch:' + document.getElementById('mondayLunch').value + ', Snack:' + document.getElementById('mondaySnack2').value + ', Dinner:' + document.getElementById('mondayDinner').value + '</li>';
    
    var mealPlanPage = window.open('', '_blank');
    mealPlanPage.document.write(mealplan);
    mealPlanPage.document.close();

}

function displayMealPlan(){
    window.print()
}

function validateEmail(){
    var regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);

}

displayMealPlan();