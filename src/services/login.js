import users from '../data';

export default function login(credentials) {
  const { login, password } = credentials;

  const user = users.find((user) => user.login === login && user.password === password);

  return user || null;
}
