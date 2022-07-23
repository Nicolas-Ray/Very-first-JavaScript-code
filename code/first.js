'use strict';

let user = prompt('Who is it?', '');
let passowrd = '';
if (user == 'admin') {
    passowrd = prompt('What is password?', '');
    if (passowrd == '123') {
        alert( 'Access is allowed!' );
    } else if (passowrd == 'cancel') {
        alert( 'canceled' );
    } else{
        alert( 'Invalid answer!' );
    }
} else if (user == 'canceled') {
    alert( 'canceled' );
} else {
    alert( 'Invalid user!' );
}
