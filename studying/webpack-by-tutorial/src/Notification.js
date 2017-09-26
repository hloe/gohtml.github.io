// ES5: module.exports = function(message) {
//export function announce(message) { === export default function (message) {
function announce(message) {
  alert(message);
};

function log(message) {
  alert(message);
};

export default {
  announce: announce,
  log: log
}