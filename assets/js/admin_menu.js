$('#ingresarcaja').click(function(){
		$('#ingresarcaja').addClass("active");
		$('#crear').removeClass("active");
		$('#nuevocliente').removeClass("active");
		$('#nuevoproducto').removeClass("active");
		$('#herramientas').removeClass("active");
		$('#adminproductos').removeClass("active");
		$('#adminclientes').removeClass("active");
		$('#admincajas').removeClass("active");
		$('#adminfacturas').removeClass("active");
  		$('#contenido').load('../../user/admin/crearcaja.php');		
});

$('#nuevocliente').click(function(){
		$('#ingresarcaja').removeClass("active");
		$('#crear').addClass("active");
		$('#nuevocliente').addClass("active");
		$('#nuevoproducto').removeClass("active");
		$('#herramientas').removeClass("active");
		$('#adminproductos').removeClass("active");
		$('#adminclientes').removeClass("active");
		$('#admincajas').removeClass("active");
		$('#adminfacturas').removeClass("active");
  		$('#contenido').load('../../user/admin/nuevocliente.php');		
});

$('#nuevoproducto').click(function(){
		$('#ingresarcaja').removeClass("active");
		$('#crear').addClass("active");
		$('#nuevocliente').removeClass("active");
		$('#nuevoproducto').addClass("active");
		$('#herramientas').removeClass("active");
		$('#adminproductos').removeClass("active");
		$('#adminclientes').removeClass("active");
		$('#admincajas').removeClass("active");
		$('#adminfacturas').removeClass("active");
  		$('#contenido').load('../../user/admin/nuevoproducto.php');		
});

$('#adminproductos').click(function(){
		$('#ingresarcaja').removeClass("active");
		$('#crear').removeClass("active");
		$('#nuevocliente').removeClass("active");
		$('#nuevoproducto').removeClass("active");
		$('#herramientas').addClass("active");
		$('#adminproductos').addClass("active");
		$('#adminclientes').removeClass("active");
		$('#admincajas').removeClass("active");
		$('#adminfacturas').removeClass("active");
       	$('#contenido').load('../../user/admin/adminproductos.php');
});

$('#adminclientes').click(function(){
		$('#ingresarcaja').removeClass("active");
		$('#crear').removeClass("active");
		$('#nuevocliente').removeClass("active");
		$('#nuevoproducto').removeClass("active");
		$('#herramientas').addClass("active");
		$('#adminproductos').removeClass("active");
		$('#adminclientes').addClass("active");
		$('#admincajas').removeClass("active");
		$('#adminfacturas').removeClass("active");
       	$('#contenido').load('../../user/admin/adminclientes.php');
});

$('#admincajas').click(function(){
		$('#ingresarcaja').removeClass("active");
		$('#crear').removeClass("active");
		$('#nuevocliente').removeClass("active");
		$('#nuevoproducto').removeClass("active");
		$('#herramientas').addClass("active");
		$('#adminproductos').removeClass("active");
		$('#adminclientes').removeClass("active");
		$('#admincajas').addClass("active");
		$('#adminfacturas').removeClass("active");
       	$('#contenido').load('../../user/admin/admincajas.php');
});

$('#adminfacturas').click(function(){
		$('#ingresarcaja').removeClass("active");
		$('#crear').removeClass("active");
		$('#nuevocliente').removeClass("active");
		$('#nuevoproducto').removeClass("active");
		$('#herramientas').addClass("active");
		$('#adminproductos').removeClass("active");
		$('#adminclientes').removeClass("active");
		$('#admincajas').removeClass("active");
		$('#adminfacturas').addClass("active");
       	$('#contenido').load('../../user/admin/adminfacturas.php');
});