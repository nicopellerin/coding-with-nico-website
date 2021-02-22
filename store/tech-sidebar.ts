import {atom} from 'recoil'

export const techSidebarOpenState = atom<boolean>({
    key: 'techSidebarOpenState',
    default: false
})