/**
 * 常用的正则验证包 正则引用自 https://github.com/any86/any-rule
 * @param reg 
 */
export const match = (reg:RegExp)=>(value:string)=>reg.test(value)

/**
 * 火车车次
 */
export const trainMatch = match(/^[GCDZTSPKXLY1-9]\d{1,4}$/)
/**
 * 身份证
 */
export const idCardMatch = match(/(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/)

/**
 * 护照
 */
export const passportMatch = match(/(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/)

/**
 * 账号是否合法验证
 */
export const userNameMatch = match(/^[a-zA-Z]\w{4,15}$/)

/**
 * 密码强度验证
 */
export const passwordMatch = match(/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/)

/**
 * 小数验证
 */
export const floatMatch = match(/^\d+\.\d+$/)

/**
 * 数字验证
 */
export const numberMatch = match(/^\d{1,}$/)

/**
 * html标签验证
 */
 export const htmlTagMatch = match(/<(\w+)[^>]*>(.*?<\/\1>)?/)

 /**
  * qq
  */
export const qqMatch = match(/^[1-9][0-9]{4,10}$/)

/**
 * 必须带端口号的网址(或ip)
 */
export const portIpMatch = match(/^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/)

export const ipv4Match = match(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)

export const ipv6Match = match(/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i)
/**
 * mac地址
 */
export const macMatch = match(/^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/)

/**
 * 16进制颜色
 */
export const hexColorMatch = match(/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/)

/**
 * 微信号
 */
export const wechatMatch = match(/^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/)

/**
 * 邮政
 */
export const postalServiceMatch = match(/^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/)

/**
 * 网址(url,支持端口和"?+参数"和"#+参数)
 */
export const urlMatch = match(/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/)
 
/**
 * 统一社会信用代码
 */
export const socialCreditCodeMatch = match(/^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/)

/**
 * html注释
 */
export const htmlComments = match(/^<!--[\s\S]*?-->$/)

/**
 * 邮箱验证
 */
export const emailMatch = match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

/**
 * md5格式(32位)
 */
export const md5StrMatch = match(/^([a-f\d]{32}|[A-F\d]{32})$/)

/**
 * 版本号
 */
export const versionMatch = match(/^\d+(?:\.\d+){2}$/)

/**
 * 视频(video)链接地址（视频格式可按需增删）
 */
export const videoUrlMatch = match(/^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i)
/**
 * 图片(image)链接地址（图片格式可按需增删）
 */
export const imageUrlMatch = match(/^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i)
/**
 * 24小时制时间（HH:mm:ss）
 */
export const HHmmssMatch = match(/^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/)
/**
 * 12小时制时间（hh:mm:ss）
 */
export const hhmmssMatch = match(/^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/)
/**
 * base64格式
 */
export const base64Match = match(/^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i)
/**
 * 数字/货币金额（支持负数、千分位分隔符）
 */
export const thousandthAmountMatch = match(/^-?\d+(,\d{3})*(\.\d{1,2})?$/)
/**
 * 数字/货币金额 (只支持正数、不支持校验千分位分隔符)
 */
export const plusNormalAmountMatch = match(/(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0){1}$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/)
/**
 * 银行卡号
 */
export const bankCardMatch = match(/^[1-9]\d{9,29}$/)
/**
 * 中文姓名
 */
export const cnNameMatch = match(/^(?:[\u4e00-\u9fa5·]{2,16})$/)
/**
 * 英文姓名
 */
export const enNameMatch = match(/(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/)

/**
 * 新能源车牌
 */
export const newEnergyCarCodeMatch = match(/[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/)

/**
 * 普通车牌号
 */
export const carCodeMatch = match(/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/)

/**
 * 手机号
 */
export const phoneMatch = match(/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/)
/**
 * 简单验证
 */
export const phoneEsayMatch = match(/^(?:(?:\+|00)86)?1[3-9]\d{9}$/)
/**
 * 1开头就是手机号
 */
export const phoneMsgMatch = match(/^(?:(?:\+|00)86)?1\d{10}$/)

/**
 * 座机验证
 */
export const telPhoneMatch = match(/^\d{3}-\d{8}$|^\d{4}-\d{7,8}$/)

/**
 * 日期校验
 */
export const dateMatch = match(/^\d{4}(-)(1[0-2]|0?\d)\1([0-2]\d|\d|30|31)$/)

