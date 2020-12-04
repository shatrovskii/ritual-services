import firebase from "firebase";
import {RetroBoard} from "datastorage/index";

export async function initBoard() {
    const db = firebase.firestore()
    const boardInfo = await miro.board.info.get()

    const retroBoard: RetroBoard = {}
    return await db.collection('RetroBoards').doc(boardInfo.id).set(retroBoard);
}

export async function updateBoard(retroBoard: RetroBoard) {
    const db = firebase.firestore()
    const boardInfo = await miro.board.info.get()

    return await db.collection('RetroBoards').doc(boardInfo.id).set(retroBoard);
}

