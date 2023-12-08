import { ILiveConfig } from '@/interface';
import request from '@/utils/request';

export function fetchFrontendList(params) {
  return request.get('/live_config/list', { params });
}

export function fetchFindFrontend(id: number) {
  return request.get(`/live_config/find/${id}`);
}

export function fetchCreateFrontend(data: ILiveConfig) {
  return request.instance({
    url: `/live_config/create`,
    method: 'post',
    data,
  });
}

export function fetchUpdateFrontend(data: ILiveConfig) {
  return request.instance({
    url: `/live_config/update/${data.id!}`,
    method: 'put',
    data,
  });
}

export function fetchDeleteFrontend(id: number) {
  return request.instance({
    url: `/live_config/delete/${id}`,
    method: 'delete',
  });
}
