import {doAjax} from './software'

export const queryLayerTreeData = () => {
    return doAjax({}).then(layerTreeData => {
        return layerTreeData.FuncItem
    }, (response) => {
        console.log('==fetch.js====queryLayerTreeData===error==='+response)
    })
}
