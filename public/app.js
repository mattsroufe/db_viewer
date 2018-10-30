var database = document.body.dataset.database
var input = document.querySelector('textarea')
var searchForm = document.querySelector('#search-form')
var saveQueryBtn = document.querySelector('#save-query')
var ul = document.querySelector('ul')
var tableHeading = document.querySelector('#tables-heading').closest('li')
input.focus()
var tmpStr = input.value
input.value = ''
input.value = tmpStr

input.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault()
    searchForm.submit()
  }
});

saveQueryBtn.addEventListener('click', function(event) {
  var query = document.getElementsByName('q')[0].value
  localStorage.setItem([database,query.replace(/\s/g,'')].join(':'), query)
  location.reload()
});

for ( var i = 0, len = localStorage.length; i < len; ++i ) {
  var sql = localStorage.getItem(localStorage.key(i))
  var newItem = document.createElement('li')
  var a = document.createElement('a');
  var linkText = document.createTextNode(sql);
  a.appendChild(linkText);
  a.href = `/search?q=${sql}`;
  newItem.appendChild(a)
  ul.insertBefore(newItem, tableHeading)
}
