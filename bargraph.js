

function percentInput(percentage,limitedWidth) {
	if(isNaN(percentage)) {
		return 0;
	} else if (percentage < 0) {
		return 0;
	} else if (percentage > 100) {
		return limitedWidth;
	} else return (percentage / 100) * limitedWidth;
	
	
}

function barSet($bar,adjustedWidth) {
    $bar.width(adjustedWidth);
    
}


function barAdjuster(indexnum, element) {
    
    
    var $this = $(element);
    var value = parseInt($this.val(),10);
    
    var $coloredBar = $this.siblings().find('.coloredBar');
    
    var limitedWidth = $this.siblings('.borderBar').width();
    var adjustedWidth = percentInput(value,limitedWidth);
    barSet($bar,adjustedWidth);
    
}


function graphIt() {
    $allInputs = $('.inputBar');
    $allInputs.each(barAdjuster);
}

function createGraph($element) {
    /* Be sure to set an amount of rows you'll need for this! */

    for (var i=0; i < /* row int */; i++) {
        
        $element.append(
            $('<div/>')
                .append(
                    $('<input/>')
                        .attr('type','text')
                        .addClass('inputBar')
                        .val("0")
                )
                .append(
                    $('<div/>')
                        .addClass('borderBar')
                        .append(
                            $('<div/>').addClass('bar')
                        )
                )
        );
        
    }
}

$('document').ready(function() {
    
    createGraph($('#graph'));
    
    $('#button').click(graphIt);
    
    graphIt();
});