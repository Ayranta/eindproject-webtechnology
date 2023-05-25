function toonDino1(idpostcode, iduitgave1){
	let postcode = document.getElementById(idpostcode).value;
	let gemeente
	let uitgave = document.getElementById(iduitgave1);
	switch(postcode){
	case "Brachiosaurus": gemeente = "Brachiosaurus: 1";
	uitgave.style.color = "white";
	uitgave.borderStyle = "solid";
	break;
	case "Dilophosaurus": gemeente = "Dilophosaurus: 2";
	uitgave.style.color = "white";	
	uitgave.borderStyle = "solid";
	break;
	case "Stegosaurus": gemeente = "Stegosaurus: 3";
	uitgave.style.color = "white";
	uitgave.borderStyle = "solid";
	break;
	default: gemeente = "Kon Dino niet vinden!"
	uitgave.style.color = "red";
	}
	uitgave.textContent = gemeente ;
}

function toonDino2(idpostcode, iduitgave){
	let postcode = document.getElementById(idpostcode).value;
	let gemeente
	let uitgave = document.getElementById(iduitgave);
	switch(postcode){
	case "Brachiosaurus": gemeente = "Brachiosaurus: 1";
	uitgave.style.color = "white";
	uitgave.borderStyle = "solid";
	break;
	case "Dilophosaurus": gemeente = "Dilophosaurus: 2";
	uitgave.style.color = "white";	
	uitgave.borderStyle = "solid";
	break;
	case "Stegosaurus": gemeente = "Stegosaurus: 3";
	uitgave.style.color = "white";
	uitgave.borderStyle = "solid";
	break;
	default: gemeente = "Kon Dino niet vinden!"
	uitgave.style.color = "red";
	}
	uitgave.textContent = gemeente ;
}

function toonLeeftijd(idleeftijd, iduitgave2){
	let leeftijd = document.getElementById(idleeftijd).value;
	let toegestaan
	let uitgave = document.getElementById(iduitgave2);

	if (idleeftijd <= 6) {
		toegestaan = "Nee sorry je mag niet binnen."
	}else{
		toegestaan = "Ja kom maar af."
	}

	uitgave.textContent = toegestaan ;
}