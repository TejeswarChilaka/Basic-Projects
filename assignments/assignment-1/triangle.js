/*function sidesArea(a, b, c) {
    let s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }
    
    let a = 2;
    let b = 3;
    let c = 4;
    let area = sidesArea(a, b, c);
    document.write(area);
  */  

    
const table =(num,upto)=>{
    for(let i=1; i<=upto; i++){
      let  f = `${num}*${i}=${num*i}` ;
        document.write(f+" ");
        document.write("<br>");
    }
}
table(4,15);


/*
const grade = (marks)=>{
    if(marks>=90 && marks<=100){
        return "Excellent"
    }else if (marks>=80){
        return "Great"
    }else if (marks>=70){
        return "Good"
    }else if (marks>=60){
        return "Average"
    }else if (marks>=50){
        return "Not Bad"
    }else {
        return "Fail"
    };
    
}
document.write(grade(95));*/



const isPrime = n =>{
    let flag =0;
    for(let i=2;i<n;i++){
        if (n %i == 0){
            flag++
        }
        
    }
   return flag != 0 ?flase: true;
};