var input = document.querySelector('textarea');
var searchForm = document.querySelector('#search-form');
input.focus();
var tmpStr = input.value;
input.value = '';
input.value = tmpStr;

input.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    searchForm.submit();
  }
});
