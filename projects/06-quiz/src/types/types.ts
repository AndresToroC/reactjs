export interface PropsContext {
  children: React.ReactNode
}

export interface ThemeContextType {
  theme: boolean,
  handleChangeTheme: () => void
}

export type UserType = {
  document: string,
  email: string,
  isAuth: boolean,
}

export interface UserContextType {
  user: UserType,
  handleLogin: (User: UserType) => void,
  hanldleLogout: () => void
}

export const UserInitial = {
  document: '',
  email: '',
  isAuth: false
}