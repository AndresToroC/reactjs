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
  handleLogin: (User: UserType) => void
}

export const UserInitial = {
  document: '',
  email: '',
  isAuth: false
}