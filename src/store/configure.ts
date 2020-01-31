const configureStore = process.env.NODE_ENV === 'production' ? require('./configure.prod') : require('./configure.dev');

export default configureStore;
