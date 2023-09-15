// let age = 16;
// let hasVoterCard = 'Yes';

// if (age>=14){
//     if(hasVoterCard="Yes"){
//         alert("You can vote..!")
//     }
//     else{
//         alert("You can get your voter id card")
//     }
// }
// else{
//     alert("You can not vote.")
// }



// let isLoggedIn=1; 

// if(isLoggedIn==0){
//     alert('login');
// }
// else{
//     alert('log out');
// }



let input='no';

switch(input){
    case 1: //if(input===1)
        document.write('Continue..');
        break;
    case 'y': //if(input==='y')
        document.write('Continue');
        break;
    case 'yes':
        document.write('Continue');
        break;
    case 0:
        document.write('End');
        break;
    case 'n':
        document.write('End');
        break;
    case 'no':
        document.write('End');
        break;
    default:
        document.write('Wrong input');
}
