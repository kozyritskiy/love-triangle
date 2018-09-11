/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let newArr = [];
  preferences.unshift(0);
  preferences.forEach(function(i) {
    if (
      preferences[i] !== preferences[preferences[i]] &&
      preferences[preferences[i]] !== preferences[preferences[preferences[i]]] &&
      preferences[preferences[preferences[i]]] !== preferences[i] &&
      preferences[preferences[preferences[i]]] === i
    ) {
      newArr.push([
        preferences[i],
        preferences[preferences[i]],
        preferences[preferences[preferences[i]]]
      ]);
      preferences[i] = 0;
      preferences[preferences[i]] = 0;
      preferences[preferences[preferences[i]]] = 0;
    }
  }) 
  return newArr.length;

};
