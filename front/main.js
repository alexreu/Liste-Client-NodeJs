// permet d'actualiser la liste sans rechargement de la page
$(function(){
    $("#reload").on('click', function(){
        $.ajax({url :'http://127.0.0.1:3012/liste', 
            success: function(data){
                var data2 =[];
                for (var cle in data){
                    tmp ='<li class="text-dark list-group-item list-group-item-primary">' + data[cle].name.first +" "+ data[cle].name.last + "</li>"
                    data2.push(tmp);
                };
                $('#test').html(data2);
            }
        });
    })
})

// affiche la liste sur la page
$.ajax({url :'http://127.0.0.1:3012/liste', 
    success: function(data){
        var data2 =[];
        for (var cle in data){
            tmp ='<li class="text-dark list-group-item list-group-item-primary">' + data[cle].name.first +" "+ data[cle].name.last + "</li>"
            data2.push(tmp);
        };
        $('#test').html(data2);
    }
});