$(function(){
    $("#reload").on('click', function(){
        $.ajax({url :'http://127.0.0.1:3012/liste', 
            success: function(data){
                console.log(data[0].name.first);
                console.log(data[0].name.last);
                var data2 =[];
                for (var cle in data){
                    tmp ='<li class="list-group-item">' + data[cle].name.first +" "+ data[cle].name.last + "</li>"
                    data2.push(tmp);
                };
                $('#test').html(data2);
            }
        });
    })
})
$.ajax({url :'http://127.0.0.1:3012/liste', 
    success: function(data){
        console.log(data[0].name.first);
        console.log(data[0].name.last);
        var data2 =[];
        for (var cle in data){
            tmp ='<li class="list-group-item">' + data[cle].name.first +" "+ data[cle].name.last + "</li>"
            data2.push(tmp);
        };
        $('#test').html(data2);
    }
});