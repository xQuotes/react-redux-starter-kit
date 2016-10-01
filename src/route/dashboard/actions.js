export const URL_CHANGE = 'URL_CHANGE'

export function changeUrl(bcData, menuData) {
  return (dispatch, getState) => {
    dispatch({
      type: URL_CHANGE,
      bcData: bcData,
      menuData: menuData
    })
  }
}