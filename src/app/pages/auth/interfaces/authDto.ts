// export class AuthDto {
//   user: {
//     password: string;
//     email: string;
//   };

//   constructor({ email, password }) {
//     this.user = {
//       email: email,
//       password: password,
//     };
//   }
// }

export interface AuthDto {
  user: {
    password: string;
    email: string;
  };
}
