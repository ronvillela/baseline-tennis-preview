const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const code = fs.readFileSync('assets/js/booking.js', 'utf8');
const keys = ['private','sparring','semi-private','clinics','tennis-101','tennis-201'];
function run(key, destination, config) {
 const link = {href:'booking.html',getAttribute:()=>key};
 vm.runInNewContext(code, {URL, URLSearchParams, window:{BaselineBookingConfig:config || {bookingLinks:{[key]:destination}},location:{search:'?program='+encodeURIComponent(key)}},document:{querySelectorAll:()=>[link]}});
 return {link};
}
for(const key of keys){
 const {link}=run(key,'');
 assert.equal(link.href,'booking.html?program='+key+'#booking-pending');
 assert.equal(run(key,'https://booking.example/session').link.href,'https://booking.example/session');
 for(const invalid of ['javascript:alert(1)','http://booking.example/session','bad']) assert.match(run(key,invalid).link.href,/^booking\.html\?/);
}
for(const key of ['unknown','__proto__']){
 assert.equal(run(key,'').link.href,'booking.html');
}
assert.match(run('private','',{}).link.href,/booking-pending/);
console.log('Passed: all six program placeholders, HTTPS provider routes, invalid URL fallback, unknown keys, missing links config.');
