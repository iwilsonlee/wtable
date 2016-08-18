/**
 * The web componet wtable.
 * Depend on above jquery1.6.1
 * useage:  Reference this js file before the </head> tag.
 */
function altRows(table){
	if(document.getElementsByTagName){  
		
		var rows = $(table).find("tr"); 
		 
		for(var i = 0; i < rows.length; i++){          
			if(i % 2 == 0){
				$(rows[i]).addClass("evenrowcolor");
			}else{
				$(rows[i]).addClass("oddrowcolor");
			}    
			if(i!=0){
				$(rows[i]).attr("onmouseover","$(this).addClass('focusrowcolor')");
				$(rows[i]).attr("onmouseout","$(this).removeClass('focusrowcolor')");
			}
		}
	}
}

$(document).ready(function(){
	var tables = $(".altrowstable");
	for(var i=0; i<tables.length; i++){
		 altRows(tables[i]);
	}
});
