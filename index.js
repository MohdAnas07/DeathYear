// let name = document.getElementById('name');

submit = document.getElementById('submit');

submit.addEventListener('click', () => {

    let date = new Date();

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    console.log(name);
    console.log(age);
    let ch1 = document.getElementById('checkbox-1').checked;
    let ch2 = document.getElementById('checkbox-2').checked;
    let ch3 = document.getElementById('checkbox-3').checked;
    let ch4 = document.getElementById('checkbox-4').checked;
    let ch5 = document.getElementById('checkbox-5').checked;
    let ch6 = document.getElementById('checkbox-6').checked;
    let ch7 = document.getElementById('checkbox-7').checked;
    let deathYear = date.getFullYear() + Math.floor((Math.random() * 5) + 1) + 60 - age;

    if (ch1)
        deathYear += Math.floor((Math.random() * 5) + 10);
    if (ch2)
        deathYear += Math.floor((Math.random() * 5) + 7);
    if (ch3)
        deathYear -= Math.floor((Math.random() * 5) + 15);
    if (ch4)
        deathYear -= Math.floor((Math.random() * 5) + 6);
    if (ch5)
        deathYear -= Math.floor((Math.random() * 6) + 1);
    if (ch6)
        deathYear += Math.floor((Math.random() * 6) + 1);
    if (ch7)
        deathYear += Math.floor((Math.random() * 5) + 5);

    if(name.length > 0){
        console.log("the submit has been collect !");
        if (deathYear < 2040)
            document.getElementById('result').innerHTML = "Hello, " + name + "<br> Please take Care of yourself !!!<br>You will be Die soon in " + deathYear;
        else
            document.getElementById('result').innerHTML = "Hello, " + name + "<br> You will be Die in " + deathYear;
    }
    else{
        document.getElementById('result').innerHTML ="Hello, Please Enter Your Name and given details !!!" 
    }
});
