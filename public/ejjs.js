let clevertap = {
  event: [],
  profile: [],
  account: [],
  onUserLogin: [],
  notifications: [],
  privacy: [],
};

// replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
// clevertap.account.push({ "id": "679-87W-RK5Z" });
// clevertap.account.push({ id: '485-956-W55Z' });
clevertap.account.push({ id: '677-5ZZ-ZK5Z' });
clevertap.privacy.push({ optOut: false }); //set the flag to true, if the user of the device opts out of sharing their data
clevertap.privacy.push({ useIP: false }); //set the flag to true, if the user agrees to share their IP data
(function () {
  var wzrk = document.createElement('script');
  wzrk.type = 'text/javascript';
  wzrk.async = true;
  wzrk.src =
    ('https:' == document.location.protocol
      ? 'https://d2r1yp2w7bby2u.cloudfront.net'
      : 'http://static.clevertap.com') + '/js/a.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wzrk, s);
})();

(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-WS6W985');

clevertap.notifications.push({
  titleText: 'Would you like to receive Push Notifications?',
  bodyText:
    'We promise to only send you relevant content and give you updates on your transactions',
  okButtonText: 'Allow',
  rejectButtonText: 'No thanks',
  okButtonColor: '#f28046',
  serviceWorkerPath: './clevertap_sw.js',
});

  let ProfileObject = {};
  ProfileObject = {
    Identity: 'adil.new@opalina.in',
    Name: 'adil new',
    User_Email: 'adil.new@opalina.in',
    Tz: 'Asia/Kolkata',
    platform: 'Desktop',
    'MSG-email': false, // Disable email notifications
    'MSG-push': true, // Enable push notifications
    'MSG-sms': true, // Enable sms notifications
  };

clevertap.profile.push({
  Site: ProfileObject,
});

console.log(clevertap.event.push('Product viewed 303', {
  'Product name': 'Casio Chronograph Watch',
  Category: 'Mens Accessories',
  Price: 59.99,
  Date: new Date(),
}))


