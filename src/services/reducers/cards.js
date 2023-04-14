import { CARDS, CARDS_GET_SUCCESS, CARDS_GET_FAILED, LIKE_ADD, LIKE_DELETE, CARD_DELETE } from '../constants';

const initialStore = {
  cards: [],

  isGetCardRequest: false,
  isGetCardFailed: false,
  messageFailed: {},
};

export const cardsReducer = (state = initialStore, action) => {
  switch (action.type) {
    case CARDS:
      return {
        ...state,
        isGetCardRequest: true,
        isGetCardFailed: false,
      };
    case CARDS_GET_SUCCESS:
      return {
        ...state,
        cards: action.newRes,
        isGetCardRequest: false,
        isGetCardFailed: false,
      };
    case CARDS_GET_FAILED:
      return {
        ...state,
        message: action.res,
        isGetCardFailed: true,
      };
    case LIKE_ADD:
      return {
        ...state,
        cards: [...state.cards.map(card=> (card._id === action.id) ? {...card, isLike: true} : card)]
      };
    case LIKE_DELETE:
      return {
        ...state,
        cards: [...state.cards.map(card=> (card._id === action.id) ? {...card, isLike: false} : card)]
      }
    case CARD_DELETE:
      return {
        ...state,
        cards: [...state.cards.filter(card => card._id !== action.id )]
      };
    default:
      return state;
  }
};
