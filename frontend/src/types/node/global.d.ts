/* eslint-disable no-unused-vars */
declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_SOCKET_URL: string;
  }
  interface Process {
    env: ProcessEnv;
  }
}
