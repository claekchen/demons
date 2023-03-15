import { atom } from "recoil"
import { IAvatar } from "./types"

export const selectAvatarState = atom<IAvatar>({
    key: 'selectAvatar',
    default: {
        name: "123",
        weapons: 100,
        mana: 100,
        faith: 100   
    },
  })


