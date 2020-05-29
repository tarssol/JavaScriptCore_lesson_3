// Завдання 1

// let num = prompt('Write number');
	
// 	if(num > 0){
// 		console.log(1);
// 	}
	
// 	else if(num < 0){
// 		console.log(-1);
// 	}

// 	else{
// 		console.log(0);
// 	}



// Завдання 2

// let login = 'Admin';
// let password = 'TheMaster';

// let begin = prompt('Who`s this?');

// 	if(begin == login || begin == 'admin'){
// 		let pass = prompt('Password?');

// 		if(pass == 'TheMaster'){
// 			console.log('Welcome');
// 		}

// 		else if(pass == 'Other' || pass == 'other'){
// 			console.log('Wrong password');
// 		}

// 		else{
// 			console.log('Canceled');
// 		}
// 	}

// 	else if(begin == 'Other' || begin == 'other'){
// 		console.log('I don`t know you');
// 	}

// 	else{
// 		console.log('Canceled');
// 	};



//Завдання 3.

let login = 'Admin' && prompt('Who`s there');

switch(login){

	case 'Admin': case 'admin':
	let password = 'TheMaster' && prompt('Password');

		switch(password){

			case 'TheMaster':
			console.log('Welcome');
			break;

			case 'Other':
			console.log('Wrong password');
			break;

			default:
			console.log('Canceled');
			break;
		}
		break;

	case 'Other': case 'other':
	console.log('I don`t know you');
	break;

	default:
	console.log('Canceled');
	break;

}

