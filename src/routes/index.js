// Layouts
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Genre from '~/pages/Genre';
import Country from '~/pages/Country';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//* PublciRoutes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/genre', component: Genre },
    { path: '/country', component: Country },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

//! PrivateRoutes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
