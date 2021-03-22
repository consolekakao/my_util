/**
 *
 * Auth : consolekakao
 * Date : 2021.03.21
 * Description : 배열 소팅
 * parm : Array()
 */

let arr = [2,65,1,85,5,7,9,18];
console.log('Before :: ',arr);
arr = sort(arr);
console.log('after :: ',arr);

function sort(arr){
    for(let i = 0; i<arr.length -1;i++){
        for(let j = i+1;j<arr.length;j++){
            if(arr[j]>arr[i]){   //내림차순은 <
                let temp;
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}