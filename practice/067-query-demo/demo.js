(function ($) {


    function init(dom, args) {
        if (args.current <= args.pageCount) {
            fillHtml(dom, args);
            bindEvent(dom, args);
        } else {
            console.log('页码有误:');

        }
    };

    function fillHtml(dom, args) {

        dom.empty();
       
        //上一页
        if (args.current > 1) {
            dom.append('<a href="#" class="prev-page">上一页</a>')
        } else {
            dom.remove('.prev-page');
            dom.append('<span href="#"  class="pdisabled">上一页</span>')
        }

        //中间页

        if (args.current != 1 && args.current > 4 && args.pageCount != 4) {
            dom.append('<a href="#" class="tcd-number">' + 1 + '</a>')
        }

        if (args.current - 2 > 2 && args.current <= args.pageCount && args.pageCount > 5) {
            dom.append('<span>...</span>')
        }

        //中间连续页

         let start = args.current - 2;
         let end = args.current + 2;
        for (; start <= end; start++) {
            if (start <= args.pageCount && start >= 1) {
                if (start != args.current) {
                    dom.append('<a class="tcd-number"> ' + start + '</a>');
                } else {
                    dom.append('<span class="current">' + start + '</span>')
                }
            }
        }


        if (args.current + 2 < args.pageCount - 1 && args.pageCount > 5) {
            dom.append('<span>...</span>')
        }
        if (args.current != args.pageCount && args.current < args.pageCount - 2 && args.pageCount != 4) {
            dom.append('<a class="tcd-number">' + args.pageCount + '</a>');
        }

        //下一页
        if (args.current < args.pageCount) {
            dom.append('<a href="#" class="next-page">下一页</a>');

        } else {
            dom.remove('.next-page');
            dom.append('<span href="#"  class="pdisabled">下一页</span>');
        }
    };

    function bindEvent(obj, args) {
        obj.on('click', '.tcd-number', function () {
            let cur = parseInt($(this).text())
            changPage(obj, args, cur);
        })

        obj.on('click', '.prev-page', function () {
            let cur = parseInt(obj.children('.current').text())
            changPage(obj, args, cur - 1);
        })
        obj.on('click', '.next-page', function () {
            let cur = parseInt(obj.children('.current').text())
            changPage(obj, args, cur + 1);
        })
    };

    function changPage(dom, args, page) {
        fillHtml(dom, {
            current: page,
            pageCount: args.pageCount
        })
        if (typeof (args.backFn == 'function')) {
            args.backFn(page)
        }
    }

    $.fn.createPage = function (options) {
        let args = $.extend({
            pageCount: 5,
            current: 1,
            backFn: function () {}
        }, options)
        init(this, args);
    }

})(jQuery)
