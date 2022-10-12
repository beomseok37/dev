/* eslint-disable no-unused-vars */
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SOCKET_URL: string;
    NEXT_PUBLIC_SERVER_URL: string;
  }
  interface Process {
    env: ProcessEnv;
  }
}
