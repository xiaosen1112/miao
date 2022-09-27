var xiaosen1112 = {

  chunk: function chunk(array, size) {
    var result = []
    var map = []
    var index = 0
    for (var i = 0; i < array.length; i++) {
      if (index === size) {
        result.push(map)
        map = []
        index = 0
      }
      index++
      map.push(array[i])
    }
    if (index !== 0) {
      result.push(map)
      map = []
      index = 0
    }
    return result
  },

  compact: function compact(array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (array[i] && array[i] !== 0) {
        result.push(array[i])
      }
    }
    return result
  },

  difference: function difference(array, values) {

  },


  fill: function fill(array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      value = array[i]
    }
    return array
  },

  drop: function drop(array, n = 1) {
    if (n > array.length) {
      return []
    }
    var a = []
    for (var i = 0; i < array.length; i++) {
      if (i >= n)
      a.push(array[i])
    }
    return a
  },



























}
