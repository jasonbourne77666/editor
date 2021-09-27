import { Module } from 'vuex';
import { v4 as uuidv4 } from 'uuid';
import { GlobalDataProps } from './index';

export interface EditorProps {
  // 供中间编辑器渲染的数组
  components: ComponentData[];
  // 当前编辑的元素，uuid
  currentElement: string;
}

interface ComponentData {
  //  元素的属性，样式之类的
  props: {
    [key: string]: any;
  };
  // uuid v4 生成
  id: string;
  name: string;
}

const testData: ComponentData[] = [
  { id: uuidv4(), name: 'l-text', props: { text: 'hello', fontSize: '27px' } },
  { id: uuidv4(), name: 'l-text', props: { text: 'hello1', fontSize: '14px' } },
  { id: uuidv4(), name: 'l-text', props: { text: 'hello2', fontSize: '14px' } },
];

const editor: Module<EditorProps, GlobalDataProps> = {
  state: {
    components: testData,
    currentElement: '',
  },
};

export default editor;
