function splitString(stringToSplit, separator) {
	var stringArray = stringToSplit.split(separator);

	console.log("The array has " + stringArray.length + " elements: " + stringArray.join(" /"));
	console.log("stringArray:", stringArray.sort());

}

var wordString = "It indicates a synchronic distortion in the areas emanating triolic waves. The cerebellum, the cerebral cortex, the brain stem,  " +
	"the entire nervous system has been depleted of electrochemical energy. Any device like that would produce high levels of triolic waves. " +
	"These walls have undergone some kind of selective molecular polarization. I haven't determined if our phaser energy can generate a stable field. We could alter the photons with phase discriminators. " +
	"Sensors indicate human life forms 30 meters below the planet's surface. Stellar flares are increasing in magnitude and frequency. Set course for Rhomboid Dronegar 006, warp seven." +
	"There's no evidence of an advanced communication network. Total guidance system failure, with less than 24 hours' reserve power. Shield effectiveness has been reduced 12 percent. " +
	"We have covered the area in a spherical pattern which a ship without warp drive could cross in the given time. Resistance is futile.";

var space = " ";

splitString(wordString, space);

