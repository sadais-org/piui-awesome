/*
 * @Author: zhangzhenfei
 * @Date: 2021-03-05 10:36:07
 * @LastEditTime: 2021-03-05 18:35:11
 * @LastEditors: zhangzhenfei
 * @Description: 图片选择
 * @FilePath: /piui-awesome/src/plugins/misson/chooseImage.js
 */

// #ifdef H5

import { invokeMissonApi } from '@/utils/misson'
import { base64ToBlob } from '@/piui/tools/file'

export default async function(params) {
  const { count, success, fail, complete } = params
  // 1	int	是	照片选择最大数
  // 2	int	是	返回类型，0:返回base64,1:返回url
  // 3	int	否	相册显示类型，0:所有照片和视频，1:视频，2:照片,3：视频详细信息
  // 4	int	否	是否显示“原图“选项

  // 标准化uniapp选择图片返回对象
  const uniappResult = {
    errMsg: 'chooseImage:ok',
    tempFilePaths: [],
    tempFiles: []
  }
  try {
    const uris = await invokeMissonApi('MideaCommon', 'getPicture', [count, 1, 2, 1])
    const base64Data = await invokeMissonApi('MideaCommon', 'getBase64s', uris)
    base64Data.base64.forEach((b, index) => {
      // base64 to blob
      const blob = base64ToBlob(`data:image/jpeg;base64,${b}`)
      uniappResult.tempFilePaths.push(blob)
      uniappResult.tempFiles.push(blob)
    })

    success && success(uniappResult)
    complete && complete(uniappResult)
    return uniappResult
  } catch (error) {
    uniappResult.errMsg = 'chooseImage:error'
    fail && fail(uniappResult)
    complete && complete(uniappResult)
    return uniappResult
  }
}

// #endif
