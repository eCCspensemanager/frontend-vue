import { CategoryState } from '@/components/category/store';

export function mockGetters(originalGetters: any) {
  let mockObject: any = Object.assign({}, originalGetters);
  Object.keys(mockObject).forEach((key) => {
    mockObject[key] = (_: any) => jest.fn();
  });
  return mockObject;
}

export function mockMutations(originalMutations: any) {
  let mockObject: any = Object.assign({}, originalMutations);
  Object.keys(mockObject).forEach((key) => {
    mockObject[key] = jest.fn();
  });
  return mockObject;
}
