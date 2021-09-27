import { Module } from 'vuex';
import { GlobalDataProps } from './index';

export interface TemplateProps {
  id: number;
  title: string;
  coverImg: string;
  author: string;
  copiedCount: number;
}

export interface TemplatesProps {
  data: TemplateProps[];
}

const testData: TemplateProps[] = [
  {
    id: 1,
    title: 'title',
    coverImg: 'https://aliyuncdn.antdv.com/v2/assets/logo.1ef800a8.svg',
    author: 'string',
    copiedCount: 110,
  },
];

const templates: Module<TemplatesProps, GlobalDataProps> = {
  state: {
    data: testData,
  },
  getters: {
    getTemplateById: (state, getters, rootState) => (id: number) => {
      return state.data.find((item) => item.id === id);
    },
  },
};

export default templates;
