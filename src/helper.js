/**
 * Created by zh on 2018/5/3.
 */

import axios from 'axios'

export const minus = function (a, b) {
  return a - b
};

export const sum = function (a, b) {
  return a + b
};

export const forData = async promise => {
  try {
    return await promise
  } catch (e) {
    console.error(e.code ? `${e.code} ${e.desc}` : `解析错误: ${e.message}`);
    throw e
  }
};

