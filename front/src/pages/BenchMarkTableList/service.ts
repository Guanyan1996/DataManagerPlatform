import { request } from 'umi';
import { TableListParams, TableListItem } from './data.d';

export async function queryBenchmark(params?: TableListParams) {
  const response = await request('/api/benchmark', {params,});
  const result = {
    data:response.records,
    total:response.total,
    success:!response.errorCode
  }
  return result;
}

export async function removeRule(params: { key: number[] }) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params: TableListItem) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params: TableListParams) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'update',
    },
  });
}
