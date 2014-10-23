Ext.define('SenchaBase.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            cloudBtn: 'button[id=doCloudCall]',
            resArea: 'panel[id=resultArea]'
        },
        control: {
            cloudBtn:{
                tap: 'buttonPress'
            }
        },
    },
    doAct: function(actName, reqObj, callback) {
        $fh.act({
            act: actName,
            req: reqObj
        }, function(res) {
            return callback(null, res);
        }, function(msg, err) {
            return callback({
                msg: msg,
                err: err
            }, null);
        });
    },
    buttonPress: function(){
        var panel = this.getResArea();
        panel.setHtml('');

        // Option 1: Use $fh directly
        $fh.act({
            act: 'ping',
            req: {
                testVal: 'sencha app'
            }
        }, function(res) {
            panel.setHtml(JSON.stringify(res));
        }, function(msg, err) {
            alert('Error: '+msg);
        });

        // Option 2: Use abstraction via doAct function above
        // this.doAct('ping',{testVal:'sencha app'}, function(err,res){
        //     if(err){
        //         alert('Error: '+msg);
        //     } else {
        //         alert(JSON.stringify(res));
        //     }
        // });
    }
});
