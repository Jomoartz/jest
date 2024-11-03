class Todo {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      if (item) {
        this.items.push(item);
      }
    }
  
    removeItem(item) {
      const index = this.items.indexOf(item);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    }
  
    getItems() {
      return this.items;
    }
  }
  
module.exports={Todo};


const TodoApp = new Todo; 
TodoApp.addItem('lovely');
TodoApp.removeItem('lovely');
const items = TodoApp.items;
console.log(items);
  