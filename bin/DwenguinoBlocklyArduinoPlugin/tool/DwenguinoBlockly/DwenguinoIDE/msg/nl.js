var MSG = {
  title: "DwenguinoBlockly",
  blocks: "Blokken",
  linkTooltip: "Opslaan en koppelen naar blokken.",
  runTooltip: "Voer het programma uit dat met de blokken in de werkruimte is gemaakt.",
  loadBlocksFileTooltip: "Laad een block bestand in dat je eerder hebt opgeslagen.",
  saveBlocksFileTooltip: "Sla de blokken op naar een lokaal bestand.",
  toggleSimulator: "Open of sluit het simulatorvenster.",
  badCode: "Programmafout:\n%1",
  timeout: "Het maximale aantal iteraties is overschreden.",
  trashTooltip: "Alle blokken verwijderen",
  catLogic: "Logica",
  catLoops: "Lussen",
  catMath: "Formules",
  catText: "Tekst",
  catLists: "Lijsten",
  catColour: "Kleur",
  catVariables: "Variabelen",
  catFunctions: "Functies",
  catArduino: "Arduino",
  catDwenguino: "Dwenguino",
  catBoardIO: "IO",
  listVariable: "lijst",
  textVariable: "tekst",
  httpRequestError: "Er is een probleem opgetreden tijdens het verwerken van het verzoek.",
  linkAlert: "Deel uw blokken via deze koppeling:\n\n%1",
  hashError: "\"%1\" komt helaas niet overeen met een opgeslagen bestand.",
  xmlError: "Uw opgeslagen bestand kan niet geladen worden. Is het misschien gemaakt met een andere versie van Blockly?",
  badXml: "Fout tijdens het verwerken van de XML:\n%1\n\nSelecteer \"OK\" om uw wijzigingen te negeren of \"Annuleren\" om de XML verder te bewerken.",
  pressed: "INGEDRUKT",
  setup: "zet klaar",
  loop: "herhaal",
  dwenguino_main_program_structure: "Het eerste stukje code wordt maar een keer uitgevoerd bij het starten van het programma. De code in de 'herhaal' wordt steeds opnieuw herhaalt tot het programma stopt (bv. wanneer je de stekker uit het bordje trekt).",
  catDwenguino: "Dwenguino",
  delay_help: "Wacht een opgegeven aantal miliseconden. (1 miliseconde = 1000 seconden)",
  delay: "wacht",
  clearLCD: "maak lcd-scherm leeg",
  dwenguinoLCD: "lcd-scherm %1 %2 %3 schrijf tekst: %4 op rij %5 vanaf kolom %6",
  pin: "pin",
  toneOnPin: "speel toon af op ",
  frequency: "met frequentie",
  noToneOnPin: "stop toon op",
  toneOnPinTooltip: "Speel een toon met een specifieke frequentie af op een pin",
  noToneOnPinTooltip: "stop toon op bepaalde pin",
  trig: "trig pin nummer",
  echo: "echo pin nummer",
  sonarTooltip: "Deze blok leest de afstand in van een sonar sensor",
  miliseconds: "ms",
  digitalRead: "lees digitale waarde van",
  digitalWriteToPin: "schrijf op",
  digitalWriteValue: "de digitale waarde",
  digitalWriteTooltip: "schrijf hoog of laag naar een pin van de Dwenguino",
  digitalReadTooltip: "lees een digitale waarde (1/hoog of 0/laag) vanaf een bepaalde pin",
  high: "HOOG",
  low: "LAAG",
  highLowTooltip: "Komt overeen met een hoge (1) of lage (0) waarde op een pin.",
  tutsIntroduction: "Introductie",
  tutsTheremin: "Theremin",
  tutsRobot: "Robot",
  tutsBasicTest: "Basis test",
  tutsHelloDwenguino: "Hallo Dwenguino!",
  tutsBlinkLED: "Knipperlicht",
  tutsHelloRobot: "Rijdende Robot",
  tutsLedOnButtonPress: "LED bij knop ingedrukt",
  tutsBitPatternOnLeds: "Bit patroon op leds",
  tutsAllButtons: "Alle knoppen",
  tutsDriveForward: "Vooruit rijden",
  tutsRideInSquare: "In vierkant rijden",
  tutsRideToWall: "Naar muur rijden",
  tutsAvoidWall: "Muur ontwijken",
  tutsNameOnLcdBasic: "Je naam op het LCD-scherm",
  simulator: "Simulator",
  setLedState: "zet %1 %2",
  setLedStateTooltip: "Zet een LEdwenguinoDCMotorBlock op het arduino bord aan of uit",
  ledPinsTooltip: "Kies een LED die je aan of af wil zetten",
  dwenguinoOn: "AAN",
  dwenguinoOff: 'UIT',
  dwenguinoOnOffTooltip: "Selecteer AAN of UIT",
  dwenguinoServoBlock: "servo motor %1 %2 %3 nummer %4 hoek %5",
  dwenguinoServoBlockTooltip: "Stel servo 1 of 2 in op een door jou gekozen hoek tussen 0 en 180 graden",
  dwenguinoDCMotorBlock: "dc-motor %1 %2 %3 nummer %4 snelheid %5",
  dwenguinoDCMotorBlockTooltip: "Stel de snelheid in van een van de twee motoren aangesloten op de Dwenguino. De snelheid is een waarde tussen -255 (volledige snelheid achteruit) en 255 (volledige snelheid vooruit)",
  dwenguinoAnalogWrite: "schrijf naar %1 de analoge waarde %2",
  dwenguinoAnalogWriteTooltip: "Schrijf een analoge waarde tussen 0 en 255 naar de opgegeven pin",
  dwenguinoAnalogRead: "lees analoge waarde van %1",
  dwenguinoAnalogWriteTooltip: "Lees een analoge waarde tussen 0 en 255 van de opgegeven pin",
  digitalReadSwitch: "lees waarde knop %1",
  digitalReadSwitchTooltip: "lees de waarde van een van de dwenguino knoppen",
  north: "NOORD",
  east:"OOST",
  south: "ZUID",
  west: "WEST",
  center: "CENTER",
  ledsReg: "leds",
  dwenguinoLedsRegTooltip: "Met deze blok kan je leds 0 tot 7 met één binair getal aan of af zetten. Bijvoorbeeld: 0b00001111 zal leds 0 tot 3 aanzetten en de rest uit.",
  pressed: "INGEDRUKT",
  notPressed: "NIET INGEDRUKT",
  pressedTooltip: "Stelt de waarde van de knop voor. Vergelijk deze waarde met de waarde die je leest van een bepaalde knop.",
  sureYouWantToChangeTutorial: "Ben je zeker dat je dit boek wil starten?\n De blokken op het huidige werkblad zullen vervangen worden!",
  create: "Maak",
  with_type: "met type",
};

MSG.simulator = {
  start: "Start",
  stop: "Stop",
  pause: "Pauze",
  step: "1 Stap",
  speed: "Snelheid",
  speedVerySlow: "40 keer trager",
  speedSlow: "20 keer trager",
  speedMedium: "10 keer trager",
  speedFast: "5 keer trager",
  speedVeryFast: "2 keer trager",
  speedRealTime: "Real-time",
  components: "Selecteer onderdelen",
  servo: "Servo",
  motor: "Motor",
  scope: "Waarden",
  alertDebug: "Stop de simulatie voordat je terug kan programmeren",
  distance: "afstand",
  scenario: "Scenario",
  scenario_default: "Normale bord",
  scenario_moving: "Bewegende robot",
  scenario_wall: "Bewegende robot met muur",
  scenario_spyrograph: "Spyrograaf",
  code: "Code",
};

MSG.tutorials = {
    introduction: {},
    theremin: {},
    robot: {},
    basic_test: {},
    hello_dwenguino: {},
    blink: {},
    hello_robot: {},
};

MSG.tutorials.general = {
  sureTitle: "Ben je zeker?",
  sureText: "Wanneer je op 'Volgende' klikt dan worden de blokken op het werkblad vervangen.",
};

MSG.tutorials.introduction = {
        step1Title: "Welkom bij DwenguinoBlockly",
        step1Content: "Hoi, ik ben Dwenguino! Ik zal je helpen om de interface te leren kennen!",
        step2aTitle: "Het Blockly codegebied",
        step2aContent: "Dit is het Blockly codegebied",
        step2bTitle: "De Blockly toolbox",
        step2bContent: "Dit is de toolbox. Deze bevat alle blokken die je kan gebruiken om jouw programma te schrijven. Afhankelijk van het niveau dat je gekozen hebt zie je meer of minder blokken. Ga eens op verkenning en bekijk welke blokken er allemaal zijn.",
        step3Title: "Taal instellen",
        step3Content: "Hier kan je een andere taal selecteren.",
        step4Title: "De moeilijkheidsgraad",
        step4Content: "Deze schuifbalk kan je gebruiken om de moeilijkheidsgraad in te stellen. Op hogere niveaus heb je meer geavanceerde blokken. Om deze te gebruiken beheers je best eerst de blokken op lagere niveaus. Voorlopig zijn er maar twee niveaus die blokjes bevatten, in de toekomst komen er meer.",
        step5Title: "Dwengobooks",
        step5Content: "Dwengobooks zijn interactieve tutorials die je stap voor stap uitleggen hoe je een programma moet schrijven. Je leerkracht kan hier zelf ook lessen aan toevoegen zodat je makkelijk de lessen kan volgen.",
        step6Title: "Je code uploaden naar het Dwenguino-bord",
        step6Content: "Als je denkt dat je programma af is kan je het uploaden naar het Dwenguino-bord door op deze knop te drukken. (Vergeet niet om eerst het bord aan te sluiten op de computer met de usb-kabel.)",
        step7Title: "Openen",
        step7Content: "Deze knop geeft je de mogelijkheid om een bestand dat je eerder hebt opgeslagen te openen in de editor.",
        step8Title: "Opslaan",
        step8Content: "Met deze knop kan je de blokken opslaan naar een lokaal bestand.",
        step9Title: "De simulator",
        step9Content: "Met deze knop kan je de simulator openen. Deze kan je gebruiken om je code eerst te testen voor je hem naar het bord uploadt."

};

MSG.tutorials.basic_test = {
    step1Title: "Test je basiskennis van Dwenguino",
    step1Content: "Wanneer je nog nooit een programma hebt geschreven voor de Dwenguino kan je deze test gebruiken om te kijken hoe ver je al staat",
    step2Title: "Sequentie",
    step2ContentA: "Bekijk de code die je ziet de blockly workspace. Wat is na het uitvoeren van de code de waarde die in a zit?",
    step2ContentB: "Wat is de waarde die in b zit?",
    stepEndTitle: "Goed zo!",
    stepEndContent: "Je hebt de quiz successvol afgelegd, op naar de volgende!"
};

MSG.tutorials.theremin = {
    step1Title: "Voorwoord",
    step1Content: "Vandaag de dag zijn elektronische apparaten niet meer weg te denken. Veel van deze apparaten worden aangestuurd door microcontrollers. In dit boekje verkennen we stap voor stap de prachtige wereld van de microcontrollers. Op het einde van dit boekje kan je zelf jouw eigen digitale piano programmeren. Hiermee heb je jouw eerste ingebed systeem ontwikkeld: een digitaal systeem dat in staat is te interageren met zijn omgeving.\
We doen dit met behulp van de Dwenguino, een eenvoudig, multi-functioneel microcontrollerplatform. De Dwenguino is voorzien van tal van handigheidjes zodat jouw eerste stappen vlot verlopen. Dankzij de compatibiliteit met Arduino IDE gebeurt dit met behulp van goed doordachte tools die zowel grafisch als tekstueel programmeren mogelijk maken.\
Experimenteren met microcontrollers kan zowel thuis als in de klas. Dit boekje is in de eerste plaats bedoeld voor leerkrachten die in het kader van hun lessen omgaan met informatica, elektronica of techniek. Maar jongeren kunnen dit boekje ook zelfstandig ontdekken. Dat maakt hun leer-ervaring nog intenser.\
Veel succes!",
    step2Title: "Overal microcontrollers",
    step2Content: "De voorbije decennia nam het aantal digitale apparaten in huis, tuin en werkomgeving exponentieel toe. Het begon met de introductie van eenvoudige zaken zoals wekkerradio's en elektrische tandenborstels maar ondertussen is zo goed als elk apparaat intelligent. Misschien heb je thuis wel een grasmaai- of stofzuigrobot, of zelfs een zelfrijdende auto, deze zijn de dag van vandaag zeker geen science fiction meer!\
Sterker nog, al deze apparaten worden steeds meer verbonden met het internet en vormen zo samen het Internet of Things (IoT). Studies schatten dat tegen 2020 meer dan 50 miljard apparaten verbonden zullen zijn met het internet. We spreken dan niet alleen over smartphones en tablets maar ook over bijvoorbeeld slimme rookmelders, intelligente koelkasten en robots.\
De basis van al deze apparaten zijn digitale rekensystemen die instaan voor de nodige intelligentie. Een voorbeeld hiervan is de microcontroller, deze omvat al het nodige om sensorgegevens te verwerken, berekeningen uit te voeren en acties te ondernemen.",
    step3Title: "Het bord",
};


MSG.tutorials.hello_dwenguino = {
  step1Title: "Hallo Dwenguino!",
  step1Content: "In deze tutorial schrijf je je eerste Dwenguino-programma. Dit programma schrijft de tekst 'Hallo Dwenguino' naar het lcd-scherm van het bord.",
  step2Title: "De simulator",
  step2Content: "Klik op de simulator-knop om deze te openen.",
  step3Title: "Blokjes slepen uit de toolbox",
  step3Content: "Neem nu onderstaande blok uit de toolbox en plaats deze onder de tekst <em><b>zet klaar bij start</b></em>. </br><img src='img/helloDwenguino/dwenguinoLCD.png' alt='Image of the dwenguino LCD block' style='max-width:100%'/>",
  step4Title: "Je code uitvoeren",
  step4Content: "Om je code uit te voeren in de simulator druk je op de <em><b>Start</b></em>-knop.</br>Wat zie je ?</br>Met de <em><b>Stop</b></em>-knop kan je de uitvoering in de simulator stoppen.</br>Merk op dat je de code niet kan aanpassen terwijl deze wordt uitgevoerd.",
  step5Title: "Het 'zet klaar, herhaal'-blok",
  step5Content: "De code die onder het tekstje <em><b>zet klaar bij start</b></em> staat zal één keer uitgevoerd worden bij het begin van het programma. De code onder het tekstje <em><b>herhaal</b></em> blijft wordt oneindig keer herhaald.</br>Is er een verschil wanneer je het <em><b>lcd</b></em>-blok in het gedeelte <em><b>zet klaar bij start</b></em> of het gedeelte <em><b>herhaal</b></em> zet?",
  step6Title: "Nu zelf!",
  step6Content: "Probeer het nu zelf! Verander de tekst die op het scherm komt eens in je eigen naam. </br> Probeer ook eens om de tekst op de tweede lijn van het scherm te laten verschijnen.",
};

MSG.tutorials.blink = {
  step1Title: "Knipperlicht",
  step1Content: "In deze tutorial schrijven we een programma dat LD13 afwisselend aan- en uitzet. We zorgen ervoor dat de led twee keer per seconde aan- en uitgaat.",
  step2Title: "De simulator",
  step2Content: "Klik op de simulator-knop om deze te openen.",
  step3Title: "Blokjes slepen uit de toolbox",
  step3Content: "Gebruik de volgende blokken om je programma te schrijven: </br><img src='img/blink/requiredBlocks.png' alt='Image of the blocks required for the blink exercise' style='max-width:100%'/></br><b>Tip:</b> de tijd in het <em><b>wacht</b></em>blokje staat in milliseconden.</br> 1 seconde = 1000 milliseconden.",
  step4Title: "Je code uitvoeren",
  step4Content: "Om je code uit te voeren in de simulator druk je op de <em><b>Start</b></em>-knop.</br>Wat zie je ?</br>Met de <em><b>Stop</b></em>-knop kan je de uitvoering in de simulator stoppen.</br>Merk op dat je de code niet kan aanpassen terwijl deze wordt uitgevoerd.",
  step5Title: "Werkt je code correct?",
  step5Content: "Als je code nog niet correct werkt, kan je de fout proberen achterhalen door blokje voor blokje door je code te stappen. Dit doe je door in de simulator op de knop <em><b>1 stap</b></em> te drukken.</br>Als je code nu al correct werkt, dikke duim!",
  step6Title: "Nu zelf!",
  step6Content: "Probeer het nu zelf!</br><ul><li>Verander de knippersnelheid zodat de led 1 keer per seconde aan- en uitgaat.</li><li>Kies eens een andere led om aan en uit te zetten.</li><li>Probeer eens meerdere leds aan en uit te zetten.</li></ul>",
};

MSG.tutorials.hello_robot = {
  step1Title: "Rijdende robot",
  step1Content: "In deze tutorial programmeer je een tweewielige rijdende robot. Je zal de opdracht krijgen om de robot verschillende patronen te laten rijden.",
  step2Title: "De simulator",
  step2Content: "Klik op de simulator-knop om deze te openen.",
  step3Title: "Scenario kiezen",
  step3Content: "Om onze rijdende robot te kunnen programmeren moet je in de simulator kiezen voor het scenario <em><b>Bewegende robot</b></em>.",
  step4Title: "Vooruit rijden",
  step4Content: "Als eerste opdracht moet je de robot gewoon rechtdoor laten rijden. Elk wiel van de robot is verbonden met een dc-motor. Om deze motoren te programmeren gebruik je het volgende blok:</br><img src='img/helloRobot/DCMotor.png' alt='Motor block' style='max-width:100%'/></br>Door het <em><b>nummer</b></em> te veranderen kan je motor 1 of 2 laten draaien.</br>De <em><b>snelheid</b></em> wordt bepaald door een getal tussen -255 en 255. (-255 = maximale snelheid achteruit, 0 = niet draaien, 255 = maximale snelheid vooruit.)",
  step5Title: "Een bocht",
  step5Content: "Denk na hoe je je robot een rechte hoek kan laten maken. </br><b>Tip:</b> laat de wielen in tegengestelde richting draaien om de robot een bocht te laten nemen.",
  step6Title: "Een vierkant",
  step6Content: "Nu je erin geslaagd bent om de robot een bocht van 90° te laten nemen, kan je eens proberen om hem in een vierkant te laten rijden.",
};

//TODO: translate
MSG.tutorials.nameOnLcd = {
  step1Title: "Name on lcd-screen",
  step1Content: "Open the simulator view and test the code. What do you see?",
  step2Title: "Name on lcd-screen",
  step2Content: "Change the program so your name appears on the first line of the lcd-screen.",
};

//TODO: translate
MSG.tutorials.blinkLED = {
  step1Title: "Blink LED",
  step1Content: "Open the simulator view and test the code. What do you see?",
  step2Title: "Blink LED",
  step2Content: "Change the program so the LED turns on for one second and then turns off the LED for one second. This sequence is repeated indefinitely.",
  step3Title: "Extra",
  step3Content: "Make another LED turn on and off.",
};


//TODO: translate
MSG.tutorials.ledOnButtonPress = {
  step1Title: "LED on button press",
  step1Content: "Open the simulator view and test the code. What do you see?",
  step2Title: "LED on button press",
  step2Content: "Change the program so the LED turns on when you press the north button.",
  step3Title: "Extra",
  step3Content: "Make sure the LED turns off when you release the north button.",
};

//TODO: translate
MSG.tutorials.bitPatternOnLeds = {
  step1Title: "Pattern on LEDs",
  step1Content: "Open the simulator view and test the code. What do you see?",
  step2Title: "Pattern on LEDs",
  step2Content: "The code you have is very long. Can you get the same result using less blocks? Try to get the same result by using less blocks!",
  step3Title: "Pattern on LEDs",
  step3Content: "When you succeeded in reducing the number of blocks, call one of the tutors to get feedback on your solution.",
};

//TODO: translate
MSG.tutorials.allButtons = {
  step1Title: "All buttons",
  step1Content: "Open the simulator view and test the code. What do you see?",
  step2Title: "All buttons",
  step2Content: "This code should turn on a led when one of the buttons is pressed. Look at the program. Do all buttons work? Try to correct the code for the buttons that do not work.",
  step3Title: "Extra",
  step3Content: "Change the code so the LED turns off when the button is released.",
};

//TODO: trnalsate
MSG.tutorials.driveForward = {
  step1Title: "Drive forward",
  step1Content: "Open the simulator view.",
  step2Title: "Drive forward",
  step2Content: "Select the scenario view and test the code. What do you see?",
  step3Title: "Drive forward",
  step3Content: "Does the car drive forward? Correct the code so the car drives forward.",
};

//TODO: translate
MSG.tutorials.rideInSquare = {
  step1Title: "Ride into square",
  step1Content: "Open the simulator view.",
  step2Title: "Ride into square",
  step2Content: "Select the scenario view and test the code. What do you see?",
  step3Title: "Ride into square",
  step3Content: "Does the car ride in a square? Correct the code so the car ride in a square.",
  step4Title: "Extra",
  step4Content: "The code is long, can you make it shorter while maintaining the same behaviour?",
};

//TODO: translate
MSG.tutorials.rideToWall = {
  step1Title: "Ride to wall",
  step1Content: "Open the simulator view.",
  step2Title: "Ride to wall",
  step2Content: "Select the scenario view.",
  step3Title: "Ride to wall",
  step3Content: "Change the scenario to moving robot with wall and test the code. What do you see?",
  step4Title: "Ride to wall",
  step4Content: "Does the car ride to the wall? Does it stop at the wall? Change the code so the car stop near the wall.",
};

//TODO: translate
MSG.tutorials.avoidWall = {
  step1Title: "Avoid wall",
  step1Content: "Open the simulator view.",
  step2Title: "Avoid wall",
  step2Content: "Select the scenario view.",
  step3Title: "Avoid wall",
  step3Content: "Change the scenario to moving robot with wall and test the code. What do you see?",
  step4Title: "Avoid wall",
  step4Content: "Does the car avoid the wall by turning before it reaches it? Change the code so the car keeps driving but never hits a wall.",
};

MSG.tutorials.nameOnLcdBasic = {
  step1Title: "Naam op LCD-scherm",
  step1Content: "In deze tutorial plaats je je naam op het LCD-scherm. Je ziet een voorbeeld van hoe dat moet.</br> Bekijk de code en probeer te begrijpen wat het doet.",
  step2Title: "Testen op het bord",
  step2Content: "Test de code door het Dwenguino bord aan de computer te schakelen met de usb-kabel en op de play knop te drukken.",
  step3Title: "Je eigen naam",
  step3Content: "Momenteel zie je de naam 'Tom' op het scherm verschijnen. Pas de code aan zodat je jouw naam ziet.",
  step4Title: "Twee rijen",
  step4Content: "Het LCD-scherm heeft twee rijen. Verander de rij waarop je naam staat van 0 naar 1.",
  step5Title: "Test",
  step5Content: "Test je code.",
  step6Title: "Proficiat",
  step6Content: "Goed zo! Je weet nu hoe je tekst op het LCD-scherm kan plaatsen.",
};