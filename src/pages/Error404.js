const Error404 = () => {
    const view = `
      <div class="Error404">
        <h2>Error 404</h2>
      </div>
    `;
    return view;
  };
  
  export default Error404;

  /*
  En el archivo resolveRoutes.js elimina el template literal al momento de retornar route, 
  ya que si no lo haces estarías agregando una ‘/’ de más a la ruta y eso ocasiona que al 
  momento de ingresar al sitio la ruta sea ‘//’, la cual no existe y por eso te redirige al 404 page.
  */