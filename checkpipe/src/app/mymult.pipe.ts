import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mymult',
  standalone: true
})
export class MymultPipe implements PipeTransform 
{

  transform(value: number, param:string): any
  {
  // program to check if a number is prime or not

// take input from the user

let isPrime = true;

// check if number is equal to 1
if (value=== 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (value > 1) {

    // looping through 2 to number-1
    for (let i = 2; i <value; i++) {
        if (value % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime)
     {
        console.log(`${value} is a prime number`);
        return "prime";
    } 
    else 
    {
        console.log(`${value} is a not prime number`);
        return "not prime";
    }
}

// check if number is less than 1
else {

  
console.log("The number is not a prime number.");
return "not prime"
}
  }

}
