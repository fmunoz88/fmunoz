/*The MIT License (MIT)

Copyright (c) 2014 Lee Brimelow

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

/**
 * Query.js class
 * Built this way before I got into doing Brackets and RequireJS
 * so it uses a self-executing anonymouse function to fake a class.
 * This would be easy to turn into a module but no time for it now.
 */

(function(window) {

	// A Query object represents a single media query and all of its data.
	function Query(width) {

		// Setup up a bunch of properties.
		this.color;
		this.colorIndex = 0;
		this.width = width;
		this.selectors = {};
		this.view = null;
		this.left = 0;
	}

	// An object that represents a selector and all its rules.
	function Selector() {
		this.rules = {};
	}

	// Function that you call when you want add a new CSS rule
	// for a particular selector to the media query.
	Query.prototype.addRule = function(selector, rule) {
		
		// If the selector doesn't exist in this query, add it.
		if(this.selectors[selector] == null)
			this.selectors[selector] = new Selector();
		
		// Separate the CSS property and the value.
		var style = rule.trim().split(':');
		
		// Add the rule to the selector.	
		if(style[1] != undefined)
			this.selectors[selector].rules[style[0]] = style[1];
	}

	//Exposes the Query object the global scope (not optimal). 
	window.Query = Query;

})(window);
