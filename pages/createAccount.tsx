import dynamic from 'next/dynamic';

const Component = dynamic(() => import(/* webpackChunkName: "createAccount-page" */ '../src/components/templates/CreateAccount/index'), {
  ssr: false,
});
export default Component;
