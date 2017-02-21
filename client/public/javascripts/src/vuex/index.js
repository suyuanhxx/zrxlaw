
    $(document).ready(function () {

      var app = new Vue({
        el: '#app',
        data: {
          message: 'Hello Vue!66666666666666666677776'
        }
      })



        $.getJSON('/lawers', function (data) {
            console.log(data);
//                <div class="col-md-4">
//                    <div class="team-box text-center to-animate-2">
//                        <div class="user">
//                          <img class="img-reponsive" src="images/person2.jpg" alt="Roger Garfield">
//                        </div>
//                        <h3>Kevin Steve</h3>
//                        <span class="position">Lawyer</span>
//                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
//                        <ul class="social-media">
//                            <li><a href="#" class="facebook"><i class="icon-facebook"></i></a></li>
//                            <li><a href="#" class="twitter"><i class="icon-twitter"></i></a></li>
//                            <li><a href="#" class="dribbble"><i class="icon-dribbble"></i></a></li>
//                            <li><a href="#" class="codepen"><i class="icon-codepen"></i></a></li>
//                            <li><a href="#" class="github"><i class="icon-github-alt"></i></a></li>
//                        </ul>
//                    </div>
//                </div>
            $.each(data.data, function (index, value) {
                var lawhtml = "<div class='col-md-4'>" +
                    "<div class='team-box text-center to-animate-2'>" +
                    "<div class='user'>" +
                    "<img class='img-reponsive' src='" + value.avatar + "' alt='" + value.lawerName + "'></div>" +
                    "<h3>" + value.lawerName + "</h3><span class='position'>" + value.position + "</span><p>" + value.description + "</p><ul class='social-media'>" +
                    "<li><a href='#' class='wechat'><i class='icon-wechat'></i>" + value.wechatId +
                    "</a></li></ul></div></div>";

                // $("#lawerContainer").append(lawhtml);


            });

        });

        //首页设置
        index.index_set();



    });

var index={

    index_set:function () {





      // vue
        new Vue({
            el: '#lawerContainer',
            data: {
                message: '测试'
            }
        })






    },



}



