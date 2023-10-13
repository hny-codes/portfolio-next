import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const ProjectItem = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    content: { type: 'string', required: true },
    link: { type: 'string', required: true },
    site: { type: 'string', required: true },
    src: { type: 'string', required: true },
    alt: { type: 'string', required: true },
    skills: { type: 'list', of: { type: 'string' }, required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (project) => `/projects/${project._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'projectItems',
  documentTypes: [ProjectItem],
});
