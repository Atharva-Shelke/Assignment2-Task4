Ext.define('MYAPP.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'MYAPP.model.Personnel',

    data: { items: [
        { Series_id: '1', Series_name: "India Tour of Australia", TeamA: "India", TeamB:"Australia", Location:"Mumbai", Time:"7:30 pm"},
        { Series_id: '2', Series_name: "India Tour of New Zealand",  TeamA: "India",  TeamB:"New Zealand", Location:"Pune", Time:"1:30 pm"},
        { Series_id: '3', Series_name: "India Tour of Srilanka", TeamA: "Srilanka", TeamB:"India", Location:"Indore", Time:"4:30 pm"},
        { Series_id: '4', Series_name: "IPL", TeamA: "Royal Challengers Banglore", TeamB:"Kolkata Knight Riders", Location:"Kolkata", Time:"7:30 pm"},
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
