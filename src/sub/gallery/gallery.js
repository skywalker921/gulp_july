$(document).ready(function(){

    console.log('test');

    let url_search = 'https://www.flickr.com/services/rest/?method=flickr.photos.search';
    let key = '673aecd9f0fe2c86bdcaa64b50aca0ca';

    $.ajax({
        url : url_search,
        dataType : 'json',
        data : {
            api_key : key,
            per_page : 16,
            tags : 'modern arts',
            tagmode : 'any',
            privacy_filter : 5,
            format : 'json',
            nojsoncallback : 1
        }
    })
    .success(function(data){

        let items = data.photos.photo;

        $(items).each(function(){

            $('.gallery .wrap>ul').append(
                $('<li>')
                .append(
                    $('<a>').attr({href : 'https://farm'+this.farm+'.staticflickr.com/'+this.server+'/'+this.id+'_'+this.secret+'_b.jpg'}) 
                        .append(
                            $('<img>').attr({src : 'https://farm'+this.farm+'.staticflickr.com/'+this.server+'/'+this.id+'_'+this.secret+'_m.jpg'})
                        )
                )
            )
        });

    })
    .error(function(){
        alert('Fail to load data')
    });


    $('body').on('click', '.gallery .wrap>ul>li', function(e){
        e.preventDefault();

        let imgSrc = $(this).children('a').attr('href');

        $('.bigImg>img').attr({src : imgSrc});
        $('.bigImg').fadeIn();

        // $('.bigImg span').on('click', function(){
        //     $('.bigImg').fadeOut();
        // })

        //닫기
        $('.bigImg').on('click', function(){
   
            $('.bigImg').fadeOut(1);
        })

    });
   

    


});


/* 레이어팝업
 

 $('body').append('<div id="back></div><div id="main></div>')
 */