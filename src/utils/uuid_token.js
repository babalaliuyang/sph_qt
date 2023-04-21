import { v4 as uuidv4 } from 'uuid'
// 要生成一个随机字符串，且该字符串每次执行时不发生变化，游客身份持久储存
export const getUUID = () => {
    let uuid_token = localStorage.getItem('UUIDTOKEN')
    if (!uuid_token) {
        uuid_token = uuidv4()
        localStorage.setItem('UUIDTOKEN', uuid_token)
    } 阿斯顿发顺丰

    return uuid_token
}