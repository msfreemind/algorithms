class TrieNode {
  constructor() {
    this.links = [];
    this.end = false;
  }

  containsKey(char) {
    return this.links[this.getCharCode(char)] !== undefined;
  }

  get(char) {
    return this.links[this.getCharCode(char)];
  }

  put(char, node) {
    this.links[this.getCharCode(char)] = node;
  }

  getCharCode(char) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
  }

  setEnd() {
    this.end = true;
  }

  isEnd() {
    return this.end;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Inserts word into trie
  insert(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      let currChar = word.charAt(i);

      if (!node.containsKey(currChar)) node.put(currChar, new TrieNode());

      node = node.get(currChar);
    }

    node.setEnd();
  }

  // Returns if the word is in the trie
  search(word) {
    const node = this.searchPrefix(word);
    return node !== null && node.isEnd();
  }

  // Returns if there is any word in the trie that starts with the given prefix
  startsWith(prefix) {
    const node = this.searchPrefix(prefix);
    return node !== null;
  }

  // Searches a prefix or whole key in trie and returns the node where search ends
  searchPrefix(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      let currChar = word.charAt(i);

      if (node.containsKey(currChar)) node = node.get(currChar);
      else return null;
    }

    return node;
  }
}