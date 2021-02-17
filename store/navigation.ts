import {atom} from 'recoil'

export const mobileDropdownState = atom<boolean>({
    key: 'mobileDropdownState',
    default: false
})