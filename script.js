// Your Script here.

	let lookup = {
		'A': 'N',
		'B': 'O',
		'C': 'P',
		'D': 'Q',
		'E': 'R',
		'F': 'S',
		'G': 'T',
		'H': 'U',
		'I': 'V',
		'J': 'W',
		'K': 'X',
		'L': 'Y',
		'M': 'Z',
		'N': 'A',
		'O': 'B',
		'P': 'C',
		'Q': 'D',
		'R': 'E',
		'S': 'F',
		'T': 'G',
		'U': 'H',
		'V': 'I',
		'W': 'J',
		'X': 'K',
		'Y': 'L',
		'Z': 'M'
	};
function ROT13(encryptedstring) {

	let encrypt = encryptedstring.split(" ");
	let decryptstring =[];
	for(let i=0;i<encrypt.length;i++){

		let encryptedWord = encrypt[i];
		let decrypt ="";
		for(let j=0;j<encryptedWord.length;j++){
			let char = encryptedWord.charAt(j);
			let decode = lookup[char];
			decrypt = decrypt +decode;
			
		}
		decryptstring.push(decrypt);
	}
	return decryptstring.join(" ");
	
}
