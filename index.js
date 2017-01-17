var authenticationSuccess = function() { console.log('Successful authentication', Trello); };
var authenticationFailure = function() { console.log('Failed authentication'); };

var success = function(msg) {
  console.log(msg);
};

var error = function(msg) {
  console.log(msg);
};

function authorizeTrello() {
  Trello.authorize({
  type: 'popup',
  name: 'Getting Started Application',
  scope: {
    read: 'true',
    write: 'true' },
  expiration: 'never',
  success: authenticationSuccess,
  error: authenticationFailure
});
}

function getBoards() {
  Trello.get('/member/me/boards', success, error);
}
