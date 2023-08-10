import { User } from "./UserTypes";

export interface ThemeContextType {
  theme: boolean,
  handleChangeTheme: () => void
}

export interface UserContextType {
  users: User[],
  userSelected: User | null,
  handleDeleteUser: (uid: string) => void,
  handleAddUser: (user: User) => void,
  handleSelectedEdit: (uid: string) => void,
  handleSelectedEditClear: () => void,
  handleUpdateUser: (user: User) => void,
}