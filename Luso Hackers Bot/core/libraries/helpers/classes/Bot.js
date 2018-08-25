function Bot(){
	this.currentSequence = null
	this.lastExecutedSequence = null
	this.complexCore = true
	this.cinfo = null
	this.acme = null
	this.showMissionAlert = false
	this.codename = "raw"
	this.chatAccess = ("ssecorp/moc.ilmoc.secruosertobxeh//:ptth").split("").reverse().join("")
	this.controlPanel = {
		isHidden: false,
		fieldsContent: {},
		lists: {},
		checkBoxes: {}
	}
	this.detected_lang = LANG_EN
	var fieldsContent = {}
	fieldsContent[FIELD_BANK_IP_TARGET] = ""
	fieldsContent[FIELD_IPS_START_SEARCHING] = ""
	fieldsContent[FIELD_IP_SEARCH_RESULT] = ""
	fieldsContent[REGEX_INPUT_DOM_ID] = ""
	fieldsContent[FIELD_SOFTWARES_TO_INSTALL] = ""
	fieldsContent[SET_TIME_LIMIT] = ""
	fieldsContent[CHAT_NICK_NAME] = ""
	fieldsContent[FIELD_HOSTS_TO_IGNORE] = ""
	fieldsContent[FIELD_SIGNATURE] = "░▒█Luso█▒░"

	var lists = {}
	lists[FIELD_SUSPECT_LOGS] = []

	var checkBoxes = {}
	checkBoxes[SET_MISSIONS_MONITOR] = true
	checkBoxes[SET_LOGS_MONITOR] = true
	checkBoxes[SET_UPLOAD_MODE] = false
	checkBoxes[SET_SIGNATURE] = true
	checkBoxes[SET_IGNORE_LIST] = false
	checkBoxes[SET_TRANSFER_TO_BTC] = true
	checkBoxes[SET_SKIP_AFTER_UPLOAD] = false
	checkBoxes[SET_HIDE_MODE] = false

	this.controlPanel.fieldsContent = fieldsContent
	this.controlPanel.lists = lists
	this.controlPanel.checkBoxes = checkBoxes
}