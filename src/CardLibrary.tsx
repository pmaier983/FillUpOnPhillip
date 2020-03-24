import {
  RepositoriesCard, PersonalCard, ContactCard, PictureCard, LayoutHandlerCard, TechUsedCard,
} from './components/Cards'

interface ICardLibraryStructure {
  // TODO: Get Rid of Any
  PersonalCard: any,
  RepositoriesCard: any,
  ContactCard: any,
  PictureCard: any,
  LayoutHandlerCard: any,
  TechUsedCard: any,
  [key: string]: any,
}

export const CardLibrary: ICardLibraryStructure = {
  PersonalCard,
  RepositoriesCard,
  ContactCard,
  PictureCard,
  LayoutHandlerCard,
  TechUsedCard,
}
