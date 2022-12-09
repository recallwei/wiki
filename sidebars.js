// @ts-check
/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 * */
const sidebars = {
  javascript: [
    {
      type: "doc",
      id: "javascript/index",
      label: "JavaScript",
    },
    {
      type: "category",
      label: "Built-in Objects",
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: "javascript/built-in-objects/index",
      },
      items: [
        {
          type: "doc",
          id: "javascript/built-in-objects/array",
          label: "Array",
        },
        {
          type: "doc",
          id: "javascript/built-in-objects/object",
          label: "Object",
        },
      ],
    },
    {
      type: "category",
      label: "Utilities",
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: "javascript/utilities/index",
      },
      items: [
        {
          type: "doc",
          id: "javascript/utilities/js-doc",
          label: "JSDoc",
        },
      ],
    },
  ],
};

module.exports = sidebars;
