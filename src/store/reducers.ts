import { Pages } from "../components/pages-container/constants";
import EmojiOption from "components/emotional-scale/emoji-option";

const initialState = {
  currentPage: Pages.START_STAGE,
  participantsCount: null,
  user: {
    id: null,
    role: null,
    emotion: null,
    retroHardness: null
  },
  ritual: {
    name: null,
    ease: {
      id: 0,
      label: "easy",
      img: "😏"
    },
    mood: {
      id: 3,
      label: "high-energy",
      img: "🏋‍"
    }
  }
};

export type UserState = {
  id: string | null
  role: string | null
  emotion: EmojiOption | null
  retroHardness: EmojiOption | null
};

export type RitualState = {
  name: string | null
  ease: EmojiOption | null
  mood: EmojiOption | null
};

export type AppState = {
  currentPage: Pages
  participantsCount: any
  user: UserState
  ritual: RitualState
};

//action creators
export const setPage = payload => ({
  type: "SET_PAGE",
  payload
});

export const startRitual = payload => ({
  type: "START_RITUAL",
  payload
});

//middlewares
export const test = () => (dispatch, getState) => {
  dispatch();
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_PAGE":
      return { ...state, currentPage: action.payload };
    case "START_RITUAL":
      return { ...state, ritual: { name: action.payload } };
    default:
      return state;
  }
};
