//1
function stepen(num, i,index=0){
    if(index >=i){
        return 1;
    }

    return num *stepen(num, i, index+1)
}

console.log(stepen(2,3));

//2
let numbers = [2,3,4,4,5,5,5,5,5,2,3,4,4,5,5,5,5,5,2,3,4,4,5,5,5,5,5,2,3,4,4,5,5,5,5,5,2,3,4,4,5,5,5,5,5,2,3,4,4,5,5,5,5,5,];

function sum(numbers, index=0){
    if(index>=numbers.length){
        return 0;
    }

    return numbers[index] + sum(numbers, index+1);
}

console.log(sum(numbers));

//3
let numbers2 = [2,3,4,4,5,5,5,5,5,2,3,4,4,5,5,5,5,5,2,3,4,4,5,5,5,5,5,2,700,4,4,5,5,5,5,5,2,1,4,4,5,5,5,5,5,2,3,4,4,5,5,5,5,];

function poisk(numbers, max = 0,  index=0){
    if(index>=numbers.length){
        return max;
    }
    if(numbers[index]>max){
        max=numbers[index];
    }

    return poisk(numbers, max, index+1);
}

console.log(poisk(numbers2));