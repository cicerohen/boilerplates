import {useContext} from 'react';

import Context from './AuthContext';

const useAuthContext = () => useContext(Context);

export default useAuthContext;
