# Simon Memory Game
The Simon electronic memory skill game created using HTML/CSS/JS made during a college assignment for the module CS230 - Web Information Processing.

**The Task:** For this assignment, You are required	to re-create a version of	the	Simon	game as	a	(HTML/CSS/JS)	web	app. You are only	required to	flash the coloured	buttons	in each	 round (no audio signal is required). Your app must	implement the interface shown in Figure 1, and only requires	implementatioon	of the following single-player game	play:

The	Single-Player	Simon	Game	is	as	follows:	
1. Click the START button to begin, the	game status indicator (the red/green light below the START button) switches from RED to GREEN. The game will begin 3s after the light turns GREEN.
2. Simon	will	give	the	first	signal	(randomly	flash	a	coloured	buGon).	Repeat	the	signal	by	clicking	the	same	colour	button.
3. Simon	will	duplicate	 the	first	 signal	and	add	one.	Repeat	 these	 two	 signals	by	clicking	 the	 same	colour	buttons, in order.
4. Simon	will	duplicate	these	first	two	signals	and	add	one.	
5. Continue playing as long as you can repeat each sequence of signals correctly. After the 5th, 9th and 13th signals in a sequence, Simon automatically speeds up the interval between signals.
6. If	 you	 fail	 to	 repeat	 a	 sequence	 exactly,	 or	 if	 you	 take	more	 than	 5	 seconds	 to	 repeat	 a	 signal,	Simon	responds	by	flashing	all	four	buttons simultaneously five times. This means you have lost, and	the	sequence	of	signals	ends.	The	game	status	indicator	switches	from	GREEN	to	RED	and	you	will	have	to	click	START	button to begin a new game.	
7. Your	progress	(the	number	of	correctly	repeated	signals)	for	the	game	just	completed	(last	game)	is	shown	in	the	display	to	the	right	of	the	START	button. The all-time highest score is shown in the display	to	the	left of the START button.

<p align="center">
  <img width="500" height="550" src="https://user-images.githubusercontent.com/61714473/130364454-ebe92f77-2804-4ced-9140-a23be2855d62.PNG">
</p>

**Requirements:**
1. All	game	interface	elements	must	be	generated	using	HTML	elements	 together	with	appropriate	CSS	styling.	Generally,	your	colour	schemes,	must	follow	a	similar	colour	scheme	to	that	shown	in	Figure	 1.	 You	 may	 not	 use	 pre-constructed	 images	 for	 any	 of	 the	 game	 elements.	
2. The	position	of	 the	interactive	and	display	elements	must,	in	general,	be	structured	as	shown	in	Figure	1.	You	cannot	use	another	layer	or	design	for	your	assignment.	
3. The	 font	 family	 used	 is	 “Orbitron”	 and	 you	may	 load	 it	 from	 hGps://fonts.googleapis.com/.	 You	may	not	use	any	other	font	as	part	of	the	display.	
4. You	may	not	use	a	CSS	 framework,	such	as	Bootstrap,	 for	 this	assignment.	You	may,	if	you	wish,	use	the	jQuery	Javascript	framework.	If	you	use	TypeScript,	or	similar,	and	transpire	to	JavaScript,	you	need	to	provide	all	sources.	Your	app	only	needs	to	run	on	a	desktop	browser	such	as	Chrome	-	you	do	not	need	to	ensure	it	works	on	every	browser	(mobile	browsers,	for	example).	
5. You	 must	 comment	 your	 code,	 clearly	 indicaHng,	 how	 your	 code	 implements	 the	 Single-Player	
Simon	game	described	above	in	the	“Assignment	02	-	Requirements”	secHon.	

