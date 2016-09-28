/** config
 * @file config.js
 * @author fe
 */
require.config({
    'baseUrl': '../src',
    'paths': {},
    'packages': [
        {
            'name': 'underscore',
            'location': '../dep/underscore/1.5.2/src',
            'main': 'underscore'
        },
        {
            'name': 'moment',
            'location': '../dep/moment/2.7.0/src',
            'main': 'moment'
        },
        {
            'name': 'etpl',
            'location': '../dep/etpl/3.2.0/src',
            'main': 'main'
        },
        {
            'name': 'esui',
            'location': '../dep/esui/3.2.0-beta.6/src',
            'main': 'main'
        },
        {
            'name': 'eicons',
            'location': '../dep/eicons/1.0.0/src',
            'main': 'main.less'
        },
        {
            'name': 'esf',
            'location': '../dep/esf/1.0.0/src'
        },
        {
            'name': 'est',
            'location': '../dep/est/1.3.0/src'
        },
        {
            'name': 'eoo',
            'location': '../dep/eoo/0.1.4/src',
            'main': 'main'
        },
        {
            'name': 'jquery',
            'location': '../dep/jquery/1.11.1/src',
            'main': 'jquery'
        },
        {
            'name': 'mini-event',
            'location': '../dep/mini-event/1.0.2/src',
            'main': 'main'
        },
        {
            'name': 'datatables.net',
            'location': '../src',
            'main': 'datatables'
        },
        {
            'name': 'datatables-treegrid',
            'location': '../dep/datatables-treegrid/1.0.0',
            'main': 'dataTables.treeGrid'
        },
        {
            'name': 'datatables-select',
            'location': '../dep/datatables-select/1.2.0-rc.3',
            'main': 'js/dataTables.select'
        },
        {
            'name': 'datatables-fixedcolumns',
            'location': '../dep/datatables-fixedcolumns/3.2.2-rc.1',
            'main': 'js/dataTables.fixedColumns'
        },
        {
            'name': 'datatables-colreorder',
            'location': '../dep/datatables-colreorder/1.3.2-rc.3',
            'main': 'js/dataTables.colReorder'
        }
    ]
});
