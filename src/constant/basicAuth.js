import auth from "../config/auth";

const basicAuth = {
  token: {
    headers: {
      Authorization: auth.BASIC_AUTH_TOKEN
    }
  }
}

export default basicAuth;