import { createStore } from 'vuex';
import templates, { TemplatesProps } from './template';
import user, { UserProps } from './user';
import editor, { EditorProps } from './editor';

export interface GlobalDataProps {
  user: UserProps;
  templates: TemplatesProps;
  editor: EditorProps;
}

// Create a new store instance.
const store = createStore<GlobalDataProps>({
  modules: {
    user,
    templates,
    editor,
  },
});

export default store;
