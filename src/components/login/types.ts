import { SubmitHandler } from 'react-hook-form';

type LoginProps = {
  setIsRegister: (state: boolean) => void;
  isLoad: boolean;
  error: string;
};

type AuthData = {
  username: string;
  password: string;
};

type RegisterData = AuthData & {
  confirmpassword: string;
};

export type AuthProps = LoginProps & {
  onSubmit: SubmitHandler<AuthData>;
};
export type RegisterProps = LoginProps & {
  onSubmit: SubmitHandler<RegisterData>;
};
