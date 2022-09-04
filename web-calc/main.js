$(function(){

$('button').on('click', function(){

let num1 = Number($('#num1').val());
let num2 = Number($('#num2').val());


let operator = $(this).attr('id').split('-')[1];

switch ( operator ){
case 'add':

$('#box').text(num1 + num2);
break;
case 'sub':
$('#box').text(num1 - num2);
break;
case 'mul':
$('#box').text(num1 * num2);
break;
case 'div':
$('#box').text(num1 / num2);
break;
}
});
});