import React, { useState, useContext, createContext } from "react";
import { Route, Switch, useHistory } from "react-router";
import {
  StyledSubmit,
  StyledAdminPage,
  StyledAuthBox,
  StyledCenter,
} from "./styles";
import { ProvideAuth, AuthButton, useAuth, PrivateRoute } from "./auth";

const AdminPage = () => {
  return (
    <ProvideAuth>
      <Switch>
        <Route exact path="/admin">
          <PrivateRoute>
            <UpdatePage />
          </PrivateRoute>
        </Route>
        <Route path="/admin/login">
          <LoginPage />
        </Route>
      </Switch>
    </ProvideAuth>
  );
};

const LoginPage = () => {
  const [username, setUsr] = useState("");
  const [password, setPwd] = useState("");
  let auth = useAuth();
  let history = useHistory();

  const handleSub = (event: React.MouseEvent) => {
    event.preventDefault();
    window.sessionStorage.setItem("username", username);
    window.sessionStorage.setItem("password", password);
    auth.signin(username, password, () => {
      history.push("/admin");
    });
  };

  return (
    <StyledAdminPage>
      <p>Use esta página para ingresar nuevas películas a la base de datos.</p>
      <StyledCenter>
        <h2>Por favor ingrese sus credenciales</h2>
        <StyledAuthBox>
          <label htmlFor="uname">Usuario</label>
          <br />
          <input
            id="uname"
            name="uname"
            type="text"
            onChange={(e) => setUsr(e.target.value)}
            value={username}
            placeholder="escriba aqui..."
          />
          <br />
          <label htmlFor="pwrd">Contraseña</label>
          <br />
          <input
            id="pwrd"
            name="pwrd"
            type="password"
            onChange={(e) => setPwd(e.target.value)}
            value={password}
            placeholder="escriba aqui..."
          />
          <br />
          <StyledSubmit value="ingresar" type="submit" onClick={handleSub} />
        </StyledAuthBox>
      </StyledCenter>
    </StyledAdminPage>
  );
};

const UpdatePage = () => {
  const [title, sTitle] = useState("");
  const [description, sDescrp] = useState("");
  const [duration, sDuration] = useState("");
  const [rating, sRating] = useState("Todos");
  const [url, sUrl] = useState("");

  return (
    <StyledAdminPage>
      <p>Bienvenido. Por favor ingrese los datos de la película a agregar.</p>
      <StyledCenter>
        <StyledAuthBox>
          <label htmlFor="title">Título</label>
          <input
            id="title"
            name="title"
            type="text"
            value={title}
            onChange={(e) => sTitle(e.target.value)}
          />
          <label htmlFor="description">Descripción</label>
          <input
            id="description"
            name="description"
            type="text"
            value={description}
            onChange={(e) => sDescrp(e.target.value)}
          />
          <label htmlFor="duration">Duración</label>
          <input
            id="duration"
            name="duration"
            type="number"
            value={duration}
            onChange={(e) => sDuration(e.target.value)}
          />
          <label htmlFor="rating">Rating</label>
          <label htmlFor="Todos">Todos</label>
          <input
            id="Todos"
            name="rating"
            type="radio"
            value="Todos"
            onChange={() => sRating("Todos")}
          />
          <label htmlFor="MayoresDe7">Mayores de 7</label>
          <input
            id="MayoresDe7"
            name="rating"
            type="radio"
            value="MayoresDe7"
            onChange={() => sRating("MayoresDe7")}
          />
          <label htmlFor="MayoresDe12">Mayores de 12</label>
          <input
            id="MayoresDe12"
            name="rating"
            type="radio"
            value="MayoresDe12"
            onChange={() => sRating("MayoresDe12")}
          />
          <label htmlFor="MayoresDe15">Mayores de 15</label>
          <input
            id="MayoresDe15"
            name="rating"
            type="radio"
            value="MayoresDe15"
            onChange={() => sRating("MayoresDe15")}
          />
          <label htmlFor="MayoresDe18">Mayores de 18</label>
          <input
            id="MayoresDe18"
            name="rating"
            type="radio"
            value="MayoresDe18"
            onChange={() => sRating("MayoresDe18")}
          />
          <label htmlFor="url">póster</label>
          <input
            id="url"
            name="url"
            type="text"
            value={url}
            onChange={(e) => sUrl(e.target.value)}
          />
        </StyledAuthBox>
      </StyledCenter>

      <AuthButton />
    </StyledAdminPage>
  );
};

export default AdminPage;
