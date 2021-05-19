class SuffixNode {
  constructor(substring) {
    this.children = [];
    this.substring = substring || '';
  }
}

class SuffixTree {
  constructor() {
    this.root = new SuffixNode();
  }

  // Inserts suffix into tree
  insert(suffix) {
    if (suffix === "") return;

    for (let a = suffix.length - 1; a >= 0; a--) {
      this.insertSubSuffix(suffix.slice(a));
    }
  }

  // Searches for a suffix in tree and returns the node where search ends
  search(suffix, node=this.root) {
    if (suffix === "") return true;

    let i;

    for (i = 0; i < node.substring.length; i++) {
      if (suffix.charAt(i) !== node.substring.charAt(i)) return false;
      if (i === suffix.length - 1) return true;
    }

    let result = false;

    node.children.forEach(child => result ||= this.search(suffix.slice(i), child));

    return result;
  }

  insertSubSuffix(subSuffix) {
    let node = this.getChild(subSuffix, this.root);

    if (!node) {
      this.root.children.push(new SuffixNode(subSuffix));
      return;
    }

    while (true) {
      let i;

      for (i = 0; i < node.substring.length; i++) {
        if (subSuffix.charAt(i) !== node.substring.charAt(i)) {
          const firstChild = new SuffixNode(node.substring.slice(i));
          const secondChild = new SuffixNode(subSuffix.slice(i));                       

          firstChild.children = node.children;

          node.children = [firstChild, secondChild];
          node.substring = node.substring.slice(0, i);      
          return;
        } else if (i === subSuffix.length - 1) {
          return;
        }
      }

      let nextSuffix = subSuffix.slice(i);
      let nextNode = this.getChild(subSuffix.slice(i), node); 

      if (!nextNode) {
        node.children.push(new SuffixNode(nextSuffix));
        return;
      } else {
        node = nextNode;
        subSuffix = nextSuffix;
      }
    }
  }

  getChild(suffix, node) {
    for (let i = 0; i < node.children.length; i++) {
      let substring = node.children[i].substring;
      if (substring.charAt(0) === suffix.charAt(0)) return node.children[i];
    }

    return null;
  }
}