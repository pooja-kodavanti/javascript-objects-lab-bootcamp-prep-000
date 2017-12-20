var recipes = {};


function updateObjectWithKeyAndValue(obj, key, value) {
  var obj = {'prop': 1 }
  return Object.assign({}, obj, {'prop2': 2})
}

// const obj = {'prop': 1}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  var obj = {'prop': 1 }
  obj['prop2'] = 2;
}

function deleteFromObjectByKey(obj, key) {
  var obj = { prop: 1 }
  var newObj = Object.assign({}, obj)
  delete newObj.prop
  return newObj
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  var obj = { prop: 1 }
  delete obj.prop
  return obj
}
