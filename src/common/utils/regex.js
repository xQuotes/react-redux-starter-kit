//IP地址正则 
export const ipReg = /^((\d|[1-9]\d|[1]\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|[1]\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|[1]\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|[1]\d\d|2[0-4]\d|25[0-5]))$/  

//端口号正则 
export const portReg = /^[1-9]$|(^[1-9][0-9]$)|(^[1-9][0-9][0-9]$)|(^[1-9][0-9][0-9][0-9]$)|(^[1-6][0-5][0-5][0-3][0-5]$)/

//手机号验证
export const phoneReg = /^(((13[0-9]{1})|(17[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/
