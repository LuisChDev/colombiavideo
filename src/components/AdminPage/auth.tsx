import { createContext, useContext, useState } from "react";
import { useHistory, Route, Redirect } from "react-router-dom";
import { backend } from '../../App';

/**
 * esta función se encarga de contener el estado actual de la autenticación,
 * así como los métodos (async) para loguearse y cerrar la sesión.
 *
 * aquí ubicamos el llamado de API que buscará en el servidor si la combinación
 * usuario/contraseña son correctos.
 */
const authObj: {
  user: string | null;
  signin: (usr: string, pss: string, cb: () => void) => void;
  signout: (cb: () => void) => void;
} = {
  user: null,
  async signin(usr, pss, cb) {
    const res = await fetch(backend + "/auth?usr=" + usr + "&pwd=" + pss);
    const response = await res.json();
    if (response) {
      authObj.user = "admin";
    }
    cb();
  },
  async signout(cb) {
    authObj.user = null; // no hay necesidad de hacer nada
    setTimeout(cb, 100); // con basic auth
  },
};

const authContext = createContext(authObj);

/**
 * este componente provee a su hijo de un objeto con los tres atributos como
 * tiene authObj. Este es generado en su estado inicial por useProvideAuth.
 * authContext es el nombre del contexto. Al crear un contexto, debemos proveer
 * un valor por defecto, que se usa si un componente llamando
 * useContext(authContext) no halla encima suyo un authContext.provider con un
 * valor apropiado.
 */
const ProvideAuth = ({ children }: { children: React.ReactChild }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

const useAuth = () => {
  return useContext(authContext);
};

const useProvideAuth = () => {
  const [user, setUser] = useState<string | null>(null);

  const signin = (usr: string, pss: string, cb: () => void) =>
    authObj.signin(usr, pss, () => {
      setUser(usr);
      cb();
    });

  const signout = (cb: () => void) =>
    authObj.signout(() => {
      setUser(null);
      cb();
    });

  return {
    user,
    signin,
    signout,
  };
};

const AuthButton = () => {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <p>
      Bienvenido!
      <button onClick={() => auth.signout(() => history.push("/"))}>
        Cerrar Sesión
      </button>
    </p>
  ) : (
    <p>No has ingresado aún.</p>
  );
};

const PrivateRoute = ({children, ...rest}: {
  children: JSX.Element
}) => {
  let auth = useAuth();

  return(
    <Route
        {...rest}
        render={({location}) =>
        auth.user ? (
          children
        ) : (
          <Redirect to={{pathname: "/admin/login", state: {from: location}}} />
        ) }
    />
  )
}

export { ProvideAuth, useAuth, AuthButton, PrivateRoute };
