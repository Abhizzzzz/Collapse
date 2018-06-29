$(document).ready(() =>{
	//declaring counter as even number
	let count = 2;
	$("button").click(() =>{
		//Incrementing the counter
		count++;
		//Applied even odd logic,if counter is odd  p is shown,for even its hidden
		if(count % 2 != 0){
			 $("p").show();
		}
		else{
			 $("p").hide();
		}
	});
})