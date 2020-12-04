import { Pages } from "../components/pages-container/constants";
import EmojiOption from "components/emotional-scale/emoji-option";

const initialState = {
  currentPage: Pages.START_STAGE,
  participantsCount: null,
  user: {
    id: null,
    role: null,
    mood: null,
    ease: null
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
  mood: EmojiOption | null
  ease: EmojiOption | null
};

export type RitualState = {
  name: string | null
  ease: EmojiOption | null
  mood: EmojiOption | null
  time: string | null
  group: string | null
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

export const setUserMood = payload => ({
  type: "SET_USER_MOOD",
  payload
});

export const setRetroHardness = payload => ({
  type: "SET_USER_RETRO_HARDNESS",
  payload
});

export const setGroupSize = payload => ({
  type: "SET_GROUP_SIZE",
  payload
});

export const setRitualTime = payload => ({
  type: "SET_RITUAL_TIME",
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
    case "SET_USER_RETRO_HARDNESS":
      return { ...state, user: { ease: action.payload } };
    case "SET_USER_MOOD":
      return { ...state, user: { mood: action.payload } };

    case "SET_RITUAL_TIME":
      return { ...state, ritual: { time: action.payload } };
    case "SET_GROUP_SIZE":
      return { ...state, ritual: { group: action.payload } };
    default:
      return state;
  }
};
