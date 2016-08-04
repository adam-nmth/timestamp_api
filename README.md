<h1>Free Code Camp - Time Stamp API</h1>

<h4>User stories:</h4> 
<p>
1) I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)<br>
2) If it does, it returns both the Unix timestamp and the natural language form of that date.<br>
3) If it does not contain a date or Unix timestamp, it returns null for those properties.<br>
</p>
<h4>Example usage:</h4>
https://timestamp-ms.herokuapp.com/December%2015,%202015<br>
https://timestamp-ms.herokuapp.com/1450137600<br>
<h4>Example output:</h4>
<p>
{ "unix": 1450137600, "natural": "December 15, 2015" }<br>
</p>
