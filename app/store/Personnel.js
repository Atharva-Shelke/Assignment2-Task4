Ext.define('MYAPP.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'MYAPP.model.Personnel',

    data: { items: [
        { Series_id: '1', Series_name: "Ashes", TeamA: "India", TeamB:"Pakistan", Location:"Mohali", Time:"7:30 pm", Operation:"Delete/Update" },
        { Series_id: '2', Series_name: "Champions Trophy",  TeamA: "India",  TeamB:"Bangladesh", Location:"Pune", Time:"7:30 pm", Operation:"Delete/Update"},
        { Series_id: '3', Series_name: "XYZ", TeamA: "Srilanka", TeamB:"India", Location:"Indore", Time:"7:30 pm", Operation:"Delete/Update" },
        { Series_id: '4', Series_name: "MYAPP", TeamA: "England", TeamB:"India", Location:"Delhi", Time:"7:30 pm", Operation:"Delete/Update" },
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
