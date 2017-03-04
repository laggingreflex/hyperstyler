module.exports = hyperstyler

function hyperstyler(node, styles, opts) {
  if (!node) {
    throw new Error('hyperstyler requires a VNode')
  }

  if (!styles && node) {
    // console.warn('hyperstyler was passed empty styles object, returning VNode unchanged')
    return node;
  }

  if (!(styles instanceof Array)) {
    styles = [styles];
  }

  if (node && node.attributes && node.attributes.class) {
    var classes = node.attributes.class.split(/ /g)
    var add = []
    classes.forEach(function(className) {
      styles.forEach(function(style) {
        if (className in style) {
          if (classes.indexOf(style[className]) < 0) {
            add.push(style[className])
          }
        }
      })
    })
    node.attributes.class = classes.concat(add).join(' ')
  }
  if (node.children) {
    node.children.forEach(function(node) {
      hyperstyler(node, styles, opts)
    })
  }
  return node
}
