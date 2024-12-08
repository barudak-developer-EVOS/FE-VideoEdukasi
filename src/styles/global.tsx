import { Global, css } from '@emotion/react';

const removeBgAutoFill = css`
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
  }
`;

const sortableList = css`
  .SortableList {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0;
    list-style: none;
  }

  .SortableItem {
    padding: 18px 20px;
    background-color: #fff;
    box-shadow: 0 0 0 calc(1px / var(--scale-x, 1)) rgba(63, 63, 68, 0.05),
      0 1px calc(3px / var(--scale-x, 1)) 0 rgba(34, 33, 81, 0.15);
    border-radius: calc(4px / var(--scale-x, 1));
    box-sizing: border-box;
    list-style: none;
    color: #333;
    font-weight: 400;
    font-size: 1rem;

    .header {
      display: flex;
      justify-content: space-between;
      flex-grow: 1;
      align-items: center;
      border-bottom: #edeeef 1px solid;
      margin-bottom: 5px;
    }

    .body {
      margin-top: 10px;
      /* background: lightblue; */
    }
  }

  .DragHandle {
    display: flex;
    width: 12px;
    padding: 15px;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    touch-action: none;
    cursor: var(--cursor, pointer);
    border-radius: 5px;
    border: none;
    outline: none;
    appearance: none;
    background-color: transparent;
    -webkit-tap-highlight-color: transparent;
  }

  .DragHandle:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .DragHandle:focus-visible {
    box-shadow: 0 0px 0px 2px #4c9ffe;
  }

  .DragHandle svg {
    flex: 0 0 auto;
    margin: auto;
    height: 100%;
    overflow: visible;
    fill: #919eab;
  }
`;

// import bgHeader from '@/assets/bgHeader.png';
// import bgMenu from '@/assets/bgMenu.png';
// import { CRG60, CRN10, CRN20, CRN100, CRP70, CRP80, CRP100, CRR50, CRS40 } from '@/constants/colors';

// const customCss = css`
//   input::-webkit-outer-spin-button,
//   input::-webkit-inner-spin-button {
//     -webkit-appearance: none;
//     margin: 0;
//   }
//   input[type='number'] {
//     -moz-appearance: textfield;
//   }
// `;

let fontface1 = {
  '@font-face': {
    fontFamily: 'SF Pro Display Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    src: `url('/fonts/SFProDisplay/SFPRODISPLAYREGULAR.woff') format('woff')`,
  },
};

const marginStyles = {
  '.m-0': { margin: '0px' },
  '.mx-0': { marginLeft: '0px', marginRight: '0px' },
  '.my-0': { marginTop: '0px', marginBottom: '0px' },
  '.ms-0': { marginInlineStart: '0px' },
  '.me-0': { marginInlineEnd: '0px' },
  '.mt-0': { marginTop: '0px' },
  '.mr-0': { marginRight: '0px' },
  '.mb-0': { marginBottom: '0px' },
  '.ml-0': { marginLeft: '0px' },

  '.m-px': { margin: '1px' },
  '.mx-px': { marginLeft: '1px', marginRight: '1px' },
  '.my-px': { marginTop: '1px', marginBottom: '1px' },
  '.ms-px': { marginInlineStart: '1px' },
  '.me-px': { marginInlineEnd: '1px' },
  '.mt-px': { marginTop: '1px' },
  '.mr-px': { marginRight: '1px' },
  '.mb-px': { marginBottom: '1px' },
  '.ml-px': { marginLeft: '1px' },

  '.m-0.5': { margin: '0.125rem' }, // 2px
  '.mx-0.5': { marginLeft: '0.125rem', marginRight: '0.125rem' },
  '.my-0.5': { marginTop: '0.125rem', marginBottom: '0.125rem' },
  '.ms-0.5': { marginInlineStart: '0.125rem' },
  '.me-0.5': { marginInlineEnd: '0.125rem' },
  '.mt-0.5': { marginTop: '0.125rem' },
  '.mr-0.5': { marginRight: '0.125rem' },
  '.mb-0.5': { marginBottom: '0.125rem' },
  '.ml-0.5': { marginLeft: '0.125rem' },

  '.m-1': { margin: '0.25rem' }, // 4px
  '.mx-1': { marginLeft: '0.25rem', marginRight: '0.25rem' },
  '.my-1': { marginTop: '0.25rem', marginBottom: '0.25rem' },
  '.ms-1': { marginInlineStart: '0.25rem' },
  '.me-1': { marginInlineEnd: '0.25rem' },
  '.mt-1': { marginTop: '0.25rem' },
  '.mr-1': { marginRight: '0.25rem' },
  '.mb-1': { marginBottom: '0.25rem' },
  '.ml-1': { marginLeft: '0.25rem' },

  '.m-1.5': { margin: '0.375rem' }, // 6px
  '.mx-1.5': { marginLeft: '0.375rem', marginRight: '0.375rem' },
  '.my-1.5': { marginTop: '0.375rem', marginBottom: '0.375rem' },
  '.ms-1.5': { marginInlineStart: '0.375rem' },
  '.me-1.5': { marginInlineEnd: '0.375rem' },
  '.mt-1.5': { marginTop: '0.375rem' },
  '.mr-1.5': { marginRight: '0.375rem' },
  '.mb-1.5': { marginBottom: '0.375rem' },
  '.ml-1.5': { marginLeft: '0.375rem' },

  '.m-2': { margin: '0.5rem' }, // 8px
  '.mx-2': { marginLeft: '0.5rem', marginRight: '0.5rem' },
  '.my-2': { marginTop: '0.5rem', marginBottom: '0.5rem' },
  '.ms-2': { marginInlineStart: '0.5rem' },
  '.me-2': { marginInlineEnd: '0.5rem' },
  '.mt-2': { marginTop: '0.5rem' },
  '.mr-2': { marginRight: '0.5rem' },
  '.mb-2': { marginBottom: '0.5rem' },
  '.ml-2': { marginLeft: '0.5rem' },

  '.m-2.5': { margin: '0.625rem' }, // 10px
  '.mx-2.5': { marginLeft: '0.625rem', marginRight: '0.625rem' },
  '.my-2.5': { marginTop: '0.625rem', marginBottom: '0.625rem' },
  '.ms-2.5': { marginInlineStart: '0.625rem' },
  '.me-2.5': { marginInlineEnd: '0.625rem' },
  '.mt-2.5': { marginTop: '0.625rem' },
  '.mr-2.5': { marginRight: '0.625rem' },
  '.mb-2.5': { marginBottom: '0.625rem' },
  '.ml-2.5': { marginLeft: '0.625rem' },

  '.m-3': { margin: '0.75rem' }, // 12px
  '.mx-3': { marginLeft: '0.75rem', marginRight: '0.75rem' },
  '.my-3': { marginTop: '0.75rem', marginBottom: '0.75rem' },
  '.ms-3': { marginInlineStart: '0.75rem' },
  '.me-3': { marginInlineEnd: '0.75rem' },
  '.mt-3': { marginTop: '0.75rem' },
  '.mr-3': { marginRight: '0.75rem' },
  '.mb-3': { marginBottom: '0.75rem' },
  '.ml-3': { marginLeft: '0.75rem' },

  '.m-4': { margin: '1rem' }, // 16px
  '.mx-4': { marginLeft: '1rem', marginRight: '1rem' },
  '.my-4': { marginTop: '1rem', marginBottom: '1rem' },
  '.ms-4': { marginInlineStart: '1rem' },
  '.me-4': { marginInlineEnd: '1rem' },
  '.mt-4': { marginTop: '1rem' },
  '.mr-4': { marginRight: '1rem' },
  '.mb-4': { marginBottom: '1rem' },
  '.ml-4': { marginLeft: '1rem' },

  '.m-5': { margin: '1.25rem' }, // 20px
  '.mx-5': { marginLeft: '1.25rem', marginRight: '1.25rem' },
  '.my-5': { marginTop: '1.25rem', marginBottom: '1.25rem' },
  '.ms-5': { marginInlineStart: '1.25rem' },
  '.me-5': { marginInlineEnd: '1.25rem' },
  '.mt-5': { marginTop: '1.25rem' },
  '.mr-5': { marginRight: '1.25rem' },
  '.mb-5': { marginBottom: '1.25rem' },
  '.ml-5': { marginLeft: '1.25rem' },
};

const paddingClasses = {
  '.p-0': { padding: '0px' },
  '.px-0': { paddingLeft: '0px', paddingRight: '0px' },
  '.py-0': { paddingTop: '0px', paddingBottom: '0px' },
  '.ps-0': { paddingInlineStart: '0px' },
  '.pe-0': { paddingInlineEnd: '0px' },
  '.pt-0': { paddingTop: '0px' },
  '.pr-0': { paddingRight: '0px' },
  '.pb-0': { paddingBottom: '0px' },
  '.pl-0': { paddingLeft: '0px' },
  '.p-px': { padding: '1px' },
  '.px-px': { paddingLeft: '1px', paddingRight: '1px' },
  '.py-px': { paddingTop: '1px', paddingBottom: '1px' },
  '.ps-px': { paddingInlineStart: '1px' },
  '.pe-px': { paddingInlineEnd: '1px' },
  '.pt-px': { paddingTop: '1px' },
  '.pr-px': { paddingRight: '1px' },
  '.pb-px': { paddingBottom: '1px' },
  '.pl-px': { paddingLeft: '1px' },
  '.p-0.5': { padding: '0.125rem' },
  '.px-0.5': { paddingLeft: '0.125rem', paddingRight: '0.125rem' },
  '.py-0.5': { paddingTop: '0.125rem', paddingBottom: '0.125rem' },
  '.ps-0.5': { paddingInlineStart: '0.125rem' },
  '.pe-0.5': { paddingInlineEnd: '0.125rem' },
  '.pt-0.5': { paddingTop: '0.125rem' },
  '.pr-0.5': { paddingRight: '0.125rem' },
  '.pb-0.5': { paddingBottom: '0.125rem' },
  '.pl-0.5': { paddingLeft: '0.125rem' },
  '.p-1': { padding: '0.25rem' },
  '.px-1': { paddingLeft: '0.25rem', paddingRight: '0.25rem' },
  '.py-1': { paddingTop: '0.25rem', paddingBottom: '0.25rem' },
  '.ps-1': { paddingInlineStart: '0.25rem' },
  '.pe-1': { paddingInlineEnd: '0.25rem' },
  '.pt-1': { paddingTop: '0.25rem' },
  '.pr-1': { paddingRight: '0.25rem' },
  '.pb-1': { paddingBottom: '0.25rem' },
  '.pl-1': { paddingLeft: '0.25rem' },
  '.p-1.5': { padding: '0.375rem' },
  '.px-1.5': { paddingLeft: '0.375rem', paddingRight: '0.375rem' },
  '.py-1.5': { paddingTop: '0.375rem', paddingBottom: '0.375rem' },
  '.ps-1.5': { paddingInlineStart: '0.375rem' },
  '.pe-1.5': { paddingInlineEnd: '0.375rem' },
  '.pt-1.5': { paddingTop: '0.375rem' },
  '.pr-1.5': { paddingRight: '0.375rem' },
  '.pb-1.5': { paddingBottom: '0.375rem' },
  '.pl-1.5': { paddingLeft: '0.375rem' },
  '.p-2': { padding: '0.5rem' },
  '.px-2': { paddingLeft: '0.5rem', paddingRight: '0.5rem' },
  '.py-2': { paddingTop: '0.5rem', paddingBottom: '0.5rem' },
  '.ps-2': { paddingInlineStart: '0.5rem' },
  '.pe-2': { paddingInlineEnd: '0.5rem' },
  '.pt-2': { paddingTop: '0.5rem' },
  '.pr-2': { paddingRight: '0.5rem' },
  '.pb-2': { paddingBottom: '0.5rem' },
  '.pl-2': { paddingLeft: '0.5rem' },
  '.p-2.5': { padding: '0.625rem' },
  '.px-2.5': { paddingLeft: '0.625rem', paddingRight: '0.625rem' },
  '.py-2.5': { paddingTop: '0.625rem', paddingBottom: '0.625rem' },
  '.ps-2.5': { paddingInlineStart: '0.625rem' },
  '.pe-2.5': { paddingInlineEnd: '0.625rem' },
  '.pt-2.5': { paddingTop: '0.625rem' },
  '.pr-2.5': { paddingRight: '0.625rem' },
  '.pb-2.5': { paddingBottom: '0.625rem' },
  '.pl-2.5': { paddingLeft: '0.625rem' },
  '.p-3': { padding: '0.75rem' },
  '.px-3': { paddingLeft: '0.75rem', paddingRight: '0.75rem' },
  '.py-3': { paddingTop: '0.75rem', paddingBottom: '0.75rem' },
  '.ps-3': { paddingInlineStart: '0.75rem' },
  '.pe-3': { paddingInlineEnd: '0.75rem' },
  '.pt-3': { paddingTop: '0.75rem' },
  '.pr-3': { paddingRight: '0.75rem' },
  '.pb-3': { paddingBottom: '0.75rem' },
  '.pl-3': { paddingLeft: '0.75rem' },
  '.p-3.5': { padding: '0.875rem' },
  '.px-3.5': { paddingLeft: '0.875rem', paddingRight: '0.875rem' },
  '.py-3.5': { paddingTop: '0.875rem', paddingBottom: '0.875rem' },
  '.ps-3.5': { paddingInlineStart: '0.875rem' },
  '.pe-3.5': { paddingInlineEnd: '0.875rem' },
  '.pt-3.5': { paddingTop: '0.875rem' },
  '.pr-3.5': { paddingRight: '0.875rem' },
  '.pb-3.5': { paddingBottom: '0.875rem' },
  '.pl-3.5': { paddingLeft: '0.875rem' },
  '.p-4': { padding: '1rem' },
  '.px-4': { paddingLeft: '1rem', paddingRight: '1rem' },
  '.py-4': { paddingTop: '1rem', paddingBottom: '1rem' },
  '.ps-4': { paddingInlineStart: '1rem' },
  '.pe-4': { paddingInlineEnd: '1rem' },
  '.pt-4': { paddingTop: '1rem' },
  '.pr-4': { paddingRight: '1rem' },
  '.pb-4': { paddingBottom: '1rem' },
  '.pl-4': { paddingLeft: '1rem' },
  '.p-5': { padding: '1.25rem' },
  '.px-5': { paddingLeft: '1.25rem', paddingRight: '1.25rem' },
  '.py-5': { paddingTop: '1.25rem', paddingBottom: '1.25rem' },
  '.ps-5': { paddingInlineStart: '1.25rem' },
  '.pe-5': { paddingInlineEnd: '1.25rem' },
  '.pt-5': { paddingTop: '1.25rem' },
  '.pr-5': { paddingRight: '1.25rem' },
  '.pb-5': { paddingBottom: '1.25rem' },
  '.pl-5': { paddingLeft: '1.25rem' },
  '.p-6': { padding: '1.5rem' },
  '.px-6': { paddingLeft: '1.5rem', paddingRight: '1.5rem' },
  '.py-6': { paddingTop: '1.5rem', paddingBottom: '1.5rem' },
  '.ps-6': { paddingInlineStart: '1.5rem' },
  '.pe-6': { paddingInlineEnd: '1.5rem' },
  '.pt-6': { paddingTop: '1.5rem' },
  '.pr-6': { paddingRight: '1.5rem' },
  '.pb-6': { paddingBottom: '1.5rem' },
  '.pl-6': { paddingLeft: '1.5rem' },
};

const displayClasses = {
  '.block': { display: 'block' },
  '.inline-block': { display: 'inline-block' },
  '.inline': { display: 'inline' },
  '.flex': { display: 'flex' },
  '.inline-flex': { display: 'inline-flex' },
  '.table': { display: 'table' },
  '.inline-table': { display: 'inline-table' },
  '.table-caption': { display: 'table-caption' },
  '.table-cell': { display: 'table-cell' },
  '.table-column': { display: 'table-column' },
  '.table-column-group': { display: 'table-column-group' },
  '.table-footer-group': { display: 'table-footer-group' },
  '.table-header-group': { display: 'table-header-group' },
  '.table-row-group': { display: 'table-row-group' },
  '.table-row': { display: 'table-row' },
  '.flow-root': { display: 'flow-root' },
  '.grid': { display: 'grid' },
  '.inline-grid': { display: 'inline-grid' },
  '.contents': { display: 'contents' },
  '.list-item': { display: 'list-item' },
  '.hidden': { display: 'none' },
};

const fontWeightClasses = {
  '.font-thin': { fontWeight: 100 },
  '.font-extralight': { fontWeight: 200 },
  '.font-light': { fontWeight: 300 },
  '.font-normal': { fontWeight: 400 },
  '.font-medium': { fontWeight: 500 },
  '.font-semibold': { fontWeight: 600 },
  '.font-bold': { fontWeight: 700 },
  '.font-extrabold': { fontWeight: 800 },
  '.font-black': { fontWeight: 900 },
};

const textClasses = {
  '.text-xs': { fontSize: '0.75rem', lineHeight: '1rem' },
  '.text-sm': { fontSize: '0.875rem', lineHeight: '1.25rem' },
  '.text-base': { fontSize: '222px', lineHeight: '1.5rem' },
  '.text-lg': { fontSize: '1.125rem', lineHeight: '1.75rem' },
  '.text-xl': { fontSize: '1.25rem', lineHeight: '1.75rem' },
  '.text-2xl': { fontSize: '1.5rem', lineHeight: '2rem' },
  '.text-3xl': { fontSize: '1.875rem', lineHeight: '2.25rem' },
  '.text-4xl': { fontSize: '2.25rem', lineHeight: '2.5rem' },
  '.text-5xl': { fontSize: '3rem', lineHeight: '1' },
  '.text-6xl': { fontSize: '3.75rem', lineHeight: '1' },
  '.text-7xl': { fontSize: '4.5rem', lineHeight: '1' },
  '.text-8xl': { fontSize: '6rem', lineHeight: '1' },
  '.text-9xl': { fontSize: '8rem', lineHeight: '1' },
};

const widthClasses = {
  '.w-0': { width: '0px' },
  '.w-px': { width: '1px' },
  '.w-0.5': { width: '0.125rem' }, // 2px
  '.w-1': { width: '0.25rem' }, // 4px
  '.w-1.5': { width: '0.375rem' }, // 6px
  '.w-2': { width: '0.5rem' }, // 8px
  '.w-2.5': { width: '0.625rem' }, // 10px
  '.w-3': { width: '0.75rem' }, // 12px
  '.w-3.5': { width: '0.875rem' }, // 14px
  '.w-4': { width: '1rem' }, // 16px
  '.w-5': { width: '1.25rem' }, // 20px
  '.w-6': { width: '1.5rem' }, // 24px
  '.w-7': { width: '1.75rem' }, // 28px
  '.w-8': { width: '2rem' }, // 32px
  '.w-9': { width: '2.25rem' }, // 36px
  '.w-10': { width: '2.5rem' }, // 40px
  '.w-11': { width: '2.75rem' }, // 44px
  '.w-12': { width: '3rem' }, // 48px
  '.w-14': { width: '3.5rem' }, // 56px
  '.w-16': { width: '4rem' }, // 64px
  '.w-20': { width: '5rem' }, // 80px
  '.w-24': { width: '6rem' }, // 96px
  '.w-28': { width: '7rem' }, // 112px
  '.w-32': { width: '8rem' }, // 128px
  '.w-36': { width: '9rem' }, // 144px
  '.w-40': { width: '10rem' }, // 160px
  '.w-44': { width: '11rem' }, // 176px
  '.w-48': { width: '12rem' }, // 192px
  '.w-52': { width: '13rem' }, // 208px
  '.w-56': { width: '14rem' }, // 224px
  '.w-60': { width: '15rem' }, // 240px
  '.w-64': { width: '16rem' }, // 256px
  '.w-72': { width: '18rem' }, // 288px
  '.w-80': { width: '20rem' }, // 320px
  '.w-96': { width: '24rem' }, // 384px
  '.w-auto': { width: 'auto' },
  '.w-1/2': { width: '50%' },
  '.w-1/3': { width: '33.333333%' },
  '.w-2/3': { width: '66.666667%' },
  '.w-1/4': { width: '25%' },
  '.w-2/4': { width: '50%' },
  '.w-3/4': { width: '75%' },
  '.w-1/5': { width: '20%' },
  '.w-2/5': { width: '40%' },
  '.w-3/5': { width: '60%' },
  '.w-4/5': { width: '80%' },
  '.w-1/6': { width: '16.666667%' },
  '.w-2/6': { width: '33.333333%' },
  '.w-3/6': { width: '50%' },
  '.w-4/6': { width: '66.666667%' },
  '.w-5/6': { width: '83.333333%' },
  '.w-1/12': { width: '8.333333%' },
  '.w-2/12': { width: '16.666667%' },
  '.w-3/12': { width: '25%' },
  '.w-4/12': { width: '33.333333%' },
  '.w-5/12': { width: '41.666667%' },
  '.w-6/12': { width: '50%' },
  '.w-7/12': { width: '58.333333%' },
  '.w-8/12': { width: '66.666667%' },
  '.w-9/12': { width: '75%' },
  '.w-10/12': { width: '83.333333%' },
  '.w-11/12': { width: '91.666667%' },
  '.w-full': { width: '100%' },
  '.w-screen': { width: '100vw' },
  '.w-svw': { width: '100svw' },
  '.w-lvw': { width: '100lvw' },
  '.w-dvw': { width: '100dvw' },
  '.w-min': { width: 'min-content' },
  '.w-max': { width: 'max-content' },
  '.w-fit': { width: 'fit-content' },
};

export default marginStyles;

export const globalStyles = (
  <Global
    styles={css(
      {
        '.card': {
          backgroundColor: '#ffffff',
          padding: 20,
          borderRadius: 12,
          boxShadow: '0.8px 1.8px 1.8px rgba(0, 0, 0, 0.015),6px 14px 14px rgba(0, 0, 0, 0.03)',
        },

        '.ant-input-number': {
          width: '100%',
          borderRadius: 10,
        },
        '.ant-input': {
          borderRadius: 10,
        },
        '.ant-input-password': {
          borderRadius: 10,
        },
        '.ant-select:not(.ant-select-customize-input) .ant-select-selector': {
          borderRadius: 10,
        },
        '.ant-picker': {
          borderRadius: 10,
          '&.rounded': {
            borderRadius: 100,
          },
          '&.height': {
            height: 45,
          },
        },

        '.ant-btn': {
          fontWeight: 500,
          borderRadius: 10,
        },

        '.grey': {
          color: '#475569',
        },

        '.black': {
          color: '#334155',
        },

        '.secondary': {
          color: '#94a3b8',
        },

        '.ant-layout': {
          backgroundColor: '#F6F8FA',
        },

        '.shadow': {
          boxShadow: '0px 0px 31px rgba(31, 41, 51, 0.08)',
        },

        '.ant-menu-item, .ant-menu-title-content': {
          fontWeight: 600,
        },
        '.ant-menu-item:not(.ant-menu-item-selected) .ant-menu-title-content': {
          color: '#334155',
        },

        '.ant-input-disabled': {
          color: '#334155 !important',
        },

        '.ant-modal-content': {
          borderRadius: 12,
        },

        '.ant-input-number-group-addon': {
          borderRadius: '0 10px 10px 0',
        },

        // a: {
        //   ':hover': {
        //     textDecoration: 'underline !important',
        //   },
        // },
        // '.ant-input[disabled], .ant-input-number-disabled': {
        //   color: 'black',
        // },

        // '.ant-select.ant-select-disabled .ant-select-selection-item': {
        //   color: 'black',
        // },

        // '.ant-input-number-input[disabled]': {
        //   color: 'black',
        // },

        // '.ant-picker-disabled .ant-picker-input > input[disabled]': {
        //   color: 'black',
        // },

        // '.ant-collapse-content': {
        //   borderTop: 'none',
        // },

        // '.ant-collapse > .ant-collapse-item': {
        //   borderBottom: 'none',
        // },

        // '.ant-input, .ant-picker, .ant-input-number, .ant-input-search-button': {
        //   border: '1px solid #d9d9d9 !important',
        // },

        // '.ant-select:not(.ant-select-customize-input) .ant-select-selector': {
        //   border: '1px solid #d9d9d9 !important',
        // },

        // '.ant-input-number-group-addon': {
        //   border: '1px solid #d9d9d9 !important',
        // },

        // '.ant-input-number': {
        //   border: '1px solid #d9d9d9 !important',
        // },

        // '.ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector': {
        //   color: 'black',
        // },

        // '.ant-input-group-wrapper.ant-input-search input': {
        //   border: '0 !important',
        // },

        // '.ant-btn': {
        //   fontWeight: 500,
        // },

        // '.ant-checkbox-disabled .ant-checkbox-inner': {
        //   borderColor: '#d9d9d9 !important',
        // },

        // '.ant-input-affix-wrapper': {
        //   border: '1px solid #d9d9d9 !important',
        // },

        // '.ant-checkbox-disabled + span': {
        //   color: 'black',
        // },

        // '.ql-toolbar.ql-snow': {
        //   borderRadius: '8px 8px 0 0',
        // },

        // '.ql-container.ql-snow': {
        //   borderRadius: '0 0 8px 8px',
        // },

        // '.ql-editor': {
        //   minHeight: 150,
        // },

        // '*::-webkit-scrollbar': { height: '9px', width: '9px' },
        // '*::-webkit-scrollbar-track': {
        //   borderRadius: '5px',
        //   backgroundColor: '#cfcfcf',
        // },
        // '*::-webkit-scrollbar-track:hover': { backgroundColor: '#cfcfcf' },
        // '*::-webkit-scrollbar-track:active': { backgroundColor: '#cfcfcf' },
        // '*::-webkit-scrollbar-thumb': {
        //   borderRadius: '5px',
        //   backgroundColor: '#8f8f8f',
        // },
        // '*::-webkit-scrollbar-thumb:hover': { backgroundColor: '#8f8f8f' },
        // '*::-webkit-scrollbar-thumb:active': { backgroundColor: '#8f8f8f' },

        // button: {
        //   fontWeight: '600 !important',
        // },

        // ':root': {
        //   colorScheme: 'light',
        // },
        // '@media (prefers-color-scheme: dark)': {
        //   html: {
        //     colorScheme: 'light',
        //   },
        //   body: {
        //     color: `${CRN100}!important`,
        //     backgroundColor: `${CRN10}!important`,
        //   },
        // },

        // '.ant-card': {
        //   borderRadius: 20,
        //   '.ant-card-body': {
        //     padding: 30,
        //   },
        // },
        // '.ant-layout-sider-collapsed': {
        //   '.ant-menu-item': {
        //     paddingLeft: '25px!important',
        //   },
        //   '.anticon': {
        //     lineHeight: '1!important',
        //   },
        // },
        // '.ant-layout-sider': {
        //   '&:not(.ant-layout-sider-collapsed)': {
        //     '.ant-menu-title-content': {
        //       marginLeft: '0!important',
        //     },
        //   },
        //   backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgMenu.src})`,
        //   backgroundSize: 'cover',
        //   backgroundRepeat: 'no-repeat',
        // },
        // '.ant-modal-title': {
        //   paddingRight: 20,
        // },
        // '.ant-upload': {
        //   color: CRP100,
        //   fontWeight: 500,
        //   fontSize: 14,
        //   '.anticon-plus': {
        //     color: 'red',
        //     svg: {
        //       color: CRS40,
        //     },
        //   },
        // },
        // '.ant-switch': {
        //   backgroundColor: CRN10,
        //   boxShadow: '0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)!important',
        //   '&.ant-switch-checked': {
        //     '.ant-switch-handle': {
        //       '&:before': {
        //         backgroundColor: `${CRG60}!important`,
        //       },
        //     },
        //   },
        // },
        // '.ant-switch-handle': {
        //   '&:before': {
        //     background: CRR50,
        //   },
        // },
        // '.ant-table': {
        //   td: {
        //     color: CRP80,
        //   },
        //   th: {
        //     color: CRP80,
        //   },
        //   '.ant-checkbox-checked': {
        //     '.ant-checkbox-inner': {
        //       background: CRN10,
        //       '&:after': {
        //         borderColor: `${CRP80}!important`,
        //       },
        //     },
        //   },
        //   '.ant-checkbox': {
        //     '.ant-checkbox-inner': {
        //       borderRadius: 2,
        //       borderColor: `${CRP80}!important`,
        //       borderWidth: 2,
        //     },
        //   },
        // },
        // '.ant-tabs-tab': {
        //   minWidth: 129,
        //   justifyContent: 'center',
        // },
        // '.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn': {
        //   color: CRP70,
        // },
        // '.ant-tabs-ink-bar': {
        //   backgroundColor: CRP70,
        // },
        'html,body, #__next': {
          fontface1,
          // fontface2,
          fontFamily: 'SF Pro Display Regular',
        },
        // '.ant-form-item-explain-error': {
        //   color: CRR50,
        //   maxWidth: '80%',
        //   fontSize: 16,
        //   fontWeight: 400,
        //   fontFamily: 'DINPro-Regular',
        // },
        // '.ant-modal-body': {
        //   maxHeight: '75vh',
        //   overflow: 'auto',
        //   paddingBottom: 0,
        //   padding: '15px 30px 0px',
        // },
        // '.menuDropdown': {
        //   fontFamily: 'DinPro-Medium',
        //   '.ant-dropdown-menu-item': {
        //     padding: '0 15px',
        //     a: {
        //       lineHeight: '43px',
        //     },
        //   },
        //   width: 200,
        // },
        // '.menuDropdown.ant-dropdown-menu': {
        //   borderRadius: 10,
        //   padding: 0,
        // },
        // '.ant-input[disabled]': {
        //   color: CRP80,
        // },
        // '.ant-table-tbody > tr.ant-table-row-selected > td': {
        //   background: CRN10,
        // },
        // '.ant-layout': {
        //   background: CRN20,
        //   '.ant-layout-header': {
        //     backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgHeader.src})`,
        //   },
        //   '.ant-layout-sider-children': {
        //     '.ant-menu-submenu-open .ant-menu-submenu-title .ant-menu-title-content': {
        //       color: '#00ADEE !important',
        //       '.ant-menu-item-icon svg': {
        //         fill: '#00ADEE',
        //       },
        //     },
        //     '.ant-menu-item, .ant-menu-submenu-title': {
        //       paddingLeft: '12px !important',
        //       display: 'flex',
        //       alignItems: 'center',
        //       gap: 10,
        //       margin: 0,
        //       height: 50,
        //       a: {
        //         fontWeight: 500,
        //         color: CRN10,
        //         textDecoration: 'unset',
        //       },
        //       borderRight: '5px solid transparent',
        //       '&:hover': {
        //         borderRight: `5px solid #FBED1D`,
        //         // background: CRN100,
        //         background: '#0A91CE !important',
        //       },
        //     },
        //     '.ant-menu-item-only-child': {
        //       paddingLeft: '45px !important',
        //     },
        //     '.ant-menu-submenu:hover .ant-menu-submenu-title .ant-menu-submenu-arrow': {
        //       color: CRN10,
        //     },
        //     '.ant-menu-submenu-arrow': {
        //       color: CRN10,
        //     },
        //     '.ant-menu-root': {
        //       borderTop: `1px solid ${CRN10}`,
        //       // backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgMenu.src})`,
        //       // backgroundSize: 'cover',
        //       // backgroundRepeat: 'no-repeat',
        //       backgroundColor: '#fff0',
        //       color: CRN10,
        //     },
        //     '.ant-menu-title-content': {
        //       color: CRN10,
        //       fontWeight: 500,
        //     },
        //     // '.ant-menu-item-selected a, .ant-menu-item-selected a:hover': {
        //     //   color: `${CRS40}!important`,
        //     // },
        //     '.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected': {
        //       background: '#0A91CE !important',
        //       borderRight: '5px solid #FBED1D',
        //       color: '#00ADEE',
        //     },
        //     '.ant-menu-sub': {
        //       background: '#00000000',
        //       // borderRight: `5px solid #FBED1D`,
        //       // opacity: `0.6`,
        //     },
        //   },
        // },
        // '.ant-divider': {
        //   borderTop: `.5px solid ${CRP80}`,
        // },
        // '.ant-input-show-count-suffix': {
        //   position: 'absolute',
        //   right: 0,
        //   bottom: -24,
        //   fontSize: 12,
        // },
        // '.ant-form-item-label': {
        //   paddingBottom: 10,
        //   label: {
        //     fontSize: 14,
        //     color: CRP80,
        //     fontWeight: 500,
        //   },
        // },
        // '.ant-input-affix-wrapper': {
        //   border: `1px solid ${CRP70}`,
        //   borderRadius: 10,
        // },
        // 'label.ant-checkbox-wrapper': {
        //   span: {
        //     color: `${CRP80}!important`,
        //     fontWeight: 500,
        //   },
        // },
        // '.ant-checkbox-checked': {
        //   '.ant-checkbox-inner': {
        //     background: CRP80,
        //   },
        // },
        // '.ant-checkbox': {
        //   '.ant-checkbox-inner': {
        //     borderRadius: 2,
        //     borderColor: '#F09420!important',
        //   },
        // },
        // '.ant-modal-content': {
        //   borderRadius: 20,
        //   overflow: 'hidden',
        //   '.ant-modal-header': {
        //     padding: '30px 30px 9px',
        //     borderBottom: 'unset',
        //   },
        //   '.ant-modal-close': {
        //     right: 30,
        //     top: 30,
        //     '.ant-modal-close-x': {
        //       color: CRP80,
        //       lineHeight: '0',
        //       height: 20,
        //       width: 20,
        //       svg: {
        //         height: 20,
        //         width: 20,
        //       },
        //     },
        //   },
        //   '.ant-modal-footer': {
        //     margin: '0 30px',
        //     padding: '25px 0',
        //     borderTop: `1px solid ${CRN100}`,
        //     display: 'flex',
        //     gap: 8,
        //     justifyContent: 'flex-end',
        //     button: {
        //       height: 42,
        //       flex: 1,
        //       '&.ant-btn-default': {
        //         color: CRP80,
        //         marginLeft: '30%',
        //         borderColor: CRP80,
        //       },
        //       '&.ant-btn-primary': {
        //         background: CRP80,
        //         borderColor: CRP80,
        //       },
        //       marginLeft: '0!important',
        //     },
        //   },
        // },
        // '.cssOpenModalAlertxmis243342': {
        //   fontface1,
        //   fontface2,
        //   '.ant-modal-content': {
        //     width: 550,
        //     fontFamily: 'DINPro-Medium',
        //   },
        //   '.ant-modal-body': {
        //     paddingBottom: 50,
        //   },
        //   '.ant-modal-confirm-title .ant-typography': {
        //     fontSize: 24,
        //     fontFamily: 'DINPro-Medium',
        //     color: '#7C7C7C',
        //   },
        //   '.ant-modal-confirm-btns .ant-btn.ant-btn.ant-btn-lg': {
        //     fontSize: 20,
        //     fontFamily: 'DINPro-Medium',
        //     width: '200px!important',
        //     height: '65px!important',
        //   },
        //   '.ant-modal-confirm-content .ant-typography': {
        //     fontSize: 24,
        //     fontFamily: 'DINPro-Regular',
        //     color: '#7C7C7C',
        //   },
        //   '.ant-modal-confirm-btns': {
        //     padding: '29px 20px 0',
        //     marginTop: 19,
        //     display: 'flex',
        //     justifyContent: 'center',
        //     gap: 20,
        //     borderTop: `2px solid #2B3990!important`,
        //     '.ant-btn': {
        //       minWidth: 'unset',
        //     },
        //   },
        // },
        // '.ant-radio-wrapper': {
        //   alignItems: 'center',
        //   '>span': {
        //     '&:not(.ant-radio)': {
        //       lineHeight: 1,
        //       marginTop: 3,
        //     },
        //   },
        // },
        // '.ant-radio': {
        //   '.ant-radio-inner': {
        //     width: 16,
        //     height: 16,
        //     // '&:after': {
        //     //   width: '32px!important',
        //     //   height: '32px!important',
        //     //   marginLeft: -16,
        //     //   marginTop: -16,
        //     // },
        //   },
        //   '&.ant-radio-checked ': {
        //     borderColor: CRP70,
        //     '.ant-radio-inner': {
        //       borderColor: CRP70,
        //       '&:after': {
        //         backgroundColor: CRP70,
        //       },
        //     },
        //   },
        // },
        // '.ant-notification': {
        //   marginRight: 0,
        //   '.ant-notification-notice': {
        //     borderRadius: '6px 0px 0px 6px',
        //     overflow: 'hidden',
        //   },
        // },
        // '.ant-message-notice': {
        //   textAlign: 'right',
        //   paddingRight: 0,
        //   '.ant-message-notice-content': {
        //     borderRadius: '6px 0px 0px 6px',
        //     overflow: 'hidden',
        //     padding: 0,
        //     '.ant-message-custom-content': {
        //       padding: '15px 30px',
        //       fontSize: 20,
        //       '&.ant-message-success': {
        //         color: '#FFF',
        //         backgroundColor: '#77D590',
        //       },
        //       '&.ant-message-loading': {
        //         color: '#FFF',
        //         backgroundColor: '#00ADEE',
        //       },
        //       '&.ant-message-error': {
        //         color: '#FFF',
        //         backgroundColor: '#E93E2F',
        //       },
        //       '&.ant-message-info': {
        //         color: '#FFF',
        //         backgroundColor: '#00ADEE',
        //       },
        //     },
        //     '.anticon': {
        //       display: 'none',
        //     },
        //     '.anticon-loading': {
        //       display: 'inline-block',
        //       color: '#FFF',
        //     },
        //   },
        // },
      },
      // customCss,
      removeBgAutoFill,
      sortableList,
      marginStyles,
      paddingClasses,
      displayClasses,
      textClasses,
      fontWeightClasses,
      widthClasses,
    )}
  />
);
