function iso8601() {
	var d = new Date();

	var utc = d.toString(); //"Thu Aug 9 17:44:05 UTC-0300 2018"
	utc = utc.split(' '); // utc[4] = "UTC-0300"
	utc = utc[4].split('-'); //  utc[1] = "0300"

	var time = d.toJSON();  //"2018-08-09T20:48:11Z"
	time = time.split('Z');
	time = time[0].concat('-', utc[0].substr(0,2),':',utc[0].substr(2));

	return time 	// "2018-08-09T20:47:21-03:00"
}
