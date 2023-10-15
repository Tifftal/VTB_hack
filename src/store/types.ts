export const BASE_URL = "http://81.177.135.38";

export interface commonStateType {
    isSocketConnected: boolean;
}

export interface socketConnectionType {
    type: "socketConnection";
    state: boolean;
}

export enum rooms {
    SOME_ROOM = "/room1",
}

export enum events {
    SET = "SET",
    GET = "GET",
}
