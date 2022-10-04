


    var addBtn = document.querySelector('#add');
    //console.log(addBtn);

    var textBox1 = document.querySelector('#txt1');
    var textBox2 = document.querySelector('#txt2');
    var textBox3 = document.querySelector('#txt3');
    var textBox4 = document.querySelector('#txt4');
    var textBox5 = document.querySelector('#txt5');
    var textBox6 = document.querySelector('#txt6');

    var msg1 = document.querySelector('#err1');
    var msg2 = document.querySelector('#err2'); 
    var msg3 = document.querySelector('#err3');
    var msg4 = document.querySelector('#err4');
    var msg5 = document.querySelector('#err5');
    var msg6 = document.querySelector('#err6');


    msg1.style.display = 'none';
    msg2.style.display = 'none';
    msg3.style.display = 'none';
    msg4.style.display = 'none';
    msg5.style.display = 'none';
    msg6.style.display = 'none';

    addBtn.onclick = function() {
        msg1.style.display=(textBox1.value == '' || isNaN(textBox1.value))?'block':'none';
        msg2.style.display=(textBox2.value == '' || isNaN(textBox2.value))?'block':'none';
        msg3.style.display=(textBox3.value == '' || isNaN(textBox3.value))?'block':'none';
        msg4.style.display=(textBox4.value == '' || isNaN(textBox4.value))?'block':'none';
        msg5.style.display=(textBox5.value == '' || isNaN(textBox5.value))?'block':'none';
        msg6.style.display=(textBox2.value == '' || isNaN(textBox6.value))?'block':'none';


        var a= document.querySelector('#txt1').value;
        a=parseFloat(a);

       // console.log(a);
        
        var b= document.querySelector('#txt2').value;
        b=parseFloat(b);

        //console.log(b);
    
        var c= document.querySelector('#txt3').value;
        c=parseFloat(c);

        //console.log(c);
    
        var d= document.querySelector('#txt4').value;
        d=parseFloat(d);

        //console.log(d);
    
        var e= document.querySelector('#txt5').value;
        e=parseFloat(e);

       // console.log(e);
    
        var f= document.querySelector('#txt6').value;
        f=parseFloat(f);





        var total = a + b + c + d + e + f;
        console.log(total);

        var percentage = (total/600)*100;


        if(percentage <= 100 && percentage >= 70){

            document.querySelector('#para').innerHTML=
            `Percentage = <mark style="color: white; background-color:green" > ${percentage}% </mark><br>
            Total Marks = ${total} <br>
            Grade=A`;
        
            
          }else if (percentage <= 69 && percentage >=50){
        
            document.querySelector('#para').innerHTML=
                    `Percentage = <mark style="color: white; background-color:green" > ${percentage}% </mark><br>
                    Total Marks = ${total}<br>
                    Grade=B`;
        
            
          }else if(percentage <= 49 && percentage >=35){
        
            document.querySelector('#para').innerHTML=
                    `Percentage = <mark style="color: white; background-color:green" > ${percentage}% </mark><br>
                    Total Marks = ${total}<br>
                    Grade=C`;
            
          }else{
            
            document.querySelector('#para').innerHTML=
                    `Percentage = <mark style="color: white; background-color:red" > ${percentage}% </mark><br>
                    Total Marks = ${total}<br>
                    Grade=D`;
        
          }


            var xValues = ["English", "Maths", "Science", "SS", "Marathi","Gujrati"];
            var yValues = [a,b,c,d,e,f]; 
            var barColors = [
            "#b91d47",
            "#00aba9",
            "#2b5797",
            "#e8c3b9",
            "#1e7145"
            ];

            new Chart("myChart", {
                type: "pie",
                    data: {
                        labels: xValues,
                        datasets: [{
                        backgroundColor: barColors,
                        data: yValues
                        }]
                    },
            
            });

        
        

    }




