
// obj.fn();
function func(){
    // console.log( this ); // 20 this -> window
    // var c=1;
    // var b=function(){
    //     var b=1;
    //     console.log(this);
    //     return 1;
    // }
    // var c=new b();
    // console.log(c);
    // var d=b();
    // console.log(d);
    // var f=b;
    // console.log(f);

    var obj = {
        a: 20,
        fn: function() {
            console.log( this ); // 20 this -> window
        }
    }
    
    obj.fn();
}

func();


cc.Class({
    extends: cc.Component,

    properties: {
        _a:1,
        // _c:this._b+2,
        label: {
            default: null,
            type: cc.Label
        },
        
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!',
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
        var c=2;
        var obj = {
            a: 20,
            c:this,
            b: this._a + 10,
            fn: function() {
                console.log( this ); 
                console.log(c,this.c);
            }
        }
        func();
        setTimeout(()=> {
            var a = 30;
            console.log( this ); 
        })

        setTimeout(function() {
            var a = 30;
            console.log( this ); 
        })
        
        obj.fn();
    },

    

    // called every frame
    update: function (dt) {

    },
});

