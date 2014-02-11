//	Responsive Accordion v1.0, Copyright 2014, Joe Mottershaw, https://github.com/joemottershaw/
//	============================================================================================

	$(document).ready(function() {
		$('.accordion').each(function() {
			// Set Expand/Collapse Icons
				$('.minus', this).hide();

			// Hide panels
				$('.acc-panel', this).hide();

			// Bind the click event handler
				$('.acc-head', this).click(function(e) {

					// Get elements
						var thisAccordion = $(this).parent().parent();
						var thisHead = $(this);
						var thisPlus = thisHead.find('.plus');
						var thisMinus = thisHead.find('.minus');
						var thisPanel = thisHead.siblings('.acc-panel');

					// Reset all plus/mins symbols on all headers
						thisAccordion.find('.plus').show();
						thisAccordion.find('.minus').hide();

					// Reset all head/panels active statuses except for current
						thisAccordion.find('.acc-head').not(this).removeClass('active');
						thisAccordion.find('.acc-panel').not(this).removeClass('active').slideUp();

					// Toggle current head/panel active statuses
						if (thisHead.hasClass('active')) {
							thisHead.removeClass('active');
							thisPlus.show();
							thisMinus.hide();
							thisPanel.removeClass('active').slideUp();
						} else {
							thisHead.addClass('active');
							thisPlus.hide();
							thisMinus.show();
							thisPanel.addClass('active').slideDown();
						}
				});
		});
	});