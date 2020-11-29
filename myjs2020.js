function searchMatch(searchText, searchInText) {
  //this one cleans up the special characters, so no need to type them write. Also removes the lower/upper case matching.
  //Best to use the searchMatch_Smart() one
  searchText == undefined ? '' : searchText
  searchText == null ? '' : searchText

  searchInText = searchInText
    .toLowerCase()
    .replace(/á/g, 'a')
    .replace(/é/g, 'e')
    .replace(/í/g, 'i')
    .replace(/ó/g, 'o')
    .replace(/ú/g, 'u')
    .replace(/ñ/g, 'n')

  searchText = searchText
    .toLowerCase()
    .replace(/á/g, 'a')
    .replace(/é/g, 'e')
    .replace(/í/g, 'i')
    .replace(/ó/g, 'o')
    .replace(/ú/g, 'u')
    .replace(/ñ/g, 'n')

  if (searchInText.indexOf(searchText) > -1) {
    return true
  } else {
    return false
  }
}

function searchMatch_Smart(searchText, searchInText) {
  //this one checks each word separately, so it's easier to search for stuff
  searchText == undefined ? '' : searchText
  searchText == null ? '' : searchText

  var words = searchText.split(' ')

  var all_good = true

  words.forEach(word => {
    if (!searchMatch(word, searchInText)) {
      all_good = false
    }
  })

  return all_good
}

/*
module.exports = {
  searchMatch_Smart,
}
*/
