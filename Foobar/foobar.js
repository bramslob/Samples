var foobar,
    FooBarClass = function(limit) {
        this.limit = limit || 100;
        
        this.setLimit = function(limit){
            this.limit = limit;
        };
        
        this.run = function(){
            if(this.limit <= 0) {
                return false;
            }
            
            var i = 1,
                html = '',
                list;
        
            for(i; i <= this.limit; i++) {
                var output = '',
                    result = '';
                
                if(i % 3 === 0) {
                    output += 'Foo';
                }
                if(i % 5 === 0) {
                    output += 'Bar';
                }
                
                result = (output.length > 0) ? output : i;
                
                if(typeof console !== 'undefined'
                    && typeof console.log !== 'undefined') {
                
                    console.log(i + ': ' + result);
                }
                
                html += '<span class="outer"><span class="inner">' + result  + '</span></span>';
            }
            
            list = document.getElementById('list');
            list.innerHTML = html;
            TweenMax.staggerFromTo("#list .outer", 0.5, {y: 1000}, {opacity: 1, y: 0, backgroundColor: 'rgb(255,255,255)'}, 0.1)
        };
    };
foobar = new FooBarClass();