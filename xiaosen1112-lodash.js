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
    }
    map.push(array[i])
    if (index !== 0) {
      result.push(map)
      map = []
      index = 0
    }
    return result
  }



































}()
