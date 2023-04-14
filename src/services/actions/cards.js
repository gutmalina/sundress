import api from "../../utils/api";
import { CARDS, CARDS_GET_SUCCESS, CARDS_GET_FAILED, LIKE_ADD, LIKE_DELETE, CARD_DELETE } from '../constants';

/** получить все данные */
export const getAllCardsAction = (user) => {
  return function (dispatch) {
    dispatch({
      type: CARDS,
    });
    api.getAllData()
      .then((res) => {
        if (res) {
          const newRes = res.map((item)=>({...item, isLike: false}))
          dispatch({
            type: CARDS_GET_SUCCESS,
            newRes
          });
        } else {
          dispatch({
            type: CARDS_GET_FAILED,
            res
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: CARDS_GET_FAILED,
          err
        });
      });
  };
};

/** поставить лайк */
export const addLikeAction = (id) => ({
  type: LIKE_ADD,
  id
});

/** удалить лайк */
export const deleteLikeAction = (id) => ({
  type: LIKE_DELETE,
  id
});

/** удалить карточку */
export const deleteCardAction = (id) => ({
  type: CARD_DELETE,
  id
});
