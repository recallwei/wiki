// @ts-check
/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 * */
const sidebars = {
  javascript: [
    {
      type: "doc",
      id: "javascript/index",
      label: "JavaScript"
    },
    {
      type: "category",
      label: "Built-in Objects",
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: "javascript/built-in-objects/index"
      },
      items: [
        {
          type: "doc",
          id: "javascript/built-in-objects/array",
          label: "Array"
        },
        {
          type: "doc",
          id: "javascript/built-in-objects/object",
          label: "Object"
        }
      ]
    },
    {
      type: "category",
      label: "Utilities",
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: "javascript/utilities/index"
      },
      items: [
        {
          type: "doc",
          id: "javascript/utilities/js-doc",
          label: "JSDoc"
        }
      ]
    }
  ],

  visualStudioCode: [
    {
      type: "category",
      label: "Visual Studio Code",
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: "visual-studio-code/index"
      },
      items: [
        {
          type: "doc",
          id: "visual-studio-code/fira-code-font",
          label: "Fira Code Font"
        }
      ]
    }
  ],

  algorithm: [
    {
      type: "doc",
      id: "algorithm/index",
      label: "Algorithm"
    },
    {
      type: "category",
      label: "LeetCode",
      collapsed: true,
      collapsible: true,
      link: { type: "doc", id: "algorithm/leetcode/index" },
      items: [
        {
          type: "doc",
          id: "algorithm/leetcode/[1]-two-sum",
          label: "1. 两数之和"
        }
      ]
    }
  ]
}

module.exports = sidebars
