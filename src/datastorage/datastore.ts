import firebase from "firebase";
import { v4 as uuidv4 } from 'uuid';

import {RetroBoard, Template} from "datastorage/index";

export async function initBoard() {
    const db = firebase.firestore()
    const boardInfo = await miro.board.info.get()

    const retroBoard: RetroBoard = {}
    await db.collection('RetroBoards').doc(boardInfo.id).set(retroBoard)
    return retroBoard
}

export async function readBoard() {
    const db = firebase.firestore()
    const boardInfo = await miro.board.info.get()
    const board = await db.collection("RetroBoards").doc(boardInfo.id).get()

    return board.data()
}

export async function updateBoard(retroBoard: RetroBoard) {
    const db = firebase.firestore()
    const boardInfo = await miro.board.info.get()

    await db.collection('RetroBoards').doc(boardInfo.id).set(retroBoard);
}

export async function finishRitual(retroBoard: RetroBoard) {
    const db = firebase.firestore()
    if (retroBoard?.activeRitual) {
        await db.collection('Rituals').doc(uuidv4()).set(retroBoard.activeRitual)

        retroBoard.activeRitual = undefined
        await updateBoard(retroBoard)
    }
}

export async function createDebugTemplate(boardKey: string) {
    const db = firebase.firestore()
    const template : Template = {
        boardKey: boardKey
    }
    return await db.collection('Templates').doc(boardKey).set(template)
}

export async function purgeDb() {
    const db = firebase.firestore()

    await deleteCollection(db, "RetroBoards", 128);
    await deleteCollection(db, "Rituals", 128);
    await deleteCollection(db, "Templates", 128);
}

export async function subscribeToCurrentBoard(callback: (RetroBoard) => void) {
    const db = firebase.firestore()
    const boardInfo = await miro.board.info.get()

    const boardRef = db.collection('RetroBoards').doc(boardInfo.id)
    const observer = boardRef.onSnapshot(docSnapshot => {
        callback(docSnapshot.data())
    }, err => {
        console.log(`Encountered error: ${err}`);
    });
}

async function deleteCollection(db, collectionPath, batchSize) {
    const collectionRef = db.collection(collectionPath);
    const query = collectionRef.orderBy('__name__').limit(batchSize);

    return new Promise((resolve, reject) => {
        deleteQueryBatch(db, query, resolve).catch(reject);
    });
}

async function deleteQueryBatch(db, query, resolve) {
    const snapshot = await query.get();

    const batchSize = snapshot.size;
    if (batchSize === 0) {
        // When there are no documents left, we are done
        resolve();
        return;
    }

    // Delete documents in a batch
    const batch = db.batch();
    snapshot.docs.forEach((doc) => {
        batch.delete(doc.ref);
    });
    await batch.commit();

    // Recurse on the next process tick, to avoid
    // exploding the stack.
    process.nextTick(() => {
        deleteQueryBatch(db, query, resolve);
    });
}
