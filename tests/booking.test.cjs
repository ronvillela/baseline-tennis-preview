const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const code = fs.readFileSync('assets/js/booking.js', 'utf8');
const labels = ['Private Lesson','Sparring Session','Semi-Private Lesson','Group Clinic','Tennis 101','Tennis 201','Not sure yet'];
const keys = ['private','sparring','semi-private','clinics','tennis-101','tennis-201'];
function run(key, destination) {
  const link = {href:'booking.html',getAttribute:()=>key};
  const options = labels.map((text,i)=>({text,selected:i===0}));
  vm.runInNewContext(code, {URL, URLSearchParams, window:{BaselineBookingConfig:{bookingLinks:{[key]:destination}},location:{search:'?program='+encodeURIComponent(key)}},document:{querySelectorAll:()=>[link],querySelector:()=>({options})}});
  return {link,options};
}
keys.forEach((key,i)=>{
 const {link,options}=run(key,'');
 assert.equal(link.href,'contact.html?program='+encodeURIComponent(key)+'#lesson-request');
 assert.equal(options.filter(o=>o.selected).length,1);
 assert.equal(options.find(o=>o.selected).text,labels[i]);
 assert.equal(run(key,'https://booking.example/session').link.href,'https://booking.example/session');
 for(const invalid of ['javascript:alert(1)','http://booking.example/session','not a URL']) {
  assert.match(run(key,invalid).link.href,/^contact\.html\?/);
 }
});
assert.equal(run('unknown','').link.href,'booking.html');
assert.equal(run('__proto__','').link.href,'booking.html');
console.log('Passed: six program selections, HTTPS provider routes, fallback links, and unknown keys.');
