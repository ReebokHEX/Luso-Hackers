var buysv = $jSpaghetti.module("newsv")
buysv.procedure("Buysv", function () {
	goToPage("/hardware?opt=buy");
	if (/enough money/gi.test(getDOMElement("div", "class", "widget-content padding", 0))) return;
	getDOMElement("input", "value", "Buy...", 0).click();
});
