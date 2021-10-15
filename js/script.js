$(function(){
var dis = 40;
    $fv = $('.fv'),
        $siteTitle = $('.site-title'),
        $bragerBtn = $('.brager-btn')
        $bar =$('.bar')
        $fvWrap = $('.fv__wrap'),
        fvHeight = $fv.outerHeight(),
        wrapHeight = $fvWrap.outerHeight(),
        $win = $(window),
        whiteClass = 'white',
        blackClass = 'black';
        
        $bragerBtn.on('click',function(){
        if($win.scrollTop() < fvHeight -50){
            $('body').toggleClass('musk');
            $('.header-nav').animate({'margin-right': '+=' + dis + '%'},200);
            $('body').toggleClass('no-scroll');
            dis *= -1;
            $('.bars__top, .bars__mid, .bars__btm').toggleClass('open');
        }else{
            $('body').toggleClass('musk');
            $bragerBtn.toggleClass(blackClass);
            $('.header-nav').animate({'margin-right': '+=' + dis + '%'},200);
            $('body').toggleClass('no-scroll');
            dis *= -1;
            $('.bars__top, .bars__mid, .bars__btm').toggleClass('open');
        }
    });

    

        $win.on('load scroll',function(){
            var value = $(this).scrollTop();

            if(value > wrapHeight){
                $siteTitle.addClass(blackClass);

            }else{
                $siteTitle.removeClass(blackClass);
            }

            if(value > fvHeight){
                $bragerBtn.addClass(blackClass);

            }else{
                $bragerBtn.removeClass(blackClass);
            }
        });
        
});