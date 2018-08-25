var views = {
	appendControlPanel: function(){
		var divMain = document.createElement("div")
		divMain.id = COMMAND_PANEL_DOM_ID
		divMain.className = "modal hide in"
		divMain.tabindex = "0"
		divMain['aria-hidden'] = false
		divMain.style.display = "none"

		var bankInfo = getBankAccountAddr()
		var selectIpList = '<select id="' + FIELD_BANK_IP_TARGET + '" class="controls fieldsContent">'
		for(ip in bankInfo){
			selectIpList += '<option value="' + ip + '">' + ip + '</option>'
		}
		selectIpList += '</select>'
		divMain.innerHTML =
			'<div class="widget-title" id="titlebar">' +
				'<h5 id="titletext">' + LANG.CONTROL_PANEL_TITLE + '</h5>' +
				'<span id="' + COMMAND_PANEL_CLOSE_BUTTON_DOM_ID + '" class="btn btn-danger" style="float: right">X</span>' +
				'<span id="' + INFO_ALERT + '" class="btn btn-warning" style="float: right">!</span>' +
		'<span id="' + CREDITS_INFO + '" class="btn btn-info" style="float: right">:)</span>' +
		'<span id="injectjs" class="btn btn-warning" style="float: right">js</span>' +
				'<span id="' + SET_CHAT_PANEL + '" class="btn btn-success" style="color:black">'+'https://discord.gg/Xqd3ZCD'+
			'</div>' +
			'<div id="' + MAIN_SCREEN_DOM_ID + '" class="modal-body" style= "background-color:black" "color:purple" "max-height:405px">' +
				'<div id="' + MESSAGE_CONTAINER + '"></div>' +
				'<table class="table">' +
				'<tbody>' +
				'<tr class="info"><td id="s1">' + 
				'<button id="' + PERFORM_DELETE_SOFTWARE_ID + '" class="btn btn-success">' + LANG.PERFORM_DELETE_SOFTWARE + '</button> '+
				'<button id="' + PERFORM_CHECK_BALANCE_ID + '" class="btn btn-warning">' + LANG.PERFORM_MEDIUM_MISSIONS + '</button> ' +
				'<button id="' + PERFORM_TRANSFER_MONEY_ID + '" class="btn btn-danger">' + LANG.PERFORM_HARD_MISSIONS + '</button>'+
				'<label><input class="checkBoxes" type="checkbox" id=' + SET_MISSIONS_MONITOR + '><span>' + LANG.NOTIFY_MISSIONS + '</span></label>' +
				'<button id="' + PERFORM_BANK_CAMPING + '" class="btn btn-success">' + LANG.INTERCEPT_TRANSACTIONS + '</button>' +
				selectIpList +

				'<label><input class="checkBoxes" id="' + SET_TRANSFER_TO_BTC + '"type="checkbox"><span>' + LANG.TRANSFER_TO_BTC + '</span></label>' +
				'</td></tr>' +

				'<tr class="warning"><td id="s2">' + 
				'<button id="' + SET_CLEAN_OWN_LOGS_DOM_ID + '" class="btn btn-success">' + LANG.CLEAN_OWN_LOGS + '</button> ' +
				'<button id="' + SET_CLEAN_TARGET_LOGS_DOM_ID + '" class="btn btn-success">' + LANG.CLEAN_VICTIM_LOGS + '</button> ' +
				'<button id="' + SET_ACCESS_TARGET_CLEAN_LOGS_DOM_ID + '" class="btn btn-success">' + LANG.ACCESS_CLEAR + '</button> ' +
				'<label><input class="checkBoxes" type="checkbox" id=' + SET_LOGS_MONITOR + '><span>' + LANG.NOTIFY_LOGS + '</span></label>' +
				'</td></tr>' +

				'<tr class="info"><td id="s3">' + 
				'<button id="' + SET_SEARCH_FOR_IPS + '" class="btn btn-success">' + LANG.RUN_WEBCRAWLER + '</button> ' + LANG.WEBCRAWLER_INITIAL_HOSTS + '<input id="' + FIELD_IPS_START_SEARCHING + '" class="controls fieldsContent" placeholder="' + LANG.PASTE_IPS + '" type="text" style="vertical-align: initial; margin-left: 10px; margin-right: 10px; width: 25%">' + 
				'<label><input type="checkbox" class="checkBoxes" id="' + SET_IGNORE_LIST + '">' + LANG.WEBCRAWLER_IGNORE_HOSTS + '<input id="' + FIELD_HOSTS_TO_IGNORE + '" class="controls fieldsContent" placeholder="' + LANG.PASTE_IPS + '" type="text" style="vertical-align: initial; margin-left: 10px; margin-right: 10px; width:25%"></label>' +
				'<label><input class="checkBoxes" type="checkbox" id=' + SET_UPLOAD_MODE + '><span>' + LANG.WEBCRAWLER_UPLOAD_SOFTWARES + '</span><input id="' + FIELD_SOFTWARES_TO_INSTALL + '" class="controls fieldsContent" placeholder="' + LANG.WEBCRAWLER_UPLOAD_SOFTWARE_MODEL + '" type="text" style="vertical-align: top; margin-left: 10px; margin-right: 10px; width:25%"">' + LANG.WEBCRAWLER_UPLOAD_WAIT + '<input id="' + SET_TIME_LIMIT + '" class="controls fieldsContent" placeholder="' + LANG.SECONDS + '" type="text" style="vertical-align: initial; margin-left: 10px; margin-right: 10px; width:12%"></label>' +

				'<label><input class="checkBoxes" id="' + SET_SKIP_AFTER_UPLOAD + '"type="checkbox"><span>' + LANG.WEBCRAWLER_SKIP_AFTER_UPLOAD + '</span></label>' +

				'<label><input class="checkBoxes" id="' + SET_HIDE_MODE + '"type="checkbox"><span>' + LANG.WEBCRAWLER_HIDE_UPLOAD + '</span></label>' +
		'<label><input class="checkBoxes" id="noknown"type="checkbox"><span>Dont attack known ips</span></label>' +
		'<label><input class="checkBoxes" id="noss"type="checkbox"><span>Dont hide on NPCs and seised targets</span></label>' +
				'<label><input class="checkBoxes" type="checkbox" id=' + SET_SIGNATURE + '>' + LANG.WEBCRAWLER_LEAVE_SIGNATURE + '<a href="http://www.symbols-n-emoticons.com/p/facebook-text-art-ascii.html" target="_blank"> ' + LANG.WEBCRAWLER_FIND_SIGNATURE + '</a><textarea id="' + FIELD_SIGNATURE + '" class="controls fieldsContent" style="width: 95%; resize: vertical;"></textarea></label>' +
				'<center><textarea id="' + FIELD_IP_SEARCH_RESULT + '" class="controls fieldsContent" style="width: 95%; resize: vertical;"></textarea>' + 
				'<input id="' + REGEX_INPUT_DOM_ID + '" class="controls fieldsContent" type="search" style="width: 95%;" placeholder="' + LANG.WEBCRAWLER_FILTER_WITH + '"></center>' +
				'</td></tr>' +
				
				'<tr class="warning"><td id="s4">' + 
			'<button id="' + PERFORM_UPDATE_CRACKER + '" class="btn btn-info">' + LANG.UPDATE_CRACKER + '</button> ' +
			'<button id="darktoggle" class="btn btn-info">Toggle dark theme</button> ' +
				'</td></tr>' +

				'</tbody>' +
				'</table>' + 
			'</div>' + 
			'<div id="' + CREDITS_SCREEN_DOM_ID + '" class="modal-body">' +
				'<h1>' + LANG.CREDITS_TITLE + '</h1>' +
				'<div style="font-size: 24px;">' +
				'<a ref="Pornhub.com">Reebok</a> - Remaker/Pornstar'+ '<br />' +
				'<a ref="Pornhub.com">Blaze</a> - Code Editor/Professionial Stoner '+ '<br />' +
				'</div><br />' +
				'<button id="back-to-main" class="btn btn-success">' + LANG.CREDITS_BACK_BUTTON + '</button>'+
			'</div>' + 
			'<div id="' + CHAT_PANEL + '" class="modal-body" style="color:black" style="max-height:405px">' +
				'<h1>https://discord.gg/Xqd3ZCD</h1> ' +
				'<div style="font-size: 24px;">' +
				'</div><br />' +
				'<div class="modal-body">' +
					'<input type="text" class="form-control fieldsContent" style="width: 100%" id="' + CHAT_NICK_NAME + '" placeholder="CLICK ME TO JOIN">&nbsp' +
				 	'<input type="text" class="form-control" style="width: 100%" id="' + CHAT_MESSAGE + '" placeholder="Luso hackers DISCORD" "' + LANG.CHAT_MESSAGE + '">' +
				'</div>' +
				'<div class="btn-group" style="float: right">'+
					'<button type="button" style="color:transparent" style="float: left;" class="btn btn-info" id="' + CHAT_SEND_BUTTON + '">' + LANG.CHAT_SEND + '</button>&nbsp&nbsp' +
		'<button type="button" style="float: left" class="btn btn-default" id="' + CHAT_REFRESH_BUTTON + '">' + LANG.CHAT_REFRESH + '</button> <br />' +
				'</div>' +
				
				'<button id="' + CHAT_TO_MAIN + '" class="btn btn-success">' + LANG.CREDITS_BACK_BUTTON + '</button>'+
		'</div>' +
		'<div id="jspanel" class="modal-body" style="color:black" style="max-height:405px">' +
		'<textarea id="inject" class="controls fieldsContent" style="width: 95%; resize: vertical;"></textarea>' +
		'<button id="applyinject" class="btn btn-success" style="float:center">Apply</button>' +
		'<button id="jstomain" class="btn btn-success" style="float:right">Back</button>' +
			'</div>'+
			'<div class="modal-footer">' +
				'<b>SUBTLE WEBCRAWLER UPDATE ' + "Version " + "0.0.3 BETA" + '</b> (PRIVATE)</a>', +
			'</div>';
		document.getElementsByTagName("BODY")[0].appendChild(divMain);
	},

	showControlPanel: function(){
		var element = document.getElementById(COMMAND_PANEL_DOM_ID)
		if(element){
			element.style.display = "block"
		}
	},

	hideControlPanel: function(){
		var element = document.getElementById(COMMAND_PANEL_DOM_ID)
		if(element){
			element.style.display = "none"
		}
	},

	showBotButton: function(){
		aux = document.createElement("li"); //Create a STOP BOT button
		aux.id = BOT_BUTTON_DOM_ID
		aux.className = "btn btn-danger mission-abort";
		aux.innerHTML = '<a><span id="botButtonContent" class="text" style="color: white;"></span></a>';
		var containerElement = document.getElementsByClassName("nav btn-group")[0]
		containerElement.insertBefore(aux, containerElement.firstChild)
		containerElement.insertBefore(document.createElement("li"), containerElement.firstChild) //Just bypassing a bug
	},

	colorSideBarMenu: function(menu){
		getDOMElement("a", "href", menu, 0, true).style.backgroundColor = "rgb(255, 0, 0)"
	},

	discolorSideBarMenu: function(menu){
		getDOMElement("a", "href", menu, 0, false).style.backgroundColor = null
		getDOMElement("a", "href", menu, 0, true).style.color = "#aaa"
	},

	appendAndShowSuspectAccesses: function(logs){
		var newTextArea = document.createElement("textarea")
		newTextArea.disabled = true
		newTextArea.value = logs
		var container = getDOMElement("form", "action", "logEdit", 0, false)
		container.appendChild(document.createElement("BR"))
		container.appendChild(document.createElement("BR"))
		container.appendChild(newTextArea)
	},

	drawChat: function(data){
		data.reverse()
		var content =  
		'<div class="modal-body" style="max-height:150px" id="chat-div">' +
		  '<table style="border: none;border-spacing: 0;border-collapse: collapse; width:100%;">' +
			'<thead>';
		if((data.length>=50) && (data.isThereError)){
			content = content +
			'<tr>' +
				'<td style="color:yellow; background-color:black">' + LANG.QUANT_MESSAGES_SHOWING + '</td>'
			'</tr>';
		}
		for (var i = 0; i < data.length; i++) {
			var record = data[i].data
			content = content + 
			'<tr>' +
				'<td style="color:#80f980; background-color:black" title="Sent by someone\'s PID ' + record.pid + ' at ' + data[i].date + '">' + "<b>@" + record.scosd + "</b>: "  + record.afn +  '</td>'
			'</tr>';
		};

		content = content + 	  
			'</tbody>' +
		  '</table>' +
		'</div>';

		document.getElementById(CHAT_SEND_BUTTON).disabled = true

		document.getElementById(CHAT_AREA).innerHTML = content;
		var chatdiv = document.getElementById("chat-div")
		chatdiv.scrollTop = chatdiv.scrollHeight
		document.getElementById(CHAT_MESSAGE).value = ""
	},

	switchToMainScreen: function(){
		document.getElementById(CREDITS_SCREEN_DOM_ID).style.display = "none"
		document.getElementById(MAIN_SCREEN_DOM_ID).style.display = "block"
		document.getElementById(CHAT_PANEL).style.display = "none"
		document.getElementById("jspanel").style.display = "none"
	},

	switchToChatPanel: function(){
		document.getElementById(CREDITS_SCREEN_DOM_ID).style.display = "none"
		document.getElementById(MAIN_SCREEN_DOM_ID).style.display = "none"
		document.getElementById(CHAT_PANEL).style.display = "block"
		document.getElementById("jspanel").style.display = "none"
		document.getElementById(CHAT_TO_MAIN).addEventListener("click", views.switchToMainScreen)
	},

	switchToMainScreenToCreditsScreen: function(){
		document.getElementById(CREDITS_SCREEN_DOM_ID).style.display = "block"
		document.getElementById(MAIN_SCREEN_DOM_ID).style.display = "none"
		document.getElementById(CHAT_PANEL).style.display = "none"
		document.getElementById("jspanel").style.display = "none"
		document.getElementById("back-to-main").addEventListener("click", views.switchToMainScreen)
	},
	switchToJS: function () {
		document.getElementById(CREDITS_SCREEN_DOM_ID).style.display = "none"
		document.getElementById(MAIN_SCREEN_DOM_ID).style.display = "none"
		document.getElementById(CHAT_PANEL).style.display = "none"
		document.getElementById("jspanel").style.display = "block"
		document.getElementById("jstomain").addEventListener("click", views.switchToMainScreen)
	}
}