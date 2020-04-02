module.exports = ['$window', '$timeout', function(win, timeout) {
    return {
        /**
         * 
         * @param {}
         */
        extends: (win && win.__extends) || (function() {
            var extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function(d, b) { d.__proto__ = b; }) ||
                function(d, b) {
                    for (var p in b)
                        if (b.hasOwnProperty(p)) d[p] = b[p];
                };
            return function(d, b) {
                extendStatics(d, b);

                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
        })(),

        validateEmail: function(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },

        createFlyingDot: function(e) {
            let x = e.clientX;
            let y = e.clientY;
            let ele = document.createElement('div');

            ele.className = 'yh-flying-dot';
            ele.style.left = x + 'px';
            ele.style.bottom = (win.innerHeight - y) + 'px';
            win.document.body.appendChild(ele);
            setTimeout(function() {
                ele.className = ele.className + ' ' + 'active';
                setTimeout(function() {
                    ele.parentNode.removeChild(ele);
                    ele = null;
                }, 650);
            });
        },

        initEnv: function() {
            (function($, Hammer) {
                function hammerify(el, options) {
                    var $el = $(el);
                    if (!$el.data("hammer")) {
                        $el.data("hammer", new Hammer($el[0], options));
                    }
                }

                $.fn.hammer = function(options) {
                    return this.each(function() {
                        hammerify(this, options);
                    });
                };

                // extend the emit method to also trigger jQuery events
                Hammer.Manager.prototype.emit = (function(originalEmit) {
                    return function(type, data) {
                        originalEmit.call(this, type, data);
                        $(this.element).trigger({
                            type: type,
                            gesture: data
                        });
                    };
                })(Hammer.Manager.prototype.emit);
            })($, Hammer);
        },

        isMobile: function() {
            let check = false;
            (function(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        },

        /**
         * 
         * @param {}
         */
        makeEle: function(type, cls) {
            var ele = document.createElement(type);

            if (cls) ele.className = cls;
            return ele;
        },

        /**
         * 
         * @param {}
         */
        find: function(ele, cls) {
            return ele.querySelector(cls);
        },

        /**
         * 
         * @param {}
         */
        addCls: function(ele, cls) {
            return (ele.className = ele.className.trim() + ' ' + cls);
        },

        /**
         * 
         * @param {}
         */
        removeCls: function(ele, cls) {
            var c = ele.className.trim().split(/\s+/g),
                i = c.length,
                t = [];

            cls = cls.trim();
            while (i--)
                if (c[i] !== cls) t.push(c[i]);
            ele.className = t.join(' ');
        },

        /**
         * 
         * @param {}
         */
        decendingSort: function(arr) {
            return arr.sort(function compare(a, b) {
                return a < b ? 1 : a > b ? -1 : 0;
            });
        },

        /**
         * 
         * @param {}
         */
        randomHexColor: function() {
            var table = '0123456789ABCDEF'.split('');
            return '#' + (function fn(colorStr) {
                return (colorStr += table[Math.floor(Math.random() * 16)]) &&
                    (colorStr.length === 6) ? colorStr : fn(colorStr);
            })('');
        },

        /**
         * 
         * @param {}
         */
        print: function(type, message) {
            console.log('%c' + message, 'color:' + ['red', 'orange', 'green'][type] + ';font-weight:bold;');
        },

         /**
         * if offset is 1 you are getting tomorrow
         * @param {}
         */
        getOffsetFromDate: function(date, offset) {
            return new Date((date || new Date()).getTime() + (offset) * (24 * 60 * 60 * 1000));
        },

        /**
         * 
         * @param {}
         */
        getNumOfDaysBetweenTwoDates: function(first, second, inclusive) {
            return Math.round((second - first) / (1000 * 60 * 60 * 24)) + (inclusive ? 1 : 0);
        },

        /**
         * 
         * @param {}
         */
        transformSnakeToCamel: function(snake) {
            return snake.replace(/(_[0-9 a-z A-Z]?)/g, function(x) {return x.charAt(1).toUpperCase();});
        }
    };
}];

