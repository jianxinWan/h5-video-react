const fullscreen = (elem) => {
  var prefix = 'webkit';
  if (elem[prefix + 'EnterFullScreen']) {
    return prefix + 'EnterFullScreen';
  } else if (elem[prefix + 'RequestFullScreen']) {
    return prefix + 'RequestFullScreen';
  };
  return false;
};

export default fullscreen