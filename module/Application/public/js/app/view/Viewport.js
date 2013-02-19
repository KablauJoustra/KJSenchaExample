/**
 * Viewport
 */
Ext.define('KJSenchaApp.view.Viewport', {

    extend: 'Ext.container.Viewport',

    layout: {
        type: 'border',
        padding: '0 5 5 5'
    },

    items: [
        {
            id: 'app-header',
            xtype: 'box',
            region: 'north',
            height: 40,
            html: 'KJ Sencha'
        },
        {
            xtype: 'tabpanel',
            region: 'center',
            plain: true,
            layout:'fit',
            items: [
                {
                    title: 'Direct',
                    xtype: 'directTab'
                },
                {
                    title: 'Service',
                    xtype: 'serviceTab'
                },
                {
                    title: 'PHP Components',
                    xtype: 'phpTab'
                }
            ]
        }
    ]
});