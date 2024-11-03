const {Todo} = require( '../utilities/todo');
const {describe, expect, test} = require('@jest/globals');

describe('todo app', ()=> {
    const TodoApp = new Todo; 
    TodoApp.addItem('lovely');
    const items = TodoApp.items;

test('should update items array', ()=>{
    expect(items).toContain('lovely')}
    );

test('should getitems', ()=> {
    const retrievedItems = TodoApp.getItems();
    expect(retrievedItems).toEqual(items);
});

test('should remove from the array: item', ()=>{
    TodoApp.removeItem('lovely');
    expect(items).toEqual([]);
});
})

