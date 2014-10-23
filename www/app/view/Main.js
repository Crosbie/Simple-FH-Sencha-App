Ext.define('SenchaBase.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2',
                    width: '100%'
                },

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
            {
                title: 'Cloud',
                iconCls: 'star',

                styleHtmlContent: true,
                scrollable: true,

                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Cloud Call',
                    width: '100%'
                }, {
                    xtype: 'button',
                    id: 'doCloudCall',
                    text: 'Do Cloud Call',
                    padding: '10px',
                    ui: 'confirm'
                },{
                    xtype: 'panel',
                    id: 'resultArea',
                    width: '100%',
                    background: 'blue',
                }]
            }
        ]
    }
});
