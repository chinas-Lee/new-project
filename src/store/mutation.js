/**
 * Created by LCQ on 2019-05-13,0013.
 */
import * as types from './mutation-type'
const mutation = {
    [types.SET_LOGIN_STATUS] (state, val) {
        state.loginStatus = val
    }
}

export default mutation
