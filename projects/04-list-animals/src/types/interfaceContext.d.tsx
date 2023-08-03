export interface ThemeContextInterface {
  theme: boolean,
  handleChangeTheme: () => void
}

export interface Props {
  children: React.ReactNode
}

export interface AnimalContextType {
  name: string,
  race: string,
  type: string,
  code: string,
}

export interface AnimalsType {
  animals: AnimalContextType[]
}