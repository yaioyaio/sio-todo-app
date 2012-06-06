Ext.define('MyApp.controller.Todos', {
    extend: 'Ext.app.Controller',

    config: {
        
        /**
        * Add controls for both the text input and the todo list.
        */
        control: {
            textInput: {
                action: "addTodo"
            },
            list: {
                itemswipe: "toggleTodo"
            },
        },

        refs: {
            list: "list",
            textInput: "#todoinput"
        }
    },

   
    /**
    * Add the task to the store from the value in a textfield.  
    * Call sync on the store to push changes to sencha.io
    * After sync completes call syncCallback.
    */
    addTodo: function(textfield, e, options) {
        console.log("addTodo");
        var todos = Ext.getStore('todos');
        todos.add({
            task: textfield.getValue(),
            completed: false,
            timestamp: new Date().getTime()
        });
        todos.sync();
        textfield.setValue("");
    },

    /**
    * on a swipe on a list item the application reverses the completed  
    * value of the record.
    */
    toggleTodo: function(dataview, index, target, record, e, options) {
        console.log("swipe?")
        var completed = record.get('completed');
        record.set("completed", !completed);
        var todos = Ext.getStore('todos');
        todos.sync();

    }

});