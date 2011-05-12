/*
	This is an example of one way you could set up a configuration file to more
	conveniently define some commandline options. You might like to do this if
	you frequently reuse the same options. Note that you don't need to define
	every option in this file, you can combine a configuration file with
	additional options on the commandline if your wish.
	
	You would include this configuration file by running JsDoc Toolkit like so:
	java -jar jsrun.jar app/run.js -c=conf/sample.conf

*/

{
	// source files to use
	_: ['public/js'],
	
	// document all functions, even uncommented ones
	a: true,
	
	// including those marked @private
	p: true,
	
	// use this directory as the output directory
	d: 'docs/jsdoc',
	
	// use this template
	t: '/usr/local/jsdoc-toolkit/templates/jsdoc',
	
	// Multiple. Exclude files based on the supplied regex.
	E: ['.*min.js']
}