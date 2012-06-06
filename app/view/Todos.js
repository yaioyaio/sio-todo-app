/**
*  TODO application view:  
*  Panel that fills the viewport
*   - Title bar with a login/logout button
*   - Text field for task entry
*   - List to display tasks from the 'todos' store.
*/
Ext.define('MyApp.view.Todos', {
    extend: 'Ext.Panel',
    
    requires: [
      "Ext.TitleBar",
      "Ext.dataview.List"
    ],
    
    config: {
        layout: {
            type: 'fit'
        },
        fullscreen: true,
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Todo',
            },
            {
                xtype: 'textfield',
                id: "todoinput",
                docked: 'top',
                labelWidth: '0%',
                placeHolder: 'New Task',
                disabled: false
            },
            {
                xtype: 'list',
                itemTpl: [
                    '{task}'
                ],
                disableSelection: true,
                store: 'todos',
                grouped: true
            }
        ]
    }
});