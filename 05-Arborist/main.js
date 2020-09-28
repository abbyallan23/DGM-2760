const trees = ['oak', 'pine', 'aspen', 'Bald Cypress']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')

const listTrees = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })
    displayResults.innerHTML = `${treeList} <span>${trees.length} elements long</span>`
}
listTrees()

// add a redwood tree to the end
document.querySelector("#add_redwood").onclick = () => {
    trees.push("redwood")
    listTrees()
  }
  
  // add a pear tree to the beginning
  document.querySelector("#add_pear").onclick = () => {
    trees.unshift("pear")
    listTrees()
  }
  
  // remove the first tree from the list
  document.querySelector('#remove_tree1').onclick = () => {
    if (trees.length > 0) {
      trees.shift()
      listTrees()
    } else {
      errorElement.textContent = 'There are no trees to remove.'
    }
  }
  
  // remove the last tree from the list
  document.querySelector('#remove_treeLast').onclick = () => {
    if (trees.length > 0) {
      trees.pop()
      listTrees()
    } else {
      errorElement.textContent = 'There are no trees to remove.'
    }
  }
  
  // remove the second tree from the list
  document.querySelector('#remove_tree2').onclick = () => {
    if (trees.length > 1) {
      trees.splice(1, 1)
      listTrees()
    } else {
      errorElement.textContent = 'There is no second tree to remove.'
    }
  }
  
  // sort the array from a to z
  document.querySelector('#sort_trees').onclick = () => {
    if (trees.length > 0) {
      trees.sort()
      listTrees()
    } else {
      errorElement.textContent = 'There are no trees to sort.'
    }
  }
  
  // make all the trees lowercase
  document.querySelector('#sort_lc').onclick = () => {
    if (trees.length > 0) {
      let sorted = []
      for (var i = 0; i < trees.length; i++) {
          sorted.push(trees[i].toLowerCase())
          trees.splice(i, 1, sorted[i])
      }
      sorted.sort();
      listTrees()
    } else {
      errorElement.textContent = 'There are no trees on the list.'
    }
  }
  
  // return the third tree on the list
  document.querySelector('#showName3').onclick = () => {
    if (trees.length > 2) {
      let name3 = trees[2]
      errorElement.textContent = `${name3} is the third tree`
    } else {
      errorElement.textContent = 'There is no third tree on the list.'
    }
  }
  
  // return the fourth tree on the list
  document.querySelector('#showName4').onclick = () => {
    if (trees.length > 3) {
      let name4 = trees[3]
      errorElement.textContent = `${name4} is the fourth tree`
    } else {
      errorElement.textContent = 'There is no fourth tree on the list.'
    }
  }