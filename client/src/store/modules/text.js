import text from '../../api/text';

export default {
    namespaced: true,
    state: {
        textLists: [],
        behaviorLogs: [],
    },
    getters: {
        textLists: state => state.textLists,
        behaviorLogs: state => state.behaviorLogs,
    },
    mutations: {
        setTextLists(state, textLists) {
          state.textLists = textLists
        },
        setBehaviorLogs(state, behaviorLogs) {
            state.behaviorLogs = behaviorLogs
        },
        appendTextData(state, text) {
            state.textLists.push(text);
        },
        appendBehaviorLogs(state, behavior) {
            state.behaviorLogs.push(behavior);
        }
    },
    actions: {
        async storeTextData({commit}, params) {
            await text.storeTextData(params).then(res => {
                commit('appendTextData', res)
            })
        },
        async storeBehaviorLog({commit}, params) {
            await text.storeBehaviorLog(params).then(res => commit('appendBehaviorLogs', res))
        },
        async listAllTexts({commit}, date) {
            await text.listAllTexts(date).then(res => commit('setTextLists', res))
        },
        async listAllBehaviors({commit}, date) {
            await text.listAllBehaviors(date).then(res => commit('setBehaviorLogs', res))
        }
    }
};
