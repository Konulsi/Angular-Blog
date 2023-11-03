export class RegisterDto {
  user!: {
    userName: string;
    password: string;
    email: string;
  };

  constructor() {}
}
