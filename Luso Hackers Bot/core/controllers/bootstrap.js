var controllers = {}

controllers.storage = new Storage(BOT_STORAGE_NAME)
var storageContent = controllers.storage.get(function(storageContent){
	if (storageContent){
		controllers.bot = storageContent
	} else { 
		controllers.bot = new Bot()
	}
	//It checks if the current page is a regular page game
	var regularPageId = document.getElementById("header")
	var isRegularPage = (regularPageId) && (regularPageId.innerHTML.indexOf('<a href="#">Hacker Experience</a>') >= 0)
	controllers.isRegularGamePage = false
	if (getDOMElement("li", "class", "link  active", 0))
	{
		if (/NMAP/gi.test(getDOMElement("li", "class", "link  active", 0).innerHTML))
		{
			var ndump = document.createElement("BUTTON");
			ndump.id = "nmapdump";
			ndump.innerText = "Turn NMAP to webcrawler";
			getDOMElement("li", "class", "link  active", 0).appendChild(ndump);
			ndump.addEventListener("click", () => {
				var text = getDOMElement("div", "class", "widget-content padding", 0).innerHTML;
				text = text.replace(/IP/g, "");
				text = text.replace(/[\[\]']+/g, '');
				var elements = [];
				var tarray = text.split("\n");
				for (i = 0; i < tarray.length; i++) {
					elements.push(tarray[i].split("connected")[0]);
				}
				document.getElementById("ips-start-seaching").value = elements.join(",");
			});
		}
	}
	if (document.URL == "https://en.hackerexperience.com/hardware" || document.URL == "https://www.hackerexperience.com/hardware" || document.URL == "https://br.hackerexperience.com/hardware")
	{
		var bsv = document.createElement("BUTTON");
		bsv.id = "upgradebutton";
		bsv.innerText = "Buy and upgrade a new server";
		getDOMElement("li", "class", "link active", 0).appendChild(bsv);
		bsv.addEventListener("click", () => {
			controllers.functions.executeSequence("newsv", "buyserver");
		});
	}
	if (isRegularPage){ 
		controllers.isRegularGamePage = true
		
		functions()
		controlPanel()
		buttonToAction()
		botButton()

	}

	bootstrap(function(){
		if(isRegularPage){
			//---------------------------------------------------------------------------//
			//--Put here things that must happen just before the start of the sequences--//
			//---------------------------------------------------------------------------//
			controllers.functions.activeButtons(true)



			//Sequences are started
			sequences()
		} else {
			var botkit = $jSpaghetti.module("botkit").sequence("run")
			botkit.reset(function(sequence){
				botkit.run()
			})
		}
		
	})

		
})



