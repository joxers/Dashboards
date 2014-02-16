/**
 * Ext JS Library 4.0.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 *	
 */
Ext.application({
    name: 'Dash',

    controllers: [
        'Contacts'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'contactlist'
                }
            ]
        });
    }
});
