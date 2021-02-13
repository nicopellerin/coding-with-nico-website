import { atom } from 'recoil'

export const audioOnState = atom<boolean>({
    key: 'audioOnState',
    default: true
})